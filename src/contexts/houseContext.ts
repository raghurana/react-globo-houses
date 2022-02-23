import { createContext } from "react";
import { House } from "../interfaces";

const HousesContext = createContext<House[]>([]);
export default HousesContext;
