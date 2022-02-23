import "./FeaturedHouse.css";
import HouseComponent from "./House";
import { useContext } from "react";
import HousesContext from "../contexts/houseContext";
import { useFeaturedHouses } from "../hooks";

const FeatureHouse = () => {
  const allHouses = useContext(HousesContext);
  const featuredHouse = useFeaturedHouses(allHouses);
  return featuredHouse ? (
    <div>
      <div className="caption">** Featured House **</div>
      <HouseComponent house={featuredHouse} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default FeatureHouse;
