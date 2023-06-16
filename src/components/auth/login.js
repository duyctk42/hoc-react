import "./login.scss";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../sevices/apiSevices";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast.error("invalid password");
      return;
    }
    setIsLoading(true);
    let data = await postLogin(email, password);
    if (data && +data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (data && data.EC !== 0) {
      toast.success(data.EM);
      setIsLoading(false);
    }
  };
  return (
    <div className="login-cotainer">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button onClick={() => navigate("register")}>Sign up</button>
      </div>
      <div className="title col-4 mx-auto">thành duy</div>
      <div className="welcome col-4 mx-auto">hello, who's this?</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>email</label>
          <input
            type={"email"}
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type={"password"}
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <span className="forgot-password">Forgot password ?</span>
        <div>
          <button
            className="btn-submit"
            onClick={() => handleLogin()}
            disabled={isLoading}
          >
            {isLoading === true && <ImSpinner10 className="loader-icon" />}

            <span>Login</span>
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &#60;&#60; Go Back Home
          </span>
        </div>
      </div>
    </div>
  );
};
export default Login;
