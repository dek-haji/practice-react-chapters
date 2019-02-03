import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employees/EmployeeList'
import OwnerList from './owners/OwnerList'
import SchoolList from './school/SchoolList'


export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        schools: []
    }
componentDidMount(){
    const newState = {}
    fetch("http://localhost:5002/animals")
    .then(r => r.json())
    .then(animals => newState.animals = animals)
    .then(() => fetch("http://localhost:5002/employees")
    .then(r => r.json()))
    .then(employees => newState.employees = employees)
    .then(() => fetch("http://localhost:5002/owners")
    .then(r => r.json()))
    .then(owners => newState.owners = owners)
    .then(() => fetch("http://localhost:5002/locations")
    .then(r => r.json()))
    .then(locations => newState.locations = locations)
    .then(() => fetch("http://localhost:5002/schools")
    .then(r => r.json()))
    .then(schools => newState.schools = schools)
    .then(() => this.setState(newState))
}



deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/animals`))
    .then(e => e.json())
    .then(animals => this.setState({
        animals: animals
    }))
}
deleteEmployee = id => {
    return fetch(`http://localhost:5002/employees/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/employees`))
    .then(e => e.json())
    .then(employees => this.setState({
        employees: employees
    }))
}
deleteLocations = id => {
    return fetch(`http://localhost:5002/locations/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/locations`))
    .then(e => e.json())
    .then(locations => this.setState({
        locations: locations
    }))
}

deleteOwners = id => {
    return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
    })
    .then(e => e.json())
    .then(() => fetch(`http://localhost:5002/owners`))
    .then(e => e.json())
    .then(owners => this.setState({
        owners: owners
    }))
}

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteLocations={this.deleteLocations} locations={this.state.locations} />
                }} />
                
                <Route exact path="/animals" render={(props) => {
                     return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                < Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />

                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwners={this.deleteOwners} owners={this.state.owners} />
                }} />
                <Route exact path="/schools" render={(props) => {
                    return <SchoolList schools={this.state.schools} />
                }} />
            </React.Fragment>
        )
    }
}
