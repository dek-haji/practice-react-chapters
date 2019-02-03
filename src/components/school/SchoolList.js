import React, { Component} from 'react'

class SchoolList extends Component {
    render() {
        return(
           <section className="schools">
           {
               this.props.schools.map(school =>
                <div key={school.id}>
                    {school.name}

                </div>)
           }

           </section>
        )
    }
}

export default SchoolList