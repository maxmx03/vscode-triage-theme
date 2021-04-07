import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { vue: v } = codeColors;

export const vue: Array<TColors> = [
  {
    name: "Vue Html",
    scope: ["expression.embedded.vue"],
    settings: {
      foreground: v.expression,
    },
  },
  {
    name: "Vue Class Types",
    scope: ["support.class.builtin.js"],
    settings: {
      foreground: v.types
    }
  },
];

