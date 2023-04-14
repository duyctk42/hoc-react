import React from "react";
import "./Displayinfor.scss";

class DisplayInfor extends React.Component {
  state = {
    isShowLisUser: true,
  };
  handleShowhide = () => {
    this.setState({ isShowLisUser: !this.state.isShowLisUser });
  };
  render() {
    const { listUsers } = this.props;

    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => this.handleShowhide()}>
            {this.state.isShowLisUser === true
              ? "hide list user"
              : "show list user"}
          </span>
        </div>
        {this.state.isShowLisUser && (
          <div>
            {listUsers.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "blu" : "red"}>
                  <div>my name's{user.name} </div>
                  <div>tuoi {user.age} </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
