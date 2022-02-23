import "./HouseFilter.css";
import { House } from "../interfaces";
import React, { useContext } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import HousesContext from "../contexts/houseContext";

const noSelection = "--- choose ---";

const onCountryChange = (nav: NavigateFunction, e: React.ChangeEvent<HTMLSelectElement>) => {
  const changedValue = e.target.value;
  changedValue === noSelection ? nav("/") : nav(`/search/${changedValue}`);
};

const HouseFilter = () => {
  const navigate = useNavigate();
  const allHouses = useContext(HousesContext);
  const countryNames = Array.from(new Set(allHouses.map((h: House) => h.country)));
  countryNames.unshift(noSelection);

  return (
    <div className="filter-container">
      Choose your country:
      <select
        onChange={(e) => {
          onCountryChange(navigate, e);
        }}
      >
        {countryNames.map((countryName) => (
          <option key={countryName} value={countryName}>
            {countryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HouseFilter;
