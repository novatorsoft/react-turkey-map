export interface ITooltip {
  contentComponent: React.FC<{ cityName: string; plateNumber: number }>;
  position: {
    x: number;
    y: number;
  };
  props: Record<string, string | number>;
}
