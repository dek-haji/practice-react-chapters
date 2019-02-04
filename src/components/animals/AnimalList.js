import React, { Component } from 'react'
import dog from "./DogIcon.png"
import { Link } from "react-router-dom";
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                {animal.name}
                                <img src={dog} className="icon--dog" />
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}