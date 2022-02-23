import "./App.css";
import Header from "./Header";
import HouseComponent from "./House";
import HouseFilter from "./HouseFilter";
import HouseContext from "../contexts/houseContext";
import { useHouses } from "../hooks";

function App() {
  const allHouses = useHouses();
  return (
    <div className="app-container">
      <Header title="Providing houses all over the world"></Header>
      <HouseContext.Provider value={allHouses}>
        <HouseFilter></HouseFilter>
        <HouseComponent house={allHouses[0]}></HouseComponent>
      </HouseContext.Provider>
    </div>
  );
}

export default App;
