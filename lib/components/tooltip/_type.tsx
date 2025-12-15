export interface ITooltip {
  contentComponent: React.FC<
    { name: string; plateNumber: number } | { name: string }
  >;
  position: {
    x: number;
    y: number;
  };
  props: Record<string, string | number>;
}
