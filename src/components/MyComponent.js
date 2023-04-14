import React from "react";
import AddUserInfor from "./AddUseInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "duy", age: "15" },
      { id: 2, name: "duy1", age: "10" },
      { id: 3, name: "duy2", age: "20" },
    ],
  };
  handerleAddNewUser = (userobj) => {
    // let listUsersClone = this.state.listUsers;
    // listUsersClone.unshift(userobj);
    // this.setState({
    //   listUsers: listUsersClone,
    // });
     this.setState({
       listUsers: [userobj, ...this.state.listUsers],
    });
  };
  // jsx
  render() {
    return (
      <div>
        <AddUserInfor
          handerleAddNewUser={this.handerleAddNewUser}
        ></AddUserInfor>
        <br /> <br />
        <DisplayInfor listUsers={this.state.listUsers}></DisplayInfor>
      </div>
    );
  }
}
export default MyComponent;
