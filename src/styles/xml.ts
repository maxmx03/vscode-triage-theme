import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { xml: xm } = codeColors;

export const xml: Array<TColors> = [
  {
    name: "XML Meta",
    scope: ["meta.tag.xml"],
    settings: {
      foreground: xm.meta,
    },
  },
  {
    name: "XML Tag Version",
    scope: [
      "entity.name.tag.xml",
      "entity.other.attribute-name.xml",
      "punctuation.definition.tag.xml",
    ],
    settings: {
      foreground: xm.version,
    },
  },
  {
    name: "XML Tag",
    scope: ["entity.name.tag.localname.xml"],
    settings: {
      foreground: xm.tag,
    },
  },
  {
    name: "XML Tag",
    scope: ["entity.other.attribute-name.localname.xml"],
    settings: {
      foreground: xm.attribute,
    },
  },
];
