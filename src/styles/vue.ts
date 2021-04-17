import { TColors, CodeColors } from "../utils/types";

export const vue = ({ vue: v }: CodeColors): Array<TColors> => {
  return [
    {
      name: "Vue HTML Tag",
      scope: ["source.vue entity.name.tag"],
      settings: {
        foreground: v.default,
      },
    },
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
