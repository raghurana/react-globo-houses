import "./App.css";
import Header from "./Header";
import HouseComponent from "./House";
import HouseFilter from "./HouseFilter";
import HousesContext from "../contexts/houseContext";
import { useHouses } from "../hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const allHouses = useHouses();
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header title="Providing houses all over the world"></Header>
        <HousesContext.Provider value={allHouses}>
          <HouseFilter></HouseFilter>
          <Routes>
            <Route path="/search/:country" element={<HouseComponent house={allHouses[0]} />} />
          </Routes>
        </HousesContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
