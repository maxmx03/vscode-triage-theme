import { TColors, CodeColors } from "../utils/types";

export const json = ({ json: jsn }: CodeColors): Array<TColors> => {
  return [
    {
      name: "JSON Comments",
      scope: ["string.json"],
      settings: {
        foreground: jsn.comment,
      },
    },
    {
      name: "JSON Brackets",
      scope: ["source.json"],
      settings: {
        foreground: jsn.brackets,
      },
    },
    {
      name: "JSON Value",
      scope: ["constant.language.json.comments"],
      settings: {
        foreground: jsn.constant,
      },
    },
  ];
};
