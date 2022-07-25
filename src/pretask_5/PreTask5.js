import React, { useState } from "react";
const PreTask5 = () => {
  const [arr, setArr] = useState([1]);
  const handleClick = (event, key) => {
    let i;
    let val = key;
    const Array = [];
    let array = arr.length;
    for (i = 1; i <= array + val + 1; i++) {
      Array.push(`${i},`);
    }
    setArr(Array);
  };

  return (
    <>
      {arr.map((element, key) => (
        <span onClick={(event) => handleClick(event, key)}>{element}</span>
      ))}
    </>
  );
};
export default PreTask5;
