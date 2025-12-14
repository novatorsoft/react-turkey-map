export interface ITurkeyMap {
  strokeColor?: string;
  strokeWidth?: string;
  hoverColor?: string;
  defaultColor?: string;
  tooltipComponent?: React.FC<{ cityName: string; plateNumber: number }>;
  onClick?: ({
    cityName,
    plateNumber,
  }: {
    cityName: string;
    plateNumber: number;
  }) => void;
}
