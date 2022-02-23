import { useMemo } from "react";
import { House } from "../interfaces";

const useFeaturedHouses = (allHouses: House[]) => {
  return useMemo<House | undefined>(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);
};

export default useFeaturedHouses;
