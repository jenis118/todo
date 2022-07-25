import React, { useState, useEffect } from "react";
import DropDownBox from "./DropDownBox";
import "./DropDown.css";
const DropDown = () => {
  const [country, setCountry] = useState(1);
  const [state, setState] = useState(1);
  const [city, setCity] = useState(1);
  const [store, setStore] = useState(<DropDownBox />);
  const [arr, setArr] = useState([]);
  /* 
  const [console, setConsole] = useState({
    country: "",
    state: "",
    city: "",
  }); */
  const [add, setAdd] = useState([]);
  const [sett, setSett] = useState();
  const handleClick = () => {
    setAdd([...add, 1]);
  };
  console.log(add);
  console.log(store);
  const handleSaveData = () => {
    console.log(country);
    console.log(state);
    console.log(city);
  };
  const addData = () => {
    /* id = Math.random();
    value: store; */
  };
  return (
    <>
      <div id="Main">
        <div className="box">
          <select
            value={country}
            /* defaultValue={"india"} */
            onChange={(e) => setCountry(e.target.value)}
          >
            {/* <option value={"india"} hidden selected>
              india
            </option> */}
            <option value="1">India</option>
            <option value="2">Austrelia</option>
            <option value="3">England</option>
          </select>
        </div>
        <div>
          {country == 1 && (state == 1 || 2 || 3) ? (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="1">Gujarat</option>
              <option value="2">Rajasthan</option>
              <option value="3">Delhi</option>
            </select>
          ) : null}
          {country == 2 && (state == 1 || 2 || 3) ? (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="1">Victoria</option>
              <option value="2">Tasmania</option>
              <option value="3">Queenland</option>
            </select>
          ) : null}
          {country == 3 && (state == 1 || 2 || 3) ? (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="1">Kent</option>
              <option value="2">Devon</option>
              <option value="3">Mackay</option>
            </select>
          ) : null}
        </div>
        <div>
          {country == 1 && state == 1 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              {console.log("======>Guj")}
              <option value="1">Surat</option>
              <option value="2">Ahemdabad</option>
              <option value="3">Rajkot</option>
            </select>
          ) : null}
          {country == 2 && state == 1 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">Melborne</option>
              <option value="2">Sydney</option>
              <option value="3">Adelaide</option>
            </select>
          ) : null}
          {country === 2 && state == 2 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">Darwin</option>
              <option value="2">Canberra</option>
              <option value="3">Brisbane</option>
            </select>
          ) : null}
          {country == 2 && state == 3 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">Perth</option>
              <option value="2">Hobart</option>
              <option value="3">Mackay</option>
            </select>
          ) : null}
          {country == 1 && state == 2 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1" selected>
                Jaipur
              </option>
              <option value="2">Jodhpur</option>
              <option value="3">Udaipur</option>
            </select>
          ) : null}
          {country == 1 && state == 3 ? (
            <select
              value={city}
              onSelect={(e) => setCity(e.target.value)}
              onChange={(e) => setCity(e.target.value)}
            >
              {console.log("=========>delhi")}

              <option value="Kair">Kair</option>
              <option value="Deoli">Deoli</option>
              <option value="Hastsat">Hastsat</option>
            </select>
          ) : null}
          {country == 3 && state == 1 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">London</option>
              <option value="2">Leeds</option>
              <option value="3">Wirral</option>
            </select>
          ) : null}
          {country == 3 && state == 2 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">Salford</option>
              <option value="2">Bolton</option>
              <option value="3">Fife</option>
            </select>
          ) : null}
          {country == 3 && state == 3 ? (
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="1">Derby</option>
              <option value="2">Luton</option>
              <option value="3">York</option>
            </select>
          ) : null}
        </div>
        <div>
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
      <div>
        {add.map((dropdown, id) => (
          <DropDownBox key={id} />
        ))}
      </div>
      <div>
        <button className="button" onClick={handleSaveData}>
          Text add
        </button>
      </div>
    </>
  );
};
export default DropDown;
