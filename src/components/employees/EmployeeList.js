import React, { Component } from 'react'
import pic from "./pic.png"
import { Link } from "react-router-dom"


export default class EmployeeList extends Component {
    render() {
      
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {employee.name}
                                    <img src={pic} className="icon--pic" />
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                    <a href="#"
                                        onClick={() => this.props.deleteEmployee(employee.id)}
                                        className="card-link">Deete</a>
                            
                                </h4>

                            </div>


                        </div>
                    )
                }
            </section>
        )
    }
}

