import React, { Component } from "react";
import "./App.css";
import Slides from "./Slides";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Slides slides={this.props.slides} />
      </div>
    );
  }
}
