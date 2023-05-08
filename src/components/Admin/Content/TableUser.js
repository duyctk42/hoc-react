import { useEffect } from "react";
import { useState } from "react";
import { getAllusers } from "../../../sevices/apiSevices";

const TableUser = (props) => {
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
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn">view</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>not fourd data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default TableUser;
