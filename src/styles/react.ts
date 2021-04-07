import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { react: rct } = codeColors;

export const react: Array<TColors> = [
  {
    name: "React Class Component",
    scope: ["support.class.component"],
    settings: {
      foreground: rct.classComponent,
    },
  },
];
