import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./js/components/List.js";
import MasterButton from "./js/components/BtnDispatch.js";

import store from "./js/store/index.js";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MasterButton />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
