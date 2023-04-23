import "./App.scss";
import Header from "./components/Header/Header";
import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <div> test hello</div>
      <div>
        <button>
          <Link to="/User">user</Link>
        </button>
        <button>
          <Link to="/Admin">Admin</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
