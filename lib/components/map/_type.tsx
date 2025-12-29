export interface IMap {
  items: Array<
    | {
        name: string;
        plateNumber: number;
        path: string;
      }
    | {
        name: string;
        path: string;
      }
  >;
  viewBox: string;
  strokeColor?: string;
  strokeWidth?: string;
  hoverColor?: string;
  defaultColor?: string;
  heatMapData?: Record<string, number>;
  heatMapColors?: {
    min?: string;
    max?: string;
  };
  tooltipComponent?: React.FC<
    { name: string; plateNumber: number } | { name: string }
  >;
  onClick?: (
    item: { name: string; plateNumber: number } | { name: string }
  ) => void;
}
