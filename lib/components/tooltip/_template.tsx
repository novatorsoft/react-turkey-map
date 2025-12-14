import { ITooltip } from "./_type";
import React from "react";
import { TooltipBase } from "./_style";

export const Tooltip: React.FC<ITooltip> = ({
  position,
  contentComponent: TooltipContentComponent,
  props,
}) => {
  return (
    <TooltipBase position={position}>
      {TooltipContentComponent && (
        <TooltipContentComponent
          cityName={props.cityName as string}
          plateNumber={props.plateNumber as number}
        />
      )}
    </TooltipBase>
  );
};
