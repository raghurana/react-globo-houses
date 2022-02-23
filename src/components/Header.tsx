import logo from "../assets/images/GloboLogo.png";
import "./Header.css";

const Header = (props: { title: string }) => (
  <div className="header-container">
    <img src={logo} alt="logo" />
    <h1>{props.title}</h1>
  </div>
);

export default Header;
