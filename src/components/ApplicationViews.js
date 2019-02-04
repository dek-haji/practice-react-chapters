import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employees/EmployeeList'
import OwnerList from './owners/OwnerList'
import SchoolList from './school/SchoolList'
import AnimalManager from "../modules/AnimalManager"
import OwnerManager from '../modules/OwnerManager';
import SchoolManager from "../modules/SchoolManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import AnimalDetail  from "./animals/AnimalDetail"
import EmployeeDetail from "./employees/EmployeeDetail"
import OwnerDetail from "./owners/OwnerDetail"


export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        schools: []
    }
componentDidMount(){
   // Example code. Make this fit into how you have written yours.
AnimalManager.getAll().then(allAnimals => {
    this.setState({
        animals: allAnimals
    })
})
OwnerManager.getAll().then(AllOwners => {
    this.setState({
        owners: AllOwners
    })
})
SchoolManager.getAll().then(AllSchools => {
    this.setState({
        schools: AllSchools
    })
   
})
EmployeeManager.getAll().then(AllEmployees => {
    this.setState({
        employees: AllEmployees
    })
})
LocationManager.getAll().then(AllLocations => {
    this.setState({
        locations: AllLocations
    })
})
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
                <Route path="/animals/:animalId(\d+)" render={(props) => {
    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
}} />
                < Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />

                }} />
                 < Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />

                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwners={this.deleteOwners} owners={this.state.owners} />
                }} />
                 < Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwners={this.deleteOwners} owners={this.state.owners} />

                }} />
                <Route exact path="/schools" render={(props) => {
                    return <SchoolList schools={this.state.schools} />
                }} />
            </React.Fragment>
        )
    }
}
