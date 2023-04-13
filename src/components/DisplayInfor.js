import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUsers } = this.props;
    console.log(listUsers);
    return (
      <div>
        {listUsers.map((user, index) => {
          return (
            <div key={user.id}>
              <div>my name's{user.name} </div>
              <div>tuoi {user.age} </div>
            </div>
          );
        })}
        {/* <div>ten toi la {name}</div>
        <div> age : {age}</div>
        <br />
        <div>ten toi la {name}</div>
        <div> age : {age}</div>
        <br />
        <div>ten toi la {name}</div>
        <div> age : {age}</div>
         <br /> */}
      </div>
    );
  }
}
export default DisplayInfor;
