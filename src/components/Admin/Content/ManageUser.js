import ModleCreateUser from "./ModleCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModalCreatUser, setShowModalCreatUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowModalCreatUser(true);
            }}
          >
            {" "}
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container"><TableUser/></div>
        <ModleCreateUser
          show={showModalCreatUser}
          setShow={setShowModalCreatUser}
        />
      </div>
    </div>
  );
};
export default ManageUser;
