import UserOutput from "./components/UserOutput";
import UserInput from "./components/UserInput";
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

  //TODO: how to handle all entries, not one by one
  //setState merges whatever passed with the existing state and update the existing state
  userChangeHandler = (event) => {
    this.setState({
      username: [
        { user: event.target.value },
        { user: "jhonata11" },
        { user: "deaeller" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        {/* call the method here too */}
        <UserInput 
        changed={this.userChangeHandler}
        value={this.state.username[0].user}
         /> 
        {/* call the method to change the user dynamic from input  */}
        {/* userName is the props  */}
        {/* user is the state property */}
        <UserOutput
          userName={this.state.username[0].user} 
          changed={this.userChangeHandler}
        />
        <UserOutput userName={this.state.username[1].user} />
        <UserOutput userName={this.state.username[2].user} />
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

//Onchange
//changes on inpuy
