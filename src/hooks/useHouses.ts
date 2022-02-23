import { useState, useEffect } from "react";
import { House } from "../interfaces";

const useHouses = () => {
  const [allHouses, setAllHouses] = useState<House[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/houses.json");
      const houseJson = await data.json();
      setAllHouses(houseJson);
    })();
  }, []);

  return allHouses;
};

export default useHouses;
