import React, { useState } from "react";

import { IMap } from "./_type";
import { Tooltip } from "../tooltip";

export const Map: React.FC<IMap> = ({
  items,
  viewBox,
  strokeColor = "white",
  hoverColor = "#43a047",
  strokeWidth = "0.08",
  defaultColor = "#444",
  tooltipComponent: TooltipComponent,
  onClick,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    props: Record<string, string | number>;
  } | null>(null);

  const handleMouseEnter = (
    item: { name: string } | { name: string; plateNumber: number },
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredItem(item.name);
    TooltipComponent &&
      setTooltip({
        props: item,
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
    setHoveredItem(null);
    setTooltip(null);
  };

  const generateBoxes = () => {
    return items.map(({ path, ...itemProps }, i) => {
      const element = (
        <path
          key={i}
          id={itemProps.name}
          style={{ stroke: strokeColor }}
          d={path}
          fill={hoveredItem === itemProps.name ? hoverColor : defaultColor}
          onMouseEnter={(e) => handleMouseEnter(itemProps, e)}
          onMouseLeave={TooltipComponent ? handlePathMouseLeave : undefined}
          onClick={() => onClick && onClick(itemProps)}
          strokeWidth={strokeWidth}
        />
      );
      return { element, itemProps };
    });
  };

  return (
    <div>
      <svg
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "block" }}
        onMouseMove={handleMouseMove}
      >
        <g>{generateBoxes().map((item) => item.element)}</g>
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
          props={tooltip.props}
        />
      )}
    </div>
  );
};
