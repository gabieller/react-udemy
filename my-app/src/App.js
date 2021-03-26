import { Component } from "react"
import "./styles/App.css"
import PersonsList from "./components/PersonsList"
import Cockpit from "./components/Cockpit"

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
    return (
      <div className="App">
        <header className="App-header">
          {/* I need to pass the props needed by the component */}
          <Cockpit
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {this.state.showPerson ? (
            <div>
              {/* I need to pass the props needed by the component */}
              <PersonsList
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
              />
            </div>
          ) : null}
        </header>
      </div>
    )
  }
}

export default App
