import { useContext } from "react";
import "./HouseFilter.css";
import HousesContext from "../contexts/houseContext";
import { House } from "../interfaces";

const HouseFilter = () => {
  const allHouses = useContext(HousesContext);
  const countryNames = Array.from(new Set(allHouses.map((h: House) => h.country)));

  return (
    <div className="filter-container">
      Choose your country:
      <select>
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
