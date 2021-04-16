import { TColors } from "../utils/types";

export const react = ({ react: rct }): Array<TColors> => {
  return [
    {
      name: "React Class Component",
      scope: ["support.class.component"],
      settings: {
        foreground: rct.classComponent,
      },
    },
  ];
};
