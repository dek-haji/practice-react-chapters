import React, { Component } from 'react'
import trump from "./trump.jpg"
import { Link } from "react-router-dom";

export default class OwnerList extends Component {
render() {
    
    return (
        <section className="owners">
        {
            this.props.owners.map(owner => 
                <div key={owner.id} className="card">
                <div className="card-body">
                <h4 className="card-title">
                {owner.name}
                <img src={trump} className="icon--trump" />
                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                <a href= "#"
                onClick={() => this.props.deleteOwners(owner.id)}
                className="card-link">ERASE</a>
                </h4>
                </div>

                </div>
                )
            }
         </section>

        )
    }
}

