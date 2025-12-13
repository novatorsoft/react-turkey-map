import { CityMap } from "./_template";
import { ICityMap } from "./_type";
import React from "react";

export default {
  component: CityMap,
  title: "City Map",
};

const CityMapWithWrapper = (args: ICityMap) => (
  <div style={{ maxHeight: "100vh" }}>
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
