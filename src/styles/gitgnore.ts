import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { gitGnoreAtr: git } = codeColors;

export const gitGnoreAtr: Array<TColors> = [
  {
    name: "Gitgnore",
    scope: ["source.ignore", "source.ini"],
    settings: {
      foreground: git.string
    },
  },
  {
    name: "Gitgnore",
    scope: ["comment.line.number-sign.ignore", "comment.line.number-sign.ini"],
    settings: {
      foreground: git.hash
    },
  },
];
