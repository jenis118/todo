import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
/* import "./PreTask9.css"; */
const PreTask9 = () => {
  const [storeData, setStoreData] = useState([]);
  const [inputData, setInputData] = useState([
    {
      firstName: "",
      lastName: "",
      age: "",
      city: "",
    },
  ]);
  const handleValueChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (pre) => {
    pre.preventDefault();
    const clear = !Object.values(inputData).every((rest) => rest === "");
    if (clear) {
      setStoreData([...storeData, inputData]);
      const set = { firstName: "", lastName: "", age: "", city: "" };
      setInputData(set);
    }
  };
  return (
    <>
      {console.log(storeData)}
      {console.log(typeof inputData)}
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Form
              handleValueChange={handleValueChange}
              inputData={inputData}
              handleSubmit={handleSubmit}
            />
            <Table empty={storeData} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
};
export default PreTask9;
