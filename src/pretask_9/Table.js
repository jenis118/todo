import React from "react";
const Table = ({ storeData }) => {
  return (
    <>
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
          {storeData.map((name, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{name.firstName}</td>
                <td>{name.lastName}</td>
                <td>{name.age}</td>

                <td>{name.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
