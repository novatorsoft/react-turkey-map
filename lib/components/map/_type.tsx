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
  tooltipComponent?: React.FC<{ districtName: string }>;
  onClick?: (
    item: { name: string; plateNumber: number } | { name: string }
  ) => void;
}
