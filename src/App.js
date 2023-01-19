import { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const myname = (event) => {
    setName(event.target.value);
  };

  const myColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <form>
        <input
          type={"text"}
          placeholder="Enter your Name"
          value={name}
          onChange={myname}
        ></input>
        <input
          type={"text"}
          placeholder="Enter Your Color"
          value={color}
          onChange={myColor}
        ></input>
      </form>
      <Herosection username={name} btncolor={color}></Herosection>
    </>
  );
}

export default App;
