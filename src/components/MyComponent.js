import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "duy",
    address: "duy dep trai",
    age: 26,
  };
  handleClick() {
    console.log("duy dep trai");
  }
  handleOnmoverOver(even) {
    console.log(even);
  }
  // jsx
  render() {
    return (
      <div>
        my name id {this.state.name} and i fron {this.state.address}
        <button onMouseOver={this.handleOnmoverOver}>click me`</button>
        <button onClick={this.handleClick}>click me`</button>
      </div>
    );
  }
}
export default MyComponent;
