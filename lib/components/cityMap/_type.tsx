import { City } from "../../enums";

export interface ICityMap {
  city: keyof typeof City | City;
}
