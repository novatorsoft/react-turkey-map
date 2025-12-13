import { City } from "../../enums";
import { ICityMap } from "./_type";
import React from "react";
import { cityMaps } from "../../data";

export const CityMap: React.FC<ICityMap> = ({ city }) => {
  const cityNumber =
    typeof city === "string" ? City[city as keyof typeof City] : city;

  const generateDistricts = () => {
    return cityMaps[cityNumber].districtBoxes.map((districtData, i) => {
      const element = (
        <path
          key={i}
          id={districtData.name}
          style={{ stroke: "black" }}
          d={districtData.d}
          fill="#444"
          // onMouseEnter={(e) => onMouseEnter(e, hoverColor)}
          // onMouseLeave={(e) => onMouseLeave(e, idleColor)}
          // onClick={(e) => onClick2(e, onClick)}
          // onMouseOver={(e) => onHover2(e, onHover)}
          strokeWidth="0.08"
        />
      );
      return { element, districtData };
    });
  };

  return (
    <svg
      viewBox={cityMaps[cityNumber].viewBox}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>{generateDistricts().map((district) => district.element)}</g>
    </svg>
  );
};
