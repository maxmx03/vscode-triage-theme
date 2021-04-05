import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { json: jsn } = codeColors;

export const json: Array<TColors> = [
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
