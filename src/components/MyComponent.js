import React, { useCallback, useState } from "react";
import AddUserInfor from "./AddUseInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "duy", age: "15" },
//       { id: 2, name: "duy1", age: "10" },
//       { id: 3, name: "duy2", age: "20" },
//     ],
//   };
//   handerDelereUser = (userid) => {
//     let listuserclone = this.state.listUsers;
//     listuserclone = listuserclone.filter((item) => item.id !== userid);
//     this.setState({
//       listUsers: listuserclone,
//     });
//   };
//   handerleAddNewUser = (userobj) => {
//     // let listUsersClone = this.state.listUsers;
//     // listUsersClone.unshift(userobj);
//     // this.setState({
//     //   listUsers: listUsersClone,
//     // });
//     this.setState({
//       listUsers: [userobj, ...this.state.listUsers],
//     });
//   };
//   // jsx
//   render() {
//     return (
//       <div>
//         <AddUserInfor
//           handerleAddNewUser={this.handerleAddNewUser}
//         ></AddUserInfor>
//         <br /> <br />
//         <DisplayInfor
//           listUsers={this.state.listUsers}
//           handerDelere={this.handerDelereUser}
//         ></DisplayInfor>
//       </div>
//     );
//   }
// }

const MyComponent = (props) => {
  const [listUsert, setListUser] = useState([
    { id: 1, name: "duy", age: "15" },
    { id: 2, name: "duy1", age: "10" },
    { id: 3, name: "duy2", age: "20" },
  ]);
  const handerDelereUser = (userid) => {
    let listuserclone = listUsert;
    listuserclone = listuserclone.filter((item) => item.id !== userid);
    setListUser(listuserclone);
  };
  const handerleAddNewUser = (userobj) => {
    setListUser([userobj, ...listUsert]);
  };
  return (
    <div>
      <AddUserInfor handerleAddNewUser={handerleAddNewUser}></AddUserInfor>
      <br /> <br />
      <DisplayInfor
        listUsers={listUsert}
        handerDelere={handerDelereUser}
      ></DisplayInfor>
    </div>
  );
};
export default MyComponent;
