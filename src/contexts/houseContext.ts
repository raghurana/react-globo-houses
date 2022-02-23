import { createContext } from "react";
import { House } from "../interfaces";

const HouseContext = createContext<House[]>([]);
export default HouseContext;
