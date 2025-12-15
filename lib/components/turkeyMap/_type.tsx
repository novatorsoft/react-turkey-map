import { IMap } from "../map";

export interface ITurkeyMap extends Omit<IMap, "items" | "viewBox"> {}
