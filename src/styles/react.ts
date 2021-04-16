import { TColors, CodeColors } from "../utils/types";

export const react = ({ react: rct }: CodeColors): Array<TColors> => {
  return [
    {
      name: "React Class Component",
      scope: ["support.class.component"],
      settings: {
        foreground: rct.classComponent,
      },
    },
    {
      name: "React Source",
      scope: ["meta.tag"],
      settings: {
        foreground: rct.source,
      },
    },
  ];
};
