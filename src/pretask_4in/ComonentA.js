import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";
export const UserContext = createContext();
const ComponentA = () => {
  const [add, setAdd] = useState(0);
  const handleClick = () => {
    setAdd(add + 1);
  };
  return (
    <>
      <UserContext.Provider value={[add, setAdd, handleClick]}>
        <h1>Hello india {add}</h1>
        <ComponentB />
      </UserContext.Provider>
    </>
  );
};

export default ComponentA;
