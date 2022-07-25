import React, { useState } from "react";
const PreTask5in = () => {
  const [well, setWell] = useState([1]);
  const Click = () => {
    let i;
    let w = well.length * 2;
    let newArray = [];
    for (i = 1; i <= w; i++) {
      newArray.push(`${i},`);
    }
    setWell(newArray);
  };

  return (
    <>
      <h2 onClick={Click}>{well.map((elem) => elem)}</h2>
    </>
  );
};

export default PreTask5in;
