import React, { Component } from "react";
import axios from "axios";
import PlayerList from "./components/PlayerList";

export default class App extends Component {
  state = {
    playersData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          playersData: response.data
        });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  render() {
    return <PlayerList playersData={this.state.playersData} />;
  }
}
