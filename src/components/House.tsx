import "./House.css";
import { House } from "../interfaces";
import emailIcon from "../assets/images/Email.png";
import EnquiryForm from "./EnquiryForm";
import { useState } from "react";

const HouseComponent = (props: { house: House }) => {
  const [enquiryFormVisible, setEnquiryFormVisible] = useState(false);

  if (!props.house) return <div>Loading...</div>;
  return (
    <div className="even-columns">
      <div className="column">
        <div>{props.house.country}</div>
        <div className="address">{props.house.address}</div>
        <img src={`/images/${props.house.photo}.jpeg`} alt="House" className="house-pic" />
      </div>

      <div className="column">
        <div className="priceTag">${props.house.price}</div>
        <div>{props.house.description}</div>
        <img
          src={emailIcon}
          alt="inquiry"
          className="enquiry-icon"
          onClick={() => setEnquiryFormVisible(!enquiryFormVisible)}
        />
        {enquiryFormVisible && <EnquiryForm />}
      </div>
    </div>
  );
};

export default HouseComponent;
