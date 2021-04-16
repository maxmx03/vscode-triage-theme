import { TColors, CodeColors } from "../../utils/types";

export const programLanguages = ({
  languages: ls,
}: CodeColors): Array<TColors> => {
  return [
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
      name: "Non-capture operators",
      scope: ["punctuation.definition.group.capture.regexp"],
      settings: {
        foreground: ls.regexNonCapture,
      },
    },
    {
      name: "RegExp start and end characters",
      scope: [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end",
      ],
      settings: {
        foreground: ls.regexStartEnd,
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
        foreground: ls.regexConstants,
      },
    },
    {
      name: "Character group",
      scope: ["punctuation.definition.character-class.regexp"],
      settings: {
        foreground: ls.charGroup,
      },
    },
    {
      name: "Capture groups",
      scope: ["punctuation.definition.group.regexp"],
      settings: {
        foreground: ls.captureGroup,
      },
    },
    {
      name: "Assertion operators",
      scope: [
        "punctuation.definition.group.assertion.regexp",
        "keyword.operator.negation.regexp",
      ],
      settings: {
        foreground: ls.assertionOperator,
      },
    },
    {
      name: "Positive lookaheads",
      scope: ["meta.assertion.look-ahead.regexp"],
      settings: {
        foreground: ls.positiveLookahead,
      },
    },
    {
      name: "Keys (serializable languages)",
      scope: [
        "entity.name.function.target.makefile",
        "entity.name.section.toml",
        "entity.name.tag.yaml",
        "variable.other.key.toml",
      ],
      settings: {
        foreground: ls.keys,
      },
    },
    {
      name: "Dates / timestamps (serializable languages)",
      scope: ["constant.other.date", "constant.other.timestamp"],
      settings: {
        foreground: ls.dates,
      },
    },
    {
      name: "YAML aliases",
      scope: ["variable.other.alias.yaml"],
      settings: {
        fontStyle: "underline italic",
        foreground: ls.aliases,
      },
    },
    {
      name:
        "Separators (key/value, namespace, inheritance, pointer, hash, slice, etc)",
      scope: [
        "constant.other.symbol.hashkey punctuation.definition.constant.ruby",
        "entity.other.attribute-name.placeholder punctuation",
        "entity.other.attribute-name.pseudo-class punctuation",
        "entity.other.attribute-name.pseudo-element punctuation",
        "meta.group.double.toml",
        "meta.group.toml",
        "meta.object-binding-pattern-variable punctuation.destructuring",
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
        "string.unquoted.heredoc punctuation.definition.string",
        "support.other.chomping-indicator.yaml",
        "punctuation.separator.annotation",
      ],
      settings: {
        foreground: ls.general,
      },
    },
    {
      name: "Variable interpolation operators",
      scope: [
        "meta.string-contents.quoted.double punctuation.definition.variable",
        "punctuation.definition.interpolation.begin",
        "punctuation.definition.interpolation.end",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.coffee",
        "punctuation.section.embedded.end",
        "punctuation.section.embedded.end source.php",
        "punctuation.section.embedded.end source.ruby",
        "punctuation.definition.variable.makefile",
      ],
      settings: {
        foreground: ls.general,
      },
    },
    {
      name: "Modifiers",
      scope: ["storage.modifier"],
      settings: {
        foreground: ls.modifier,
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
        fontStyle: "regular",
        foreground: ls.storage,
      },
    },
    {
      name: "User-defined class names",
      scope: ["entity.name.type.class", "entity.name.class"],
      settings: {
        foreground: ls.class,
        fontStyle: "normal",
      },
    },
    {
      name: "Inherited classes",
      scope: ["entity.other.inherited-class"],
      settings: {
        fontStyle: "italic",
        foreground: ls.class,
      },
    },
    {
      name: "this, super, self, etc.",
      scope: [
        "keyword.expressions-and-types.swift",
        "keyword.other.this",
        "variable.language",
        "variable.language punctuation.definition.variable.php",
        "variable.other.readwrite.instance.ruby",
        "variable.parameter.function.language.special",
      ],
      settings: {
        foreground: ls.this,
        fontStyle: "italic",
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
      name: "Methods",
      scope: [
        "entity.name.function",
        "meta.function-call.generic",
        "meta.function-call.object",
        "meta.function-call.php",
        "meta.function-call.static",
        "meta.method-call.java meta.method",
        "meta.method.groovy",
        "support.function.any-method.lua",
        "keyword.operator.function.infix",
      ],
      settings: {
        foreground: ls.objectMethod,
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
      name: "Function parameters",
      scope: [
        "entity.name.variable.parameter",
        "meta.at-rule.function variable",
        "meta.at-rule.mixin variable",
        "meta.function.arguments variable.other.php",
        "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql",
        "variable.parameter",
      ],
      settings: {
        fontStyle: "italic",
        foreground: ls.params,
      },
    },
    {
      name: "Decorators",
      scope: [
        "meta.decorator variable.other.readwrite",
        "meta.decorator variable.other.property",
      ],
      settings: {
        foreground: ls.decorator,
        fontStyle: "italic",
      },
    },
    {
      name: "Decorator Objects",
      scope: ["meta.decorator variable.other.object"],
      settings: {
        foreground: ls.decorator,
      },
    },
    {
      name: "Keywords",
      scope: ["keyword", "punctuation.definition.keyword"],
      settings: {
        foreground: ls.keyword,
      },
    },
    {
      name: 'Keyword "new"',
      scope: ["keyword.control.new", "keyword.operator.new"],
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "Language Built-ins",
      scope: ["support"],
      settings: {
        fontStyle: "italic",
        foreground: ls.buildIn,
      },
    },
    {
      name: "Built-in functions / properties",
      scope: ["support.function", "support.type.property-name"],
      settings: {
        fontStyle: "regular",
      },
    },
    {
      name: "Built-in magic functions and constants",
      scope: [
        "support.function.magic",
        "support.variable",
        "variable.other.predefined",
      ],
      settings: {
        fontStyle: "regular",
        foreground: ls.magicFunctions,
      },
    },
    {
      name: "Types",
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
        fontStyle: "italic",
        foreground: ls.types,
      },
    },
    {
      name: "Generics, templates, and mapped type declarations",
      scope: [
        "entity.name.type.type-parameter",
        "meta.indexer.mappedtype.declaration entity.name.type",
        "meta.type.parameters entity.name.type",
      ],
      settings: {
        foreground: ls.generics,
      },
    },
    {
      name: "Brackets, braces, parens, etc.",
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
      name: "Strings",
      scope: ["string"],
      settings: {
        foreground: ls.string,
      },
    },
    {
      name: "String quotes (temporary vscode fix)",
      scope: [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
      ],
      settings: {
        foreground: ls.string,
      },
    },
    {
      name: "Property quotes (temporary vscode fix)",
      scope: [
        "punctuation.support.type.property-name.begin",
        "punctuation.support.type.property-name.end",
      ],
      settings: {
        foreground: ls.string,
      },
    },
    {
      name: "Docstrings",
      scope: [
        "string.quoted.docstring.multi",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin",
        "string.quoted.docstring.multi.python punctuation.definition.string.end",
        "string.quoted.docstring.multi.python constant.character.escape",
      ],
      settings: {
        foreground: ls.docstring,
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
      name: "Constants",
      scope: ["constant", "variable.other.constant"],
      settings: {
        foreground: ls.constant,
      },
    },
    {
      name: "Destructuring / aliasing reference name (LHS)",
      scope: [
        "meta.import variable.other.readwrite",
        "meta.object-binding-pattern-variable variable.object.property",
        "meta.variable.assignment.destructured.object.coffee variable",
      ],
      settings: {
        fontStyle: "italic",
        foreground: "#FFB86C",
      },
    },
    {
      name: "Destructuring / aliasing variable name (RHS)",
      scope: [
        "meta.import variable.other.readwrite.alias",
        "meta.export variable.other.readwrite.alias",
        "meta.variable.assignment.destructured.object.coffee variable variable",
      ],
      settings: {
        fontStyle: "normal",
        foreground: "#F8F8F2",
      },
    },
    {
      name: "GraphQL keys",
      scope: ["meta.selectionset.graphql variable"],
      settings: {
        foreground: ls.graphQlKeys,
      },
    },
    {
      name: "GraphQL function arguments",
      scope: ["meta.selectionset.graphql meta.arguments variable"],
      settings: {
        foreground: ls.graphQlFuncArgs,
      },
    },
    {
      name: "GraphQL fragment name (definition)",
      scope: ["entity.name.fragment.graphql", "variable.fragment.graphql"],
      settings: {
        foreground: ls.graphQlFragments,
      },
    },
    {
      name: "Edge cases (foreground color resets)",
      scope: [
        "constant.other.symbol.hashkey.ruby",
        "keyword.operator.dereference.java",
        "keyword.operator.navigation.groovy",
        "meta.scope.for-loop.shell punctuation.definition.string.begin",
        "meta.scope.for-loop.shell punctuation.definition.string.end",
        "meta.scope.for-loop.shell string",
        "storage.modifier.import",
        "punctuation.section.embedded.begin.tsx",
        "punctuation.section.embedded.end.tsx",
        "punctuation.section.embedded.begin.jsx",
        "punctuation.section.embedded.end.jsx",
        "punctuation.separator.list.comma.css",
        "constant.language.empty-list.haskell",
      ],
      settings: {
        foreground: "#F8F8F2",
      },
    },
    {
      name: 'Shell variables prefixed with "$" (edge case)',
      scope: ["source.shell variable.other"],
      settings: {
        foreground: ls.shellVariables,
      },
    },
    {
      name:
        "Powershell constants mistakenly scoped to `support`, rather than `constant` (edge)",
      scope: ["support.constant"],
      settings: {
        fontStyle: "normal",
        foreground: ls.shellConstant,
      },
    },
    {
      name: "Makefile prerequisite names",
      scope: ["meta.scope.prerequisites.makefile"],
      settings: {
        foreground: ls.makeFile,
      },
    },
    {
      name: "Haskell Pragmas",
      scope: ["meta.preprocessor.haskell"],
      settings: {
        foreground: ls.Haskell,
      },
    },
  ];
};
