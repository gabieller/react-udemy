import { Component } from "react"
import "./styles/App.css"
import PersonsList from "./components/PersonsList"
import Cockpit from "./components/Cockpit"
import AuthContext from "./context/auth-context"

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Gabriela", age: 26 },
      { id: 2, name: "Jhonata", age: 27 },
      { id: 3, name: "Manoel", age: 6 },
    ],
    showPerson: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  }

  static getDerivedStateFromProps(props, state) {
    return state //return updated state
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.state.changeCounter + 1, //use to update a state when deppendign of an old state
      }
    }) //set the state for the updated array
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson: !doesShow })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
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
          <button
            onClick={() => {
              this.setState({ showCockpit: false })
            }}
          >
            Remove Cockpit
          </button>
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler,
            }}
          >
            {this.state.showCockpit ? (
              <Cockpit
                title={this.props.appTitle}
                persons={this.state.persons}
                clicked={this.togglePersonHandler}
              />
            ) : null}
            {this.state.showPerson ? (
              <div>
                {/* I need to pass the props needed by the component */}
                <PersonsList
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangeHandler}
                  isAutheticated={this.state.authenticated}
                />
              </div>
            ) : null}
          </AuthContext.Provider>
        </header>
      </div>
    )
  }
}

export default App
