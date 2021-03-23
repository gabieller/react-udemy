import React from "react";
import "./user.css";

const UserOutput = (props) => {
  return (
    <div className="box-user">
      <p>username: {props.user} </p> {/* Passing a state via props to another component */}
      <p>I'm a old user!</p>
    </div>
  );
};

export default UserOutput;
