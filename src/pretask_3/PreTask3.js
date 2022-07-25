import React, { useState } from "react";

const PreTask3 = () => {
  const [user, setUser] = useState(false);
  let Click = () => {
    setUser(!user);
  };

  return (
    <>
      <p id="First" onClick={Click}>
        {user ? "XYZ" : "ABC"}
      </p>
    </>
  );
};
export default PreTask3;
