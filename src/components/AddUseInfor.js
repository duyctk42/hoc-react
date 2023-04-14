import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "duy dep trai",
    age: "",
  };

  handleOnChaneInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChaneAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnsubmit = (event) => {
    event.preventDefault();
    this.props.handerleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        my name id {this.state.name} and i fron {this.state.age}
        <form onSubmit={(event) => this.handleOnsubmit(event)}>
          <label>your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChaneInput(event);
            }}
          />
          <label>your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChaneAge(event);
            }}
          />
          <button>submid</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
