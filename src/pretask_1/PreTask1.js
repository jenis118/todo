import React, { useState } from "react";
const PreTask1 = () => {
  const [add, setAdd] = useState();
  const handleClear = () => {
    setAdd("");
  };
  return (
    <>
      <div>Label: {add}</div>
      <input
        type="text"
        placeholder="Enter Text"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};
export default PreTask1;
