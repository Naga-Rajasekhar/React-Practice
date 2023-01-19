import React from "react";
import Userdetails from "./Userdetails";
import Button from "./Button";

const Usercard = (props) => {
  return (
    <div>
      <Userdetails username={props.username}></Userdetails>
      <Button btncolor={props.btncolor}></Button>
    </div>
  );
};

export default Usercard;
