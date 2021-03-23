import React from "react";
import "./user.css"

const UserOutput = (props) => {
  return (
    <div className="box-user">
      <p username={props.username}>
       username: gabieller
      </p>
      <p>
        I'm a old user!
      </p>
    </div>
  );
};

export default UserOutput;
