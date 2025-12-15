import { City } from "../../enums";
import { IMap } from "../map";

export interface ICityMap extends Omit<IMap, "items" | "viewBox"> {
  city: keyof typeof City | City;
}
