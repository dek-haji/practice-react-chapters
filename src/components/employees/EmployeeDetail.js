import React, { Component } from 'react'
import pic from "./pic.png"


class EmployeeList extends Component {
    render() {
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}
        return (
            <section className="employees">
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {employee.name}
                                    <img src={pic} className="icon--pic" />
                                    </h4>
                        <h1 className="card-title">{employee.name} </h1>
                                    <a href="#"
                                        onClick={() => this.props.deleteEmployee(employee.id)
                                        .then(() => this.props.history.push("/employees"))}
                                        className="card-link">Delete</a>
                            
                                

                            </div>


                        </div>
                    )
                }
            </section>
        )
    }
}

export default EmployeeList