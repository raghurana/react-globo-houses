import "./App.css";
import Header from "./Header";
import HouseComponent from "./House";
import HouseFilter from "./HouseFilter";
import HousesContext from "../contexts/houseContext";
import { useHouses } from "../hooks";

function App() {
  const allHouses = useHouses();
  return (
    <div className="app-container">
      <Header title="Providing houses all over the world"></Header>
      <HousesContext.Provider value={allHouses}>
        <HouseFilter></HouseFilter>
        <HouseComponent house={allHouses[0]}></HouseComponent>
      </HousesContext.Provider>
    </div>
  );
}

export default App;
