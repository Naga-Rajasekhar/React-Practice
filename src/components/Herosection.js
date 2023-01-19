import React from "react";
import Usercard from "./Usercard";

const Herosection = (props) => {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/11256259/pexels-photo-11256259.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="React Context"
      ></img>
      <Usercard username={props.username} btncolor={props.btncolor}></Usercard>
    </div>
  );
};

export default Herosection;
