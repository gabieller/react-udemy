import UserOutput from "./components/UserOutput";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    username: [
      { user: "gabieller" },
      { user: "jhonata11" },
      { user: "deaeller" },
    ],
  };

  userChangeHandler = (event) => {
    this.setState({
      username: [
        { user: event.target.value },
        { user: event.target.value },
        { user: event.target.value },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput user={this.state.username[0].user} changed= {this.handleS} />
        <UserOutput user={this.state.username[1].user} />
        <UserOutput user={this.state.username[2].user} />
      </div>
    );
  }
}

export default App;

// Add a method to manipulate the state (=> an event-handler method)
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput
// Add two-way-binding to your input (in UserInput) to also display the starting username
// Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
