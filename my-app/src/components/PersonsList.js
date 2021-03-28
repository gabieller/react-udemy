import React, { Component } from "react"
import Person from "./Person"

class PersonsList extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)} // Here the function used are in the other component (App.js), so we need to pass as props and created the props there
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      )
    })
  }
}

export default PersonsList
