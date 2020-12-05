import React, { Component } from "react";
import "./App.css";
import "./UserInput/UserInput.js";
import UserInput from "./UserInput/UserInput.js";
import "./UserOutput/UserOutput.js";
import UserOutput from "./UserOutput/UserOutput.js";

class App extends Component {
  state = {
    userName: "Danones",
  };

  usernameHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Diogo" />
      </div>
    );
  }
}

export default App;
