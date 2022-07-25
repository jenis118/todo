import React, { useContext } from "react";
import { UserContext } from "./ComonentA";

const ComponentC = () => {
  const [add, setAdd, handleClick] = useContext(UserContext);
  /*  const handleClick = () => {
    setAdd(add + 1);
  }; */
  return (
    <>
      {/*  <h2>{add}</h2> */}
      <h1>Component C</h1>
      <h2>Change {add}</h2>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
export default ComponentC;
