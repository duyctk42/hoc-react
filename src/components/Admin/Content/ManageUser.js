import ModleCreateUser from "./ModleCreateUser";
import "./ManageUser.scss";
const ManageUser = () => {
  return (
    <div className="manage-user-container">
      <div className="title">manage user</div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>table users</div>
        <ModleCreateUser />
      </div>
    </div>
  );
};
export default ManageUser;
