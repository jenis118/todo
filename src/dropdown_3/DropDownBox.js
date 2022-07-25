import React, { useState } from "react";
import "./DropDown.css";
const DropDownBox = () => {
  const [country, setCountry] = useState(1);
  const [state, setState] = useState(1);
  return (
    <>
      <div id="Main">
        <div className="box">
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
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
          {country == 3 && (state === 1 || 2 || 3) ? (
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="1">Kent</option>
              <option value="2">Devon</option>
              <option value="3">Mackay</option>
            </select>
          ) : null}
        </div>
        <div>
          {country == 1 && state == 1 ? (
            <select>
              <option value="1">Surat</option>
              <option value="2">Ahemdabad</option>
              <option value="3">Rajkot</option>
            </select>
          ) : null}
          {country == 2 && state == 1 ? (
            <select>
              <option value="1">Melborne</option>
              <option value="2">Sydney</option>
              <option value="3">Adelaide</option>
            </select>
          ) : null}
          {country == 2 && state == 2 ? (
            <select>
              <option value="1">Darwin</option>
              <option value="2">Canberra</option>
              <option value="3">Brisbane</option>
            </select>
          ) : null}
          {country == 2 && state == 3 ? (
            <select>
              <option value="1">Perth</option>
              <option value="2">Hobart</option>
              <option value="3">Mackay</option>
            </select>
          ) : null}
          {country == 1 && state == 2 ? (
            <select>
              <option value="1">Jaiput</option>
              <option value="2">Jodhpur</option>
              <option value="3">Udaipur</option>
            </select>
          ) : null}
          {country == 1 && state == 3 ? (
            <select>
              <option value="1">Kair</option>
              <option value="2">Deoli</option>
              <option value="3">Hastsat</option>
            </select>
          ) : null}
          {country == 3 && state == 1 ? (
            <select>
              <option value="1">London</option>
              <option value="2">Leeds</option>
              <option value="3">Wirral</option>
            </select>
          ) : null}
          {country == 3 && state == 2 ? (
            <select>
              <option value="1">Salford</option>
              <option value="2">Bolton</option>
              <option value="3">Fife</option>
            </select>
          ) : null}
          {country == 3 && state == 3 ? (
            <select>
              <option value="1">Derby</option>
              <option value="2">Luton</option>
              <option value="3">York</option>
            </select>
          ) : null}
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
    </>
  );
};
export default DropDownBox;
