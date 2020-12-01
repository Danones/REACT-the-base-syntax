import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput.js';
import './UserOutput/UserOutput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    users: [
      {username: "Danones"},
      {username: "Raquel"},
      {username: "Vanessa"}
    ],
    otherState: "some other value"
  }


  usernameHandler = () => {

    this.setState = ({
      users: [
        {username: "Diogo"},
        {username: "Xana"},
        {username: "Né"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick ={this.usernameHandler}>Switch Usernames</button>
        <UserOutput username ={this.state.users[0].username}></UserOutput>
        <UserOutput username ={this.state.users[1].username}></UserOutput>
        <UserOutput username ={this.state.users[2].username}></UserOutput>
      </div>
    );
  }
}

export default App;
