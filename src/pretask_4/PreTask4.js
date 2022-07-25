import React, { useState } from "react";
import Form from "./List";
const PreTask4 = () => {
  const [storeData, setStoreData] = useState([]);
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: "",
  });
  const handleValueChange = (e) => {
    setInputData((arg) => ({
      ...arg,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (pre) => {
    pre.preventDefault();
    const clear = !Object.values(inputData).every((rest) => rest === "");
    if (clear) {
      setStoreData((arg) => [...arg, inputData]);
      const set = { firstName: "", lastName: "", age: "", city: "" };
      setInputData(set);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Form
              handleValueChange={handleValueChange}
              inputData={inputData}
              handleSubmit={handleSubmit}
            />
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>sr No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th> City</th>
                  </tr>
                </thead>
                <tbody>
                  {storeData.map((arg, index) => {
                    return (
                      <tr
                        key={index}
                        style={{
                          backgroundColor:
                            arg.age > 50
                              ? "Red"
                              : arg.age > 10 && arg.age <= 20
                              ? "green"
                              : arg.age > 20 && arg.age <= 50
                              ? "yellow"
                              : "aqua",
                        }}
                      >
                        <td>{index + 1}</td>
                        <td>{arg.firstName}</td>
                        <td>{arg.lastName}</td>
                        <td>{arg.age}</td>

                        <td>{arg.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
  );
};
export default PreTask4;
