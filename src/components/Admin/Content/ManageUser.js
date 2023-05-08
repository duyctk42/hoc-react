import ModleCreateUser from "./ModleCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllusers } from "../../../sevices/apiSevices";

const ManageUser = () => {
  const [showModalCreatUser, setShowModalCreatUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(async () => {
    let res = await fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllusers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const testFunction = async () => {
    let res = await getAllusers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
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
        <div className="table-users-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModleCreateUser
          show={showModalCreatUser}
          setShow={setShowModalCreatUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};
export default ManageUser;
