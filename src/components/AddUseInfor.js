import React, { useState } from "react";

const AddUseInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setaddress] = useState("hoi dan it");
  const [age, setAge] = useState("");
  // state = {
  //       name: "",
  //       address: "duy dep trai",
  //       age: "",
  //     };

  const handleOnChaneInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChaneAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnsubmit = (event) => {
    event.preventDefault();
    props.handerleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      // my name id {name} and i fron {age}
      //{" "}
      <form onSubmit={(event) => handleOnsubmit(event)}>
        // <label>your name:</label>
        //{" "}
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChaneInput(event);
          }}
        />
        <label>your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChaneAge(event);
          }}
        />
        <button>submid</button>
      </form>
    </div>
  );
};

export default AddUseInfor;
