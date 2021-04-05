import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { typescript: ts } = codeColors;

export const typescript: Array<TColors> = [
  {
    name: "Comments",
    scope: ["comment.block", "comment.line.double-slash"],
    settings: {
      foreground: ts.comment,
    },
  },
  {
    name: "Imports, New, Keywords, Primitive, Comparasion, Suport Variable",
    scope: [
      "meta.import",
      "keyword.control.export",
      "keyword.control.default",
      "new.expr",
      "keyword.control.flow",
      "keyword.control.conditional",
      "keyword.operator.logical",
      "storage.modifier",
      "support.type.primitive",
      "support.variable.property",
      "keyword.operator.comparison",
      "keyword.operator.relational",
      "support.type.object.module"
    ],
    settings: {
      foreground: ts.importMetaNewBoolean,
    },
  },
  {
    name: "Brackets",
    scope: ["punctuation.definition.block"],
    settings: {
      foreground: ts.brackets,
    },
  },
  {
    name: "Square Braces",
    scope: ["meta.brace.square"],
    settings: {
      foreground: ts.squareBrace,
    },
  },
  {
    name: "Import Variable",
    scope: ["variable.other.readwrite.alias"],
    settings: {
      foreground: ts.importVar,
    },
  },
  {
    name: "String",
    scope: ["string.quoted.double", "string.quoted.single"],
    settings: {
      foreground: ts.string,
    },
  },
  {
    name: "Storage",
    scope: ["storage.type"],
    settings: {
      foreground: ts.storage,
    },
  },
  {
    name: "Constant, Boolean",
    scope: [
      "variable.other.constant",
      "constant.language.boolean",
      "variable.other.object"
    ],
    settings: {
      foreground: ts.constant,
    },
  },
  {
    name: "Functions",
    scope: ["entity.name.function"],
    settings: {
      foreground: ts.function,
    },
  },
  {
    name: "Functions Parameters",
    scope: ["variable.parameter"],
    settings: {
      foreground: ts.params,
      fontStyle: "italic",
    },
  },
  {
    name: "Class",
    scope: ["entity.name.type.class", "support.class.component"],
    settings: {
      foreground: ts.class,
    },
  },
  {
    name: "Class Attributes",
    scope: ["variable.object.property", "meta.object-literal.key"],
    settings: {
      foreground: ts.attributes,
    }
  },
  {
    name: "Class Method",
    scope: ["entity.name.function.member", "meta.function-call", "meta.tag.attributes"],
    settings: {
      foreground: ts.objectMethod,
    },
  },
  {
    name: "This",
    scope: ["variable.language.this"],
    settings: {
      foreground: ts.this,
    },
  },
  {
    name: "Interface, Types",
    scope: ["entity.name.type.interface", "entity.name.type"],
    settings: {
      foreground: ts.interface,
    },
  },
  {
    name: "Regex",
    scope: [
      "punctuation.definition.character-class.regexp",
    ],
    settings: {
      foreground: ts.regex,
    },
  },
  {
    name: "Regex String",
    scope: [
      "string.regexp.js"
    ],
    settings: {
      foreground: ts.regexString,
    },
  },
];

