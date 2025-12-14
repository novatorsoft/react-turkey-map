import React, { useState } from "react";

import { ITurkeyMap } from "./_type";
import { Tooltip } from "../tooltip";
import { turkeyMap } from "../../data";

export const TurkeyMap: React.FC<ITurkeyMap> = ({
  strokeColor = "white",
  hoverColor = "#43a047",
  strokeWidth = "0.08",
  defaultColor = "#444",
  tooltipComponent: TooltipComponent,
  onClick,
}) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    cityName: string;
    cityId: number;
    x: number;
    y: number;
  } | null>(null);

  const handleMouseEnter = (
    cityData: { id: number; name: string },
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredCity(cityData.name);
    TooltipComponent &&
      setTooltip({
        cityName: cityData.name,
        cityId: cityData.id,
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
    setHoveredCity(null);
    setTooltip(null);
  };

  const generateCities = () => {
    return turkeyMap.map((cityData, i) => {
      const isHovered = hoveredCity === cityData.name;
      const element = (
        <path
          key={i}
          id={cityData.name}
          style={{ stroke: strokeColor }}
          d={cityData.path}
          fill={isHovered ? hoverColor : defaultColor}
          onMouseEnter={(e) => handleMouseEnter(cityData, e)}
          onMouseLeave={TooltipComponent ? handlePathMouseLeave : undefined}
          onClick={() =>
            onClick &&
            onClick({ cityName: cityData.name, plateNumber: cityData.id })
          }
          strokeWidth={strokeWidth}
        />
      );
      return { element, cityData };
    });
  };

  return (
    <div>
      <svg
        viewBox="0 80 1050 585"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "block" }}
        onMouseMove={handleMouseMove}
      >
        <g>{generateCities().map((city) => city.element)}</g>
      </svg>
      {tooltip && TooltipComponent && (
        <Tooltip
          contentComponent={TooltipComponent}
          position={tooltip}
          props={{ cityName: tooltip.cityName, plateNumber: tooltip.cityId }}
        />
      )}
    </div>
  );
};
