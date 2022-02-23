import "./House.css";
import logo from "../assets/images/GloboLogo.png";

const House = () => (
  <div className="house-container">
    <div>Country Name (from filter)</div>
    <div className="address">Property Address</div>
    <div className="even-columns">
      <img src={logo} alt="p" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque tenetur minima ullam sequi, veritatis
        voluptate pariatur aliquam numquam quod possimus incidunt similique delectus neque in dolorem assumenda dolores
        vel.
      </div>
    </div>
  </div>
);

export default House;
