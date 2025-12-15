import { City } from "../../enums";
import { ICityMap } from "./_type";
import { Map } from "../map";
import React from "react";
import { cityMaps } from "../../data";

export const CityMap: React.FC<ICityMap> = ({ city, ...mapProps }) => {
  const cityNumber =
    typeof city === "string" ? City[city as keyof typeof City] : city;
  const cityData = cityMaps[cityNumber];

  return (
    <Map
      items={cityData.districtBoxes}
      viewBox={cityData.viewBox}
      {...mapProps}
    />
  );
};
