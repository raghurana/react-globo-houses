import "./HouseFilter.css";
import { House } from "../interfaces";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HousesContext from "../contexts/houseContext";

const noSelection = "--- choose ---";

const HouseFilter = () => {
  const navigate = useNavigate();
  const allHouses = useContext(HousesContext);
  const countryNames = Array.from(new Set(allHouses.map((h: House) => h.country)));
  countryNames.unshift(noSelection);

  const onCountryChange = (countryName: string) => {
    countryName === noSelection ? navigate("/") : navigate(`/search/${countryName}`);
  };

  return (
    <div className="filter-container">
      Choose your country:
      <select
        onChange={(e) => {
          onCountryChange(e.target.value);
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
