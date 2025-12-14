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
  },
};

export const PlanetNumber = {
  name: "Planet Number",
  render: CityMapWithWrapper,
  args: {
    city: 45,
  },
};
