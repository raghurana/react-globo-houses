import { useContext } from "react";
import { useParams } from "react-router-dom";
import HousesContext from "../contexts/houseContext";
import HouseComponent from "./House";

const HouseById = () => {
  const { id } = useParams();
  const allHouses = useContext(HousesContext);

  if (!id) return <div>No house found for Id: {id}</div>;
  const houseById = allHouses.find((h) => h.id === parseInt(id));
  return houseById ? <HouseComponent house={houseById} /> : <div>No house found for Id: {id}</div>;
};

export default HouseById;
