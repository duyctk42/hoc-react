import React from "react";
import UserInfor from "./UseInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "duy", age: "15" },
      { id: 2, name: "duy1", age: "10" },
      { id: 3, name: "duy2", age: "20" },
    ],
  };
  // jsx
  render() {
    return (
      <div>
        <UserInfor></UserInfor>
        <br /> <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          users={this.state.listUsers}
        ></DisplayInfor>
      </div>
    );
  }
}
export default MyComponent;
