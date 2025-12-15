import { ITurkeyMap } from "./_type";
import { Map } from "../map";
import React from "react";
import { turkeyMap } from "../../data";

export const TurkeyMap: React.FC<ITurkeyMap> = (mapProps) => {
  return <Map items={turkeyMap} viewBox="0 80 1050 585" {...mapProps} />;
};
