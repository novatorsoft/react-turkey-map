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
          {...(props as
            | { name: string }
            | { name: string; plateNumber: number })}
        />
      )}
    </TooltipBase>
  );
};
