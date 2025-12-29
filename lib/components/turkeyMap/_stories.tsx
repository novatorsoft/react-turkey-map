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

export const WithHeatMap = {
  name: "With Heat Map",
  render: Template,
  args: {
    ...Default.args,
    heatMapData: {
      ADANA: 10,
      ADIYAMAN: 20,
      AFYONKARAHİSAR: 30,
      AĞRI: 40,
      AMASYA: 50,
      ANKARA: 60,
      ANTALYA: 70,
      ARTVİN: 80,
      AYDIN: 90,
      BALIKESİR: 100,
      BİLECİK: 110,
      BİNGÖL: 120,
      BİTLİS: 130,
      BOLU: 140,
      BURDUR: 150,
      BURSA: 160,
      ÇANAKKALE: 170,
      ÇANKIRI: 180,
      ÇORUM: 190,
      DENİZLİ: 200,
      DİYARBAKIR: 210,
      EDİRNE: 220,
      ELAZIĞ: 230,
      ERZİNCAN: 240,
      ERZURUM: 250,
      ESKİŞEHİR: 260,
      GAZİANTEP: 270,
      GİRESUN: 280,
      GÜMÜŞHANE: 290,
      HAKKARİ: 300,
      HATAY: 310,
      IĞDIR: 320,
      ISPARTA: 330,
      MERSİN: 340,
      İSTANBUL: 350,
      İZMİR: 360,
      KAHRAMANMARAŞ: 370,
      KARAMAN: 380,
      KARS: 390,
      KASTAMONU: 400,
      KAYSERİ: 410,
      KIRIKKALE: 420,
      KIRKLARELİ: 430,
      KIRŞEHİR: 440,
      KOCAELİ: 450,
      KONYA: 460,
      KÜTAHYA: 470,
      MALATYA: 480,
      MANİSA: 490,
      MARDİN: 500,
      MUĞLA: 510,
      MUŞ: 520,
      NEVŞEHİR: 530,
      NİĞDE: 540,
      ORDU: 550,
      RİZE: 560,
      SAKARYA: 570,
      SAMSUN: 580,
      SİİRT: 590,
      SİNOP: 600,
      SİVAS: 610,
      ŞANLIURFA: 620,
      ŞIRNAK: 630,
      TEKİRDAĞ: 640,
      TOKAT: 650,
      TRABZON: 660,
      TUNCELİ: 670,
      UŞAK: 680,
      VAN: 690,
      YALOVA: 700,
      YOZGAT: 710,
      ZONGULDAK: 720,
      AKSARAY: 730,
      BAYBURT: 740,
      BATMAN: 750,
      BARTIN: 760,
      ARDAHAN: 770,
      KARABÜK: 780,
      KİLİS: 790,
      OSMANİYE: 800,
      DÜZCE: 810,
    },
  },
};

export const WithHeatMapByPlateNumber = {
  name: "With Heat Map By Plate Number",
  render: Template,
  args: {
    ...Default.args,
    heatMapData: {
      1: 10,
      2: 20,
      3: 30,
      4: 40,
      5: 50,
      6: 60,
      7: 70,
      8: 80,
      9: 90,
      10: 100,
      11: 110,
      12: 120,
      13: 130,
      14: 140,
      15: 150,
      16: 160,
      17: 170,
      18: 180,
      19: 190,
      20: 200,
      21: 210,
      22: 220,
      23: 230,
      24: 240,
      25: 250,
      26: 260,
      27: 270,
      28: 280,
      29: 290,
      30: 300,
      31: 310,
      32: 320,
      33: 330,
      34: 340,
      35: 350,
      36: 360,
      37: 370,
      38: 380,
      39: 390,
      40: 400,
      41: 410,
      42: 420,
      43: 430,
      44: 440,
      45: 450,
      46: 460,
      47: 470,
      48: 480,
      49: 490,
      50: 500,
      51: 510,
      52: 520,
      53: 530,
      54: 540,
      55: 550,
      56: 560,
      57: 570,
      58: 580,
      59: 590,
      60: 600,
      61: 610,
      62: 620,
      63: 630,
      64: 640,
      65: 650,
      66: 660,
      67: 670,
      68: 680,
      69: 690,
      70: 700,
      71: 710,
      72: 720,
      73: 730,
      74: 740,
      75: 750,
      76: 760,
      77: 770,
      78: 780,
      79: 790,
      80: 800,
      81: 810,
    },
  },
};
