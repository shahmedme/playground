import React, { Component } from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Lists from "./components/Lists";
import AddTodo from "./components/AddTodo";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <div class="pt-5">
            <AddTodo />
            <Lists />
          </div>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
