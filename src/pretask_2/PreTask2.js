import React, { useState } from "react";
const PreTask2 = () => {
  const [add, setAdd] = useState("");
  const [sett, setSett] = useState("");
  const handleSet = () => {
    setSett(add);
    setAdd("");
  };

  return (
    <>
      {<p>Hello : {sett}</p>}
      <input
        type="text"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      ></input>
      <button onClick={handleSet}>submit</button>
    </>
  );
};
export default PreTask2;
