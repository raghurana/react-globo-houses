import "./House.css";
import { House } from "../interfaces";
import emailIcon from "../assets/images/Email.png";

const HouseComponent = (props: { house: House }) => {
  if (!props.house) return <div>Loading...</div>;
  return (
    <div className="house-container">
      <div>{props.house.country}</div>
      <div className="address">{props.house.address}</div>
      <div className="even-columns">
        <img src={`/images/${props.house.photo}.jpeg`} alt="House" />
        <div className="house-desc">
          <div className="priceTag">${props.house.price}</div>
          <div>{props.house.description}</div>
          <img src={emailIcon} alt="inquiry" />
        </div>
      </div>
    </div>
  );
};

export default HouseComponent;
