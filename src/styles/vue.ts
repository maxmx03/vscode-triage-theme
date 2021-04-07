import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { vue: v } = codeColors;

export const vue: Array<TColors> = [
  {
    name: "Vue Default Color Expressions, Directive",
    scope: ["expression.embedded.vue", "source.directive.vue"],
    settings: {
      foreground: v.default,
    },
  },
  {
    name: "Vue Class Types",
    scope: ["support.class.builtin.js"],
    settings: {
      foreground: v.types,
    },
  },
];
