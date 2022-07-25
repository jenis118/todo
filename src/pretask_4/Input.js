import React, { useState } from "react";
const Input = () => {
  const [add, setAdd] = useState("");
  const [sett, setSett] = useState("");
  const handleClick = () => {
    setSett(add);
    setAdd("");
  };
  return (
    <>
      <input type="text" placeholde="FirstName"></input>
      <input type="text" placeholde="LastName"></input>
      <input
        type="text"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>
      <input type="submit" onClick={handleClick}></input>
      {add > 50 ? (
        <>
          <div id="large">{sett}</div>
        </>
      ) : null}
      {add > 10 && add <= 20 ? (
        <>
          <div id="mideum">{sett}</div>
        </>
      ) : null}
      {add > 20 && add <= 50 ? (
        <>
          <div id="little">{sett}</div>
        </>
      ) : null}
      {add < 10 ? (
        <>
          <div id="small">{sett}</div>
        </>
      ) : null}
    </>
  );
};
export default Input;
