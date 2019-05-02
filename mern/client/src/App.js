import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Cards />
      </React.Fragment>
    );
  }
}

export default App;
