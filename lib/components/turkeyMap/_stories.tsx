import { ITurkeyMap } from "./_type";
import React from "react";
import { TurkeyMap } from "./_template";

export default {
  component: TurkeyMap,
  title: "Turkey Map",
  tags: ["autodocs"],
  argTypes: {
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
        defaultValue: "white",
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

const Template = (args: ITurkeyMap) => (
  <div style={{ maxWidth: "1080px" }}>
    <TurkeyMap {...args} />
  </div>
);

export const Default = {
  name: "Default",
  render: Template,
  args: {
    strokeColor: "white",
    hoverColor: "#43a047",
    strokeWidth: "0.08",
    defaultColor: "#444",
  },
};

export const WithTooltip = {
  name: "With Tooltip",
  render: Template,
  args: {
    ...Default.args,
    tooltipComponent: ({
      name,
      plateNumber,
    }: {
      name: string;
      plateNumber: number;
    }) => (
      <div>
        <div>{name}</div>
        <div>{plateNumber}</div>
      </div>
    ),
  },
};

export const WithOnClick = {
  name: "With On Click",
  render: Template,
  args: {
    ...Default.args,
    onClick: ({ name, plateNumber }: { name: string; plateNumber: number }) => {
      alert(`${name} ${plateNumber}`);
    },
  },
};
