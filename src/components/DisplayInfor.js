import React, { useId, useState } from "react";
import "./Displayinfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//   render() {
//     console.log("call me render");
//     const { listUsers } = this.props;

//     return (
//       <div className="display-infor-container">
//         {/* <img src={logo} /> */}

//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "blu" : "red"}>
//                   <div>
//                     <div>my name's{user.name} </div>
//                     <div>tuoi {user.age} </div>
//                   </div>
//                   <div>
//                     <button onClick={() => this.props.handerDelere(user.id)}>
//                       x
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [issShowHideListUser, setShowhideListUser] = useState(true);
  const handleShowHideLishUrser = () => {
    setShowhideListUser(!issShowHideListUser);
  };
  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideLishUrser()}>
          {issShowHideListUser === true ? "hide list user" : "show list user"}
        </span>
      </div>

      {issShowHideListUser && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "blu" : "red"}>
                <div>
                  <div>my name's{user.name} </div>
                  <div>tuoi {user.age} </div>
                </div>
                <div>
                  <button onClick={() => props.handerDelere(user.id)}>x</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default DisplayInfor;
