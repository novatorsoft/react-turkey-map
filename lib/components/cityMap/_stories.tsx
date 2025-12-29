import { City } from "../../enums";
import { CityMap } from "./_template";
import { ICityMap } from "./_type";
import React from "react";

const cityOptions = Object.keys(City).filter((key) =>
  isNaN(Number(key))
) as Array<keyof typeof City>;

export default {
  component: CityMap,
  title: "City Map",
  tags: ["autodocs"],
  argTypes: {
    city: {
      control: {
        type: "select",
        options: cityOptions,
      },
    },
    tooltipComponent: {
      control: {
        type: "function",
      },
    },
    onClick: {
      action: "onClick",
    },
    strokeColor: {
      control: {
        type: "color",
      },
    },
    hoverColor: {
      control: {
        type: "color",
      },
    },
    strokeWidth: {
      control: {
        type: "number",
      },
    },
    defaultColor: {
      control: {
        type: "color",
      },
    },
  },
};

const CityMapWithWrapper = (args: ICityMap) => (
  <div style={{ maxWidth: "500px" }}>
    <CityMap {...args} />
  </div>
);

export const Default = {
  name: "Default",
  render: CityMapWithWrapper,
  args: {
    city: "İZMİR",
    strokeColor: "white",
    hoverColor: "#43a047",
    strokeWidth: "0.08",
    defaultColor: "#444",
  },
};

export const PlanetNumber = {
  name: "Planet Number",
  render: CityMapWithWrapper,
  args: {
    city: 45,
    strokeColor: "white",
    hoverColor: "#43a047",
    strokeWidth: "0.08",
    defaultColor: "#444",
  },
};

export const WithTooltip = {
  name: "With Tooltip",
  render: CityMapWithWrapper,
  args: {
    ...Default.args,
    tooltipComponent: ({ name }: { name: string }) => <div>{name}</div>,
  },
};

export const WithOnClick = {
  name: "With On Click",
  render: CityMapWithWrapper,
  args: {
    ...Default.args,
    onClick: ({ name }: { name: string }) => {
      alert(name);
    },
  },
};

export const WithHeatMap = {
  name: "With Heat Map",
  render: CityMapWithWrapper,
  args: {
    city: 45,
    heatMapData: {
      AKHİSAR: 38,
      ALASEHIR: 72,
      ALAŞEHİR: 59,
      SARIGÖL: 94,
      SALİHLİ: 16,
      SARUHANLI: 80,
      SELENDİ: 43,
      TURGUTLU: 21,
      GÖRDES: 67,
      DEMİRCİ: 55,
      KIRKAĞAÇ: 12,
      KULA: 77,
      ŞEHZADELER: 87,
      YUNUSEMRE: 33,
    },
  },
};
