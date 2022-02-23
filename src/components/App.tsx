import "./App.css";
import Header from "./Header";
import HouseFilter from "./HouseFilter";

function App() {
  return (
    <div className="app-container">
      <Header title="Providing houses all over the world"></Header>
      <HouseFilter></HouseFilter>
    </div>
  );
}

export default App;
