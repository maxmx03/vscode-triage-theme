import { TColors } from "../utils/types";

export const vue = ({ vue: v }): Array<TColors> => {
  return [
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
};
