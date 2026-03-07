# react-nvs-turkey-map

React components for rendering a Turkey map (cities) and city maps (districts) as SVG.

- **TurkeyMap**: renders all cities of Turkey
- **CityMap**: renders districts of a single city

## Installation

```bash
npm i react-nvs-turkey-map
# or
yarn add react-nvs-turkey-map
# or
pnpm add react-nvs-turkey-map
```

### Peer dependencies

This package expects these to already exist in your app:

```bash
npm i react @emotion/react @emotion/styled
```

## Quick start

### Turkey map

```tsx
import React from 'react';
import { TurkeyMap } from 'react-nvs-turkey-map';

export default function App() {
  return (
    <TurkeyMap
      onClick={(city) => {
        // city: { name: string; plateNumber: number }
        console.log(city.name, city.plateNumber);
      }}
    />
  );
}
```

### City (district) map

```tsx
import React from 'react';
import { CityMap, City } from 'react-nvs-turkey-map';

export default function App() {
  return (
    <CityMap
      city={City.ISTANBUL}
      onClick={(district) => {
        // district: { name: string }
        console.log(district.name);
      }}
    />
  );
}
```

## Exports

```ts
import {
  TurkeyMap,
  CityMap,
  City,
  type ITurkeyMap,
  type ICityMap,
} from 'react-nvs-turkey-map';
```

## Props

Both `TurkeyMap` and `CityMap` share a common set of visual/interaction props.

### Common props (`IMap`)

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `strokeColor` | `string` | No | `"#000"` (component default) | Border color of shapes. |
| `strokeWidth` | `string` | No | `"1"` (component default) | Border width. |
| `defaultColor` | `string` | No | `"#e5e7eb"` (component default) | Fill color when not hovered and not in heatmap. |
| `hoverColor` | `string` | No | `"#93c5fd"` (component default) | Fill color on hover. |
| `maxWidth` | `string` | No | `"100%"` (component default) | Max width of the SVG container. |
| `tooltipComponent` | `React.FC<...>` | No | — | Custom tooltip renderer. See **Tooltip** below. |
| `onClick` | `(item) => void` | No | — | Click handler. For `TurkeyMap` the item includes `{ plateNumber }`, for districts it is `{ name }`. |

> Note: `items` and `viewBox` are internal and not exposed by `TurkeyMap`/`CityMap`.

### TurkeyMap props (`ITurkeyMap`)

`TurkeyMap` accepts all common props, plus heatmap-related options.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `heatMapData` | `Partial<Record<keyof typeof City, number>> \| Partial<Record<City, number>>` | No | — | Heatmap values per city. Keys can be either **city names** (`"ISTANBUL"`) or **plate numbers** (`34`). |
| `heatMapColors` | `{ min?: string; max?: string }` | No | — | Min/max colors used to interpolate heatmap fills. |

### CityMap props (`ICityMap`)

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `city` | `keyof typeof City \| City` | Yes | — | The city whose district map should be displayed. |

## Heatmap

`TurkeyMap` can color cities based on numeric values.

```tsx
import { TurkeyMap, City } from 'react-nvs-turkey-map';

<TurkeyMap
  heatMapData={{
    [City.ISTANBUL]: 120,
    [City.ANKARA]: 80,
    [City.IZMIR]: 50,
    // you can also use plate numbers as keys:
    16: 30, // BURSA
  }}
  heatMapColors={{ min: '#dbeafe', max: '#1d4ed8' }}
/>;
```

## Tooltip

You can provide a custom tooltip component.

### TurkeyMap tooltip

```tsx
import { TurkeyMap } from 'react-nvs-turkey-map';

const CityTooltip: React.FC<{ name: string; plateNumber: number }> = ({
  name,
  plateNumber,
}) => (
  <div style={{ padding: 8, background: 'white', border: '1px solid #eee' }}>
    <b>{name}</b> ({plateNumber})
  </div>
);

<TurkeyMap tooltipComponent={CityTooltip} />;
```

### CityMap tooltip

```tsx
import { CityMap, City } from 'react-nvs-turkey-map';

const DistrictTooltip: React.FC<{ name: string }> = ({ name }) => (
  <div style={{ padding: 8, background: 'white', border: '1px solid #eee' }}>
    {name}
  </div>
);

<CityMap city={City.ISTANBUL} tooltipComponent={DistrictTooltip} />;
```

## Development

```bash
yarn
yarn storybook
```

Build:

```bash
yarn build
```

## License

MIT — see [LICENSE](./LICENSE).
