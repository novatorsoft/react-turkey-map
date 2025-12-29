import { City } from "../../enums";
import { IMap } from "../map";

export interface ITurkeyMap extends Omit<
  IMap,
  "items" | "viewBox" | "heatMapData"
> {
  heatMapData?:
    | Partial<Record<keyof typeof City, number>>
    | Partial<Record<City, number>>;
}
