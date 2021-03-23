import React from "react";
import "./user.css";

const UserInput = (props) => {
  return (
    <div className="input-box">
      <input 
      type="text"
       onChange={props.changed} 
       value={props.currentName} 
       />
    
    </div>
  );
};

export default UserInput;
