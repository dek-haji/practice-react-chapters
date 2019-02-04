import React, { Component } from 'react'
import trump from "./trump.jpg"

class OwnerDetail extends Component {
render() {
    const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}
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
                onClick={() => this.props.deleteOwners(owner.id)
                .then(() => this.props.history.push("./owners"))}
                
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

export default OwnerDetail