import React, { useState } from "react";

import { City } from "../../enums";
import { ICityMap } from "./_type";
import { Tooltip } from "../tooltip";
import { cityMaps } from "../../data";

export const CityMap: React.FC<ICityMap> = ({
  city,
  strokeColor = "white",
  hoverColor = "#43a047",
  strokeWidth = "0.08",
  defaultColor = "#444",
  tooltipComponent: TooltipComponent,
  onClick,
}) => {
  const cityNumber =
    typeof city === "string" ? City[city as keyof typeof City] : city;

  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    districtName: string;
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (
    districtData: { name: string },
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredDistrict(districtData.name);
    TooltipComponent &&
      setTooltip({
        districtName: districtData.name,
        x: event.clientX,
        y: event.clientY,
      });
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    setTooltip((prev) =>
      prev
        ? {
            ...prev,
            x: event.clientX,
            y: event.clientY,
          }
        : null
    );
  };

  const handlePathMouseLeave = () => {
    setHoveredDistrict(null);
    setTooltip(null);
  };

  const generateDistricts = () => {
    return cityMaps[cityNumber].districtBoxes.map((districtData, i) => {
      const element = (
        <path
          key={i}
          id={districtData.name}
          style={{ stroke: strokeColor }}
          d={districtData.d}
          fill={
            hoveredDistrict === districtData.name ? hoverColor : defaultColor
          }
          onMouseEnter={(e) => handleMouseEnter(districtData, e)}
          onMouseLeave={TooltipComponent ? handlePathMouseLeave : undefined}
          onClick={() =>
            onClick && onClick({ districtName: districtData.name })
          }
          strokeWidth={strokeWidth}
        />
      );
      return { element, districtData };
    });
  };

  return (
    <div>
      <svg
        viewBox={cityMaps[cityNumber].viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "block" }}
        onMouseMove={handleMouseMove}
      >
        <g>{generateDistricts().map((district) => district.element)}</g>
      </svg>
      {tooltip && TooltipComponent && (
        <Tooltip
          contentComponent={
            TooltipComponent as React.FC<
              | {
                  cityName: string;
                  plateNumber: number;
                }
              | { districtName: string }
            >
          }
          position={tooltip}
          props={{ districtName: tooltip.districtName }}
        />
      )}
    </div>
  );
};
