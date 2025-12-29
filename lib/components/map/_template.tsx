import { MapBase, MapSvg } from "./_style";
import React, { useMemo, useState } from "react";

import { IMap } from "./_type";
import { Tooltip } from "../tooltip";

const interpolateColor = (
  value: number,
  min: number,
  max: number,
  colorMin: string,
  colorMax: string
): string => {
  if (min === max) return colorMin;

  const ratio = (value - min) / (max - min);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbMin = hexToRgb(colorMin);
  const rgbMax = hexToRgb(colorMax);

  if (!rgbMin || !rgbMax) return colorMin;

  const r = Math.round(rgbMin.r + (rgbMax.r - rgbMin.r) * ratio);
  const g = Math.round(rgbMin.g + (rgbMax.g - rgbMin.g) * ratio);
  const b = Math.round(rgbMin.b + (rgbMax.b - rgbMin.b) * ratio);

  return `rgb(${r}, ${g}, ${b})`;
};

export const Map: React.FC<IMap> = ({
  items,
  viewBox,
  strokeColor = "white",
  hoverColor = "#43a047",
  strokeWidth = "0.08",
  defaultColor = "#444",
  heatMapData,
  heatMapColors = {
    min: "#e3f2fd",
    max: "#c62828",
  },
  tooltipComponent: TooltipComponent,
  onClick,
  maxWidth,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    props: Record<string, string | number>;
  } | null>(null);

  const { min, max } = useMemo(() => {
    if (!heatMapData || Object.keys(heatMapData).length === 0) {
      return { min: 0, max: 0 };
    }
    const values = Object.values(heatMapData);
    return {
      min: Math.min(...values),
      max: Math.max(...values),
    };
  }, [heatMapData]);

  const getItemColor = (name: string): string => {
    if (!heatMapData || !heatMapData[name.toLocaleUpperCase("tr")]) {
      return defaultColor;
    }
    return interpolateColor(
      heatMapData[name.toLocaleUpperCase("tr")],
      min,
      max,
      heatMapColors.min!,
      heatMapColors.max!
    );
  };

  const handleMouseEnter = (
    item: { name: string } | { name: string; plateNumber: number },
    event: React.MouseEvent<SVGPathElement>
  ) => {
    setHoveredItem(item.name);
    TooltipComponent &&
      setTooltip({
        props: {
          ...item,
          ...(heatMapData?.[item.name] !== undefined && {
            value: heatMapData[item.name],
          }),
          name: item.name.toLocaleUpperCase("tr"),
        },
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
      const fillColor =
        hoveredItem === itemProps.name
          ? heatMapData
            ? hoverColor
            : hoverColor
          : getItemColor(itemProps.name);

      const element = (
        <path
          key={i}
          id={itemProps.name}
          style={{ stroke: strokeColor }}
          d={path}
          fill={fillColor}
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
    <MapBase>
      <MapSvg
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseMove={handleMouseMove}
        maxWidth={maxWidth}
      >
        <g>{generateBoxes().map((item) => item.element)}</g>
      </MapSvg>
      {tooltip && TooltipComponent && (
        <Tooltip
          contentComponent={TooltipComponent}
          position={tooltip}
          props={tooltip.props}
        />
      )}
    </MapBase>
  );
};
