import React, { Component } from "react";

// const Shop = () => {
//   return (
//     <div>
//       <h1> Shop </h1>
//     </div>
//   );
// };

class LifeCycleData extends Component {
  constructor(props) {
    super(props);
    console.log("In constructor");
    this.state = {
      counter: 0,
      // count: 1000,
      name: "prasanth",
      randomNumber: 0,
      whileComponentUpdate: 0,
    };
  }

  componentDidMount() {
    console.log("In index component Did Mount");
    this.timerId = setTimeout(() => {
      this.setState({
        name: "Random Number",
        randomNumber: Math.random(),
      });
    }, 5000);
  }
  componentWillUnmount() {
    console.log("In Un mount");
    clearTimeout(this.timerId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // if(prevProps.randomNumber !== this.state.randomNumber) {
    //     console.log('In DID Update prevprop', prevProps)
    // }
    if (prevState.name !== this.state.name) {
      console.log("In DID Update prevState", prevState);
      this.setState({
        whileComponentUpdate: 10
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("In should Component Update", nextState);
    if (nextState.randomNumber === this.state.randomNumber) {
      return false;
    }
    else {
      return true;
    }
  }

  handleCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    console.log("In render");
    return (
      <div>
        <div>
         <p> {this.state.name} -> {this.state.randomNumber} </p>
        </div>
        <div>
          <p><button onClick={() => this.handleCounter()}>Update Counter</button> -> {this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default LifeCycleData;
