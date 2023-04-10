import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "duy",
    address: "duy dep trai",
    age: 26,
  };
  handleClick = (event) => {
    console.log("my name is", this.state.age);
    this.setState({
      name: "kataris",
      age: Math.floor(Math.random() * 10),
    });
  };
  handleOnmoverOver(even) {
    console.log("alo");
  }
  // jsx
  render() {
    return (
      <div>
        my name id {this.state.name} and i fron {this.state.age}
        <button onMouseOver={this.handleOnmoverOver}>click me`</button>
        <button
          onClick={(event) => {
            this.handleClick();
          }}
        >
          click me`
        </button>
      </div>
    );
  }
}
export default MyComponent;
