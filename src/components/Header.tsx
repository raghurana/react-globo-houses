import logo from "../assets/images/GloboLogo.png";
import "./Header.css";

type HeaderProps = { title: string };

const Header = (props: HeaderProps) => (
  <div className="container">
    <img src={logo} alt="logo" />
    <h1>{props.title}</h1>
  </div>
);

export default Header;
