import { City } from "../../enums";

export interface ICityMap {
  city: keyof typeof City | City;
  strokeColor?: string;
  strokeWidth?: string;
  hoverColor?: string;
  defaultColor?: string;
  tooltipComponent?: React.FC<{ districtName: string }>;
  onClick?: ({ districtName }: { districtName: string }) => void;
}
