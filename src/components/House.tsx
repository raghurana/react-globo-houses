import "./House.css";
import { House } from "../interfaces";

const HouseComponent = (props: { house: House }) => (
  <div className="house-container">
    <div>{props.house.country}</div>
    <div className="address">{props.house.address}</div>
    <div className="even-columns">
      <img src={`/images/${props.house.photo}.jpeg`} alt="House" />
      <div className="house-desc">{props.house.description}</div>
    </div>
  </div>
);

export default HouseComponent;
