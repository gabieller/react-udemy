import { Component } from "react";
import "./App.css";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends Component {
  state = { input: "" };

  changeInputHandler = (event) => {
    this.setState({ input: event.target.value });
  };

  deleteChar = (letterIndex) => {
    const splitArray = this.state.input.split("");
    splitArray.splice(letterIndex, 1);
    const updatedText = splitArray.join("");
    this.setState({ input: updatedText });
  };

  render() {
    const characters = this.state.input.split("").map((e, index) => {
      return (
        <CharComponent
          value={e}
          key={index}
          click={() => this.deleteChar(index)}
        />
      ); //rendering different components deppending on the size of array
    });

    return (
      <div className="App">
        <input
          type="text"
          // inputlength={this.state.input}
          onChange={this.changeInputHandler}
        />

        <div className="input-info">
          <p>inputed text: {this.state.input}</p>
          <p>input text lenght: {this.state.input.length}</p>
          <ValidationComponent changed={this.state.input.length} />
          {characters}
        </div>
      </div>
    );
  }
}

export default App;
