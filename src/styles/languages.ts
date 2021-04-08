import { codeColors } from "../colors";
import { TColors } from "../utils/types";

const { languages: ls } = codeColors;

export const languages: Array<TColors> = [
  {
    name:
      "Imports, New, Keywords, Comparasion, Suport Variable, Decorator etc...",
    scope: [
      "keyword.control",
      "keyword.operator",
      "new.expr",
      "keyword.other.new",
      "storage.modifier",
      "punctuation.separator",
      "punctuation.decorator",
      "punctuation.terminator.statement",
      "constant.other.symbol.hashkey",
      "punctuation.definition.constant.ruby",
      "entity.other.attribute-name.placeholder",
      "entity.other.attribute-name.pseudo-class",
      "entity.other.attribute-name.pseudo-element",
      "meta.group.double.toml",
      "meta.group.toml",
      "meta.object-binding-pattern-variable",
      "punctuation.destructuring",
      "punctuation.colon.graphql",
      "punctuation.definition.block.scalar.folded.yaml",
      "punctuation.definition.block.scalar.literal.yaml",
      "punctuation.definition.block.sequence.item.yaml",
      "punctuation.definition.entity.other.inherited-class",
      "punctuation.function.swift",
      "punctuation.separator.dictionary.key-value",
      "punctuation.separator.hash",
      "punctuation.separator.inheritance",
      "punctuation.separator.key-value",
      "punctuation.separator.key-value.mapping.yaml",
      "punctuation.separator.namespace",
      "punctuation.separator.pointer-access",
      "punctuation.separator.slice",
      "string.unquoted.heredoc",
      "support.other.chomping-indicator.yaml",
      "punctuation.separator.annotation",
      "support.type.object.module",
      "meta.string-contents.quoted.double",
      "punctuation.definition.interpolation.begin",
      "punctuation.definition.interpolation.end",
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded.begin",
      "punctuation.section.embedded.coffee",
      "punctuation.section.embedded.end",
      "punctuation.definition.variable.makefile",
    ],
    settings: {
      foreground: ls.general,
    },
  },
  {
    name: "Comments",
    scope: [
      "comment",
      "punctuation.definition.comment",
      "unused.comment",
      "wildcard.comment",
    ],
    settings: {
      foreground: ls.comment,
    },
  },
  {
    name: "JSDoc-style keywords",
    scope: [
      "comment keyword.codetag.notation",
      "comment.block.documentation keyword",
      "comment.block.documentation storage.type.class",
    ],
    settings: {
      foreground: ls.jsDocKeyWord,
    },
  },
  {
    name: "JSDoc-style types",
    scope: ["comment.block.documentation entity.name.type"],
    settings: {
      foreground: ls.jsDockTypes,
      fontStyle: "italic",
    },
  },
  {
    name: "JSDoc-style type brackets",
    scope: [
      "comment.block.documentation entity.name.type punctuation.definition.bracket",
    ],
    settings: {
      foreground: ls.jsDockTypes,
    },
  },
  {
    name: "JSDoc-style comment parameters",
    scope: ["comment.block.documentation variable"],
    settings: {
      foreground: ls.jsDockComment,
      fontStyle: "italic",
    },
  },
  {
    name: "Brackets",
    scope: [
      "keyword.operator.other.powershell",
      "keyword.other.statement-separator.powershell",
      "meta.brace.round",
      "meta.function-call punctuation",
      "punctuation.definition.arguments.begin",
      "punctuation.definition.arguments.end",
      "punctuation.definition.entity.begin",
      "punctuation.definition.entity.end",
      "punctuation.definition.tag.cs",
      "punctuation.definition.type.begin",
      "punctuation.definition.type.end",
      "punctuation.section.scope.begin",
      "punctuation.section.scope.end",
      "storage.type.generic.java",
      "string.template meta.brace",
      "string.template punctuation.accessor",
    ],
    settings: {
      foreground: ls.brackets,
    },
  },
  {
    name: "Import Variable",
    scope: ["variable.other.readwrite.alias"],
    settings: {
      foreground: ls.importVar,
    },
  },
  {
    name: "String",
    scope: ["string.quoted.double", "string.quoted.single", "string.template", "punctuation.definition.string"],
    settings: {
      foreground: ls.string,
    },
  },
  {
    name: "Storage",
    scope: [
      "storage",
      "meta.implementation storage.type.objc",
      "meta.interface-or-protocol storage.type.objc",
      "source.groovy storage.type.def",
    ],
    settings: {
      foreground: ls.storage,
    },
  },
  {
    name: "Variables and object properties",
    scope: [
      "variable",
      "constant.other.key.perl",
      "support.variable.property",
      "variable.other.constant.js",
      "variable.other.constant.ts",
      "variable.other.constant.tsx",
    ],
    settings: {
      foreground: ls.variables,
    },
  },
  {
    name: "PHP Variables",
    scope: ["variable.other.php"],
    settings: {
      foreground: ls.phpVariables,
    },
  },
  {
    name: "Constant, Boolean",
    scope: ["variable.other.constant", "constant"],
    settings: {
      foreground: ls.constant,
    },
  },
  {
    name: "Constant escape sequences",
    scope: [
      "constant.character.escape",
      "constant.character.string.escape",
      "constant.regexp",
    ],
    settings: {
      foreground: ls.regex,
    },
  },
  {
    name: "RegExp string",
    scope: [
      "string.regexp",
      "constant.other.character-class.set.regexp",
      "constant.character.escape.backslash.regexp",
    ],
    settings: {
      foreground: ls.regexString,
    },
  },
  {
    name: "Non-capture operators, Character group",
    scope: [
      "punctuation.definition.group.capture.regexp",
      "punctuation.definition.character-class.regexp",
    ],
    settings: {
      foreground: ls.regexPositive,
    },
  },
  {
    name:
      "RegExp start and end characters, Capture groups, Assertion operators",
    scope: [
      "string.regexp punctuation.definition.string.begin",
      "string.regexp punctuation.definition.string.end",
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "keyword.operator.negation.regexp",
    ],
    settings: {
      foreground: ls.regexAssertion,
    },
  },
  {
    name: "Positive lookaheads",
    scope: ["meta.assertion.look-ahead.regexp"],
    settings: {
      foreground: ls.regexString,
    },
  },
  {
    name: "Functions",
    scope: ["entity.name.function"],
    settings: {
      foreground: ls.function,
    },
  },
  {
    name: "Functions Parameters",
    scope: ["variable.parameter"],
    settings: {
      foreground: ls.params,
      fontStyle: "italic",
    },
  },
  {
    name: "Class & Inherited classes",
    scope: [
      "entity.name.type.class",
      "entity.name.class",
      "entity.other.inherited-class",
    ],
    settings: {
      foreground: ls.class,
    },
  },
  {
    name: "Class Attributes",
    scope: ["variable.object.property", "meta.object-literal.key"],
    settings: {
      foreground: ls.attributes,
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
      foreground: ls.objectMethod,
    },
  },
  {
    name: "this, super, self, built-in magic functions and constants",
    scope: [
      "keyword.expressions-and-types.swifts",
      "keyword.other.this",
      "variable.language",
      "variable.language",
      "variable.other.readwrite.instance.ruby",
      "variable.parameter.function.language.special",
      "support.function.magic",
      "support.variable",
      "variable.other.predefined",
      "punctuation.definition.variable.php",
      "variable.other.global",
    ],
    settings: {
      foreground: ls.this,
    },
  },
  {
    name: "Interface, Primitive Types",
    scope: [
      "entity.name.type",
      "keyword.primitive-datatypes.swift",
      "keyword.type.cs",
      "meta.protocol-list.objc",
      "meta.return-type.objc",
      "source.go storage.type",
      "source.groovy storage.type",
      "source.java storage.type",
      "source.powershell entity.other.attribute-name",
      "storage.class.std.rust",
      "storage.type.attribute.swift",
      "storage.type.c",
      "storage.type.core.rust",
      "storage.type.cs",
      "storage.type.groovy",
      "storage.type.objc",
      "storage.type.php",
      "storage.type.haskell",
      "storage.type.ocaml",
    ],
    settings: {
      foreground: ls.interface,
    },
  },
];
