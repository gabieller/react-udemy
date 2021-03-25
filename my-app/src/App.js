import { Component } from "react"
import "./App.css"
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Gabriela", age: 26 },
      { id: 2, name: "Jhonata", age: 27 },
      { id: 3, name: "Manoel", age: 6 },
    ],
    showPerson: false,
  }

  nameChangeHandler = (event, id) => {
    //update the state only of the person we type in the input
    const personIndex = this.state.persons.findIndex((p) => {
      //execute findIndex in every array element
      return p.id === id //return true of false, check if p element has the same id received as function arguments
    })

    const person = {
      //not mutate the state directly -> create a new js object
      ...this.state.persons[personIndex],
    }
    person.name = event.target.value //update the person name, using always copy arrays

    const persons = [...this.state.persons] //update the array
    persons[personIndex] = person

    this.setState({ persons: persons }) //set the state for the updated array
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    //always create a new array to mutate the state
    const persons = [...this.state.persons] //using spreed to create a new array and get access to all the person in the state
    persons.splice(personIndex, 1) //remove one element from the array by using the index
    this.setState({ persons: persons }) //updating the state
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }

    if (this.state.showPerson) {
      style.backgroundColor = "red"
    }

    // let classes = ["red", "bold"].join(" ") turn this array into one string -> "red bold"
    //ClassName Dynamically
    const classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a react project</h1>
          <p className={classes.join(" ")}>I'm working now</p>{" "}
          {/* transform into string */}
          <button style={style} onClick={this.togglePersonHandler} className="btn-app">
            Toggle Person
          </button>
          {this.state.showPerson ? (
            <div>
              {this.state.persons.map((person, index) => {
                return (
                  <Person
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) =>
                      this.nameChangeHandler(event, person.id)
                    }
                  />
                )
              })}
            </div>
          ) : null}
        </header>
      </div>
    )
  }
}

export default App
