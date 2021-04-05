import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { scss: sc } = codeColors;

export const scss: Array<TColors> = [
  {
    name: "SCSS Keywords, Interpolation",
    scope: [
      "keyword.control",
      "keyword.other.default",
      "variable.interpolation.scss",
    ],
    settings: {
      foreground: sc.keyword,
    },
  },
  {
    name: "SCSS Meta",
    scope: [
      "meta.selector",
      "meta.property-list",
      "meta.at-rule.media.header",
      "meta.definition.variable",
    ],
    settings: {
      foreground: sc.meta,
    },
  },
  {
    name: "SCSS Tag",
    scope: ["entity.name.tag"],
    settings: {
      foreground: sc.tag,
    },
  },
  {
    name: "SCSS Custom",
    scope: ["entity.other.attribute-name.attribute"],
    settings: {
      foreground: sc.custom,
    },
  },
  {
    name: "SCSS Id",
    scope: ["entity.other.attribute-name.id"],
    settings: {
      foreground: sc.id,
    },
  },
  {
    name: "SCSS Class",
    scope: ["	entity.other.attribute-name.class"],
    settings: {
      foreground: sc.class,
    },
  },
  {
    name: "SCSS Pseudo Class",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: {
      foreground: sc.pseudo,
    },
  },
  {
    name: "SCSS Property",
    scope: ["support.type.property-name"],
    settings: {
      foreground: sc.property,
    },
  },
  {
    name: "SCSS Property Value",
    scope: ["meta.property-value"],
    settings: {
      foreground: sc.propertyValue,
    },
  },
  {
    name: "SCSS Property Unit",
    scope: ["keyword.other.unit"],
    settings: {
      foreground: sc.unit,
    },
  },
  {
    name: "CSS Variable",
    scope: ["variable.css", "variable.argument.css"],
    settings: {
      foreground: sc.variable2,
    },
  },
  {
    name: "SCSS Variable",
    scope: ["variable.scss"],
    settings: {
      foreground: sc.variable,
    },
  },
  {
    name: "SCSS Comments",
    scope: ["comment.line.scss"],
    settings: {
      foreground: sc.comment,
    },
  },
  {
    name: "SCSS Strings",
    scope: ["meta.attribute-selector"],
    settings: {
      foreground: sc.string,
    },
  },
  {
    name: "SCSS Square Brackets",
    scope: [
      "punctuation.definition.attribute-selector.end.bracket.square.scss",
      "punctuation.definition.attribute-selector.begin.bracket.square.scss",
    ],
    settings: {
      foreground: sc.bracket,
    },
  },
  {
    name: "SCSS Functions",
    scope: [
      "meta.function",
      "support.function"
    ],
    settings: {
      foreground: sc.function,
    },
  },
];
