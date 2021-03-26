import React from "react"
import Person from "./Person"

const personsList = (props) =>
  props.persons.map((person, index) => {
    return (
      // Here the function used are in the other component (App.js), so we need to pass as props and created the props there
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
      />
    )
  })

export default personsList
