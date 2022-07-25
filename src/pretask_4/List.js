import React from "react";
const Form = ({ inputData, handleValueChange, handleSubmit }) => {
  return (
    <>
      <div className="form-row row">
        <div className="col">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleValueChange}
            value={inputData.firstName}
            name="firstName"
            className="form-control"
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleValueChange}
            className="form-control"
            value={inputData.lastName}
            name="lastName"
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Age"
            onChange={handleValueChange}
            className="form-control"
            value={inputData.age}
            name="age"
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="City"
            onChange={handleValueChange}
            className="form-control"
            value={inputData.city}
            name="city"
          />
        </div>
        <div className="col">
          <input
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};
export default Form;
