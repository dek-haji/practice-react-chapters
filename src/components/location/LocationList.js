import React, { Component }from 'react'

class LocationList extends Component {
    render() {
        return(
          <section className="locations">
          {
              this.props.locations.map(location => 
                  <div key={location.id} className="card">
                  <div className="card-body">
              
                    {location.name}
                    <a href="#"
                    onClick={() => this.props.deleteLocations(location.id)} 
                    className="card-link">Delete</a>
                    
                  </div>
                  </div>
              )
          }
          </section>
        )
    }
}


export default LocationList