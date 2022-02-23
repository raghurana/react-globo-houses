import "./App.css";
import Header from "./Header";
import House from "./House";
import HouseFilter from "./HouseFilter";
import { useHouses } from "../hooks";

function App() {
  const allHouses = useHouses();
  console.log(allHouses);
  return (
    <div className="app-container">
      <Header title="Providing houses all over the world"></Header>
      <HouseFilter></HouseFilter>
      <House></House>
    </div>
  );
}

export default App;
