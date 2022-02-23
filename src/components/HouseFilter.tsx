import "./HouseFilter.css";
import { House } from "../interfaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HousesContext from "../contexts/houseContext";

const HouseFilter = () => {
  const navigate = useNavigate();
  const allHouses = useContext(HousesContext);
  const countryNames = Array.from(new Set(allHouses.map((h: House) => h.country)));
  countryNames.unshift("--- choose ----");

  return (
    <div className="filter-container">
      Choose your country:
      <select onChange={(e) => navigate(`/search/${e.target.value}`)}>
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
