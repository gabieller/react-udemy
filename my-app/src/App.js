import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Gabriela", age: 26 },
      { name: "Jhonata", age: 27 },
      { name: "Manoel", age: 6 },
    ],
  };

  switchNameHander = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: "Jhoninha", age: 27 },
        { name: "Manoel", age: 5 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Gabriela", age: 26 },
        { name: event.target.value, age: 27 },
        { name: "Manoel", age: 5 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hi, I'm a react project</h1>
          <button style={style} onClick={() => this.switchNameHander("Bibica")}>
            Switch Name
          </button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHander.bind(this, "Gabi")} //reference to click property
            changed={this.nameChangeHandler}
          >
            {" "}
            My hobbies are: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </header>
      </div>
    );
  }
}

export default App;
