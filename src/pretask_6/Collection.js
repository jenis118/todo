import React, { useState } from "react";

const Collection = () => {
  const [add, setAdd] = useState("");
  const [well, setWell] = useState("");
  const clickSet = (e) => {
    setWell(e.target.value);
  };
  const mainCollection = (e) => {
    setAdd(e.target.value);
    setWell(e.target.value == "");
  };
  /* const handleClick = (e) => {
    setWell(e.target.value == "");
  }; */
  return (
    <>
      <h2>Collection</h2>
      <div id="collection">
        <div id="cmenu" /* onClick={handleClick} */>
          <select value={add} onChange={mainCollection}>
            <option hidden selected>
              Select any Collection
            </option>
            <option value="1">Collection-1</option>
            <option value="2">Collection-2</option>
            <option value="3">Collection-3</option>
          </select>
        </div>
        {add == 1 ? (
          <>
            <select className="select" value={well} onChange={clickSet}>
              <option hidden selected>
                Select Any Product
              </option>
              <option value="1">Product Active-1</option>
              <option value="2">Product Active-2</option>
              <option value="3">Product Active-3</option>
            </select>
          </>
        ) : null}
        {add == 2 ? (
          <>
            <select className="select" value={well} onChange={clickSet}>
              <option hidden selected>
                Select Any Product
              </option>
              <option value="1">Product Second Active-1</option>
              <option value="2">Product Second Active-2</option>
              <option value="3">Product Second Active-3</option>
            </select>
          </>
        ) : null}
        {add == 3 ? (
          <>
            <select className="select" value={well} onChange={clickSet}>
              <option hidden selected>
                Select Any Product
              </option>
              <option value="1">Product Third Active-1</option>
              <option value="2">Product Third Active-2</option>
              <option value="3">Product Third Active-3</option>
            </select>
          </>
        ) : null}
      </div>
      {add == 1 && well == 1 ? (
        <>
          <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-118143566.jpg"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 1 && well == 2 ? (
        <>
          <img src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 1 && well == 3 ? (
        <>
          <img
            id="img"
            src="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZW52aXJvbm1lbnR8ZW58MHx8MHx8&w=1000&q=80"
          ></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 2 && well == 1 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8QCPV0o_Bsp4CnbhDkOT-CoDckqstqQfWA&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 2 && well == 2 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4jNrD8TECtukpkokarFleaaEi34EpCDQXw&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 2 && well == 3 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8lblIj3lWQHnprHFlk9p4lsdq1mriI61lA&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 3 && well == 1 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz-vHygFgOs8ZH6dq2ULPC7J8m4RPfmrHWfQ&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 3 && well == 2 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzSUPYs4ASk-9GamoVCKQBBTXNCebRuu4dw&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
      {add == 3 && well == 3 ? (
        <>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7rSGk6tZxYEGBXXmT7g8WcJKSyREejUsPg&usqp=CAU"></img>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
        </>
      ) : null}
    </>
  );
};
export default Collection;
