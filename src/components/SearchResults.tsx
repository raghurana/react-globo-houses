import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HousesContext from "../contexts/houseContext";
import "./SearchResults.css";

const SearchResults = () => {
  const navigator = useNavigate();
  const { country } = useParams();
  const allCountries = useContext(HousesContext);
  const filteredCountries = allCountries.filter((h) => h.country === country);

  return (
    <ul className="search-list">
      <h2>Results for {country}</h2>
      {filteredCountries.map((c) => (
        <li
          key={c.id}
          onClick={() => {
            navigator(`/house/${c.id}`);
          }}
        >
          <div>{c.address}</div>
          <div className="space" />
          <div>${c.price}</div>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
