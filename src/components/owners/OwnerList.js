import React, { Component } from 'react'
import trump from "./trump.jpg"

class OwnerList extends Component {
render() {
    return (
        <section className="owners">
        {
            this.props.owners.map(owner => 
                <div key={owner.id} className="card">
                <div className="card-body">
                {owner.name}
                <h4 className="card-title">
                <img src={trump} className="icon--trump" />
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

export default OwnerList