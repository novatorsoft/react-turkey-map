import { City } from "../../enums";
import { ICityMap } from "./_type";
import { Map } from "../map";
import React from "react";
import { cityMaps } from "../../data";

export const CityMap: React.FC<ICityMap> = ({ city, ...mapProps }) => {
  console.log(
    typeof city === "string" ? City[city as keyof typeof City] : city
  );
  const cityData =
    cityMaps[typeof city === "string" ? City[city as keyof typeof City] : city];

  return (
    <Map
      items={cityData.districtBoxes}
      viewBox={cityData.viewBox}
      {...mapProps}
    />
  );
};
