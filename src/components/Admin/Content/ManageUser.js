import ModleCreateUser from "./ModleCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllusers, getUserWithPaginate } from "../../../sevices/apiSevices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeteleUser from "./ModalDeteleUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = () => {
  const LIMIT_USER = 6;
  const [pageCount, setPageCount] = useState(0);
  const [currenPage, setCurrenPage] = useState(1);
  const [showModalCreatUser, setShowModalCreatUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [dataDetele, setDataDetele] = useState({});
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDeteleUser, setShowModalDeteleUser] = useState(false);
  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllusers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);

    if (res.EC === 0) {
      console.log("res.dt", res.DT);
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  const testFunction = async () => {
    let res = await getAllusers();

    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  const handleClickBtnUpdate = (user) => {
    setDataUpdate(user);
    setShowModalUpdateUser(true);
  };
  const resetUpteData = () => {
    setDataUpdate({});
  };
  const handleClickBtnDetele = (user) => {
    setShowModalDeteleUser(true);
    setDataDetele(user);
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
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDetele={handleClickBtnDetele}
          /> */}
          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDetele={handleClickBtnDetele}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currenPage={currenPage}
            setCurrenPage={setCurrenPage}
          />
        </div>
        <ModleCreateUser
          show={showModalCreatUser}
          setShow={setShowModalCreatUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpteData={resetUpteData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
        />
        <ModalDeteleUser
          show={showModalDeteleUser}
          setShow={setShowModalDeteleUser}
          dataDetele={dataDetele}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currenPage={currenPage}
          setCurrenPage={setCurrenPage}
        />
      </div>
    </div>
  );
};
export default ManageUser;
