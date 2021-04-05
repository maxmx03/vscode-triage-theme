import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { css: cs } = codeColors;

export const css: Array<TColors> = [
  {
    name: "CSS Meta",
    scope: [
      "meta.selector",
      "meta.property-list",
      "keyword.control.at-rule.media",
      "meta.at-rule.media.header",
      "keyword.control.at-rule.import",
      "meta.at-rule.mixin",
      "keyword.control.at-rule.function.scss"
    ],
    settings: {
      foreground: cs.meta,
    },
  },
  {
    name: "CSS Tag",
    scope: ["entity.name.tag"],
    settings: {
      foreground: cs.tag,
    },
  },
  {
    name: "CSS Id",
    scope: ["entity.other.attribute-name.id"],
    settings: {
      foreground: cs.id,
    },
  },
  {
    name: "CSS Class",
    scope: ["	entity.other.attribute-name.class", "support.function.misc"],
    settings: {
      foreground: cs.class,
    },
  },
  {
    name: "CSS Pseudo Class",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: {
      foreground: cs.pseudo,
    },
  },
  {
    name: "CSS Property",
    scope: ["support.type.property-name"],
    settings: {
      foreground: cs.property,
    },
  },
  {
    name: "CSS Property Value",
    scope: ["meta.property-value"],
    settings: {
      foreground: cs.propertyValue,
    },
  },
  {
    name: "CSS Property Unit",
    scope: ["keyword.other.unit.px"],
    settings: {
      foreground: cs.unit,
    },
  },
  {
    name: "CSS Variable",
    scope: ["variable.scss"],
    settings: {
      foreground: cs.variable,
    },
  }
];
