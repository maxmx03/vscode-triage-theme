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
    name: "Imports, New, Keywords, Comparasion, Suport Variable, Decorator",
    scope: [
      "keyword.control",
      "keyword.operator",
      "new.expr",
      "storage.modifier",
      "punctuation.separator",
      "punctuation.decorator.ts",
      "punctuation.terminator.statement"
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
    scope: ["string.quoted.double", "string.quoted.single", "string.template"],
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
    scope: ["variable.other.constant", "constant", "variable.other.object"],
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
    scope: ["entity.name.type.class"],
    settings: {
      foreground: ts.class,
    },
  },
  {
    name: "Class Attributes",
    scope: ["variable.object.property", "meta.object-literal.key"],
    settings: {
      foreground: ts.attributes,
    },
  },
  {
    name: "Class Method",
    scope: [
      "entity.name.function.member",
      "meta.function-call",
      "meta.tag.attributes",
    ],
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
    name: "Interface, Primitive Types",
    scope: ["entity.name.type", "support.type"],
    settings: {
      foreground: ts.interface,
    },
  },
  {
    name: "Regex",
    scope: ["punctuation.definition.character-class.regexp"],
    settings: {
      foreground: ts.regex,
    },
  },
  {
    name: "Regex String",
    scope: ["string.regexp.js"],
    settings: {
      foreground: ts.regexString,
    },
  },
];
