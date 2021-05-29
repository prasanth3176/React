import React, { Component } from "react";
import "./App.css";
import ComponentA from "./components/useContext/componentA";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
         <ComponentA />
      </div>
    );
  }
}

export default App;
