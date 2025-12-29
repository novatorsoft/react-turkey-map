import React, { useMemo } from "react";

import { City } from "../../enums";
import { ITurkeyMap } from "./_type";
import { Map } from "../map";
import { turkeyMap } from "../../data";

export const TurkeyMap: React.FC<ITurkeyMap> = ({
  heatMapData,
  ...mapProps
}) => {
  const heatMapDataByPlateNumber = useMemo(() => {
    if (!heatMapData) return undefined;
    if (!isNaN(Number(Object.keys(heatMapData).at(0))))
      return Object.entries(heatMapData).reduce(
        (acc, [key, value]) => {
          const cityKey = Object.keys(City).find(
            (cityName) => City[cityName as keyof typeof City] === Number(key)
          );
          if (cityKey) acc[cityKey] = value as number;
          return acc;
        },
        {} as Record<string, number>
      );

    return heatMapData;
  }, [heatMapData]);

  return (
    <Map
      items={turkeyMap}
      heatMapData={heatMapDataByPlateNumber}
      viewBox="0 80 1050 585"
      {...mapProps}
    />
  );
};
