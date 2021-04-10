import { aquaCodeColors } from "../../colors";
import { TColors } from "../../utils/types";

const { markdown: mk } = aquaCodeColors;

export const markdown: Array<TColors> = [
  {
    name: "Emphasis",
    scope: ["emphasis"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Strong",
    scope: ["strong"],
    settings: {
      fontStyle: "bold",
    },
  },
  {
    name: "Header",
    scope: ["header"],
    settings: {
      foreground: mk.header,
    },
  },
  {
    name: "Source",
    scope: ["source"],
    settings: {
      foreground: mk.source,
    },
  },
  {
    name: "Meta Diff",
    scope: ["meta.diff", "meta.diff.header"],
    settings: {
      foreground: mk.diff,
    },
  },
  {
    name: "Markup Inserted",
    scope: ["markup.inserted"],
    settings: {
      foreground: mk.inserted,
    },
  },
  {
    name: "Markup Deleted",
    scope: ["markup.deleted"],
    settings: {
      foreground: mk.deleted,
    },
  },
  {
    name: "Markup Changed",
    scope: ["markup.changed"],
    settings: {
      foreground: mk.changed,
    },
  },
  {
    name: "Markup invalid",
    scope: ["invalid"],
    settings: {
      foreground: mk.invalid,
      fontStyle: "underline italic",
    },
  },
  {
    name: "Markup deprecated",
    scope: ["invalid.deprecated"],
    settings: {
      foreground: mk.deprecated,
      fontStyle: "underline italic",
    },
  },
  {
    name: "Filename",
    scope: ["entity.name.filename"],
    settings: {
      foreground: mk.filename,
    },
  },
  {
    name: "Markup Error",
    scope: ["markup.error"],
    settings: {
      foreground: mk.error,
    },
  },
  {
    name: "Underlined markup",
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "Bold markup",
    scope: ["markup.bold"],
    settings: {
      fontStyle: "bold",
      foreground: mk.bold,
    },
  },
  {
    name: "Markup headings",
    scope: ["markup.heading"],
    settings: {
      fontStyle: "bold",
      foreground: mk.bold,
    },
  },
  {
    name: "Markup italic",
    scope: ["markup.italic"],
    settings: {
      foreground: mk.italic,
      fontStyle: "italic",
    },
  },
  {
    name: "Bullets, lists (prose)",
    scope: [
      "beginning.punctuation.definition.list.markdown",
      "beginning.punctuation.definition.quote.markdown",
      "punctuation.definition.link.restructuredtext",
    ],
    settings: {
      foreground: mk.list,
    },
  },
  {
    name: "Inline code (prose)",
    scope: ["markup.inline.raw", "markup.raw.restructuredtext"],
    settings: {
      foreground: mk.inline,
    },
  },
  {
    name: "Links (prose)",
    scope: ["markup.underline.link", "markup.underline.link.image"],
    settings: {
      foreground: mk.links,
    },
  },
  {
    name: "Link text, image alt text (prose)",
    scope: [
      "meta.link.reference.def.restructuredtext",
      "punctuation.definition.directive.restructuredtext",
      "string.other.link.description",
      "string.other.link.title",
    ],
    settings: {
      foreground: mk.linkText,
    },
  },
  {
    name: "Blockquotes (prose)",
    scope: ["entity.name.directive.restructuredtext", "markup.quote"],
    settings: {
      foreground: mk.bloquotes,
      fontStyle: "italic",
    },
  },
  {
    name: "Horizontal rule (prose)",
    scope: ["meta.separator.markdown"],
    settings: {
      foreground: mk.horizontal,
    },
  },
  {
    name: "Code blocks",
    scope: [
      "fenced_code.block.language",
      "markup.raw.inner.restructuredtext",
      "markup.fenced_code.block.markdown punctuation.definition.markdown",
    ],
    settings: {
      foreground: mk.codeBlocks,
    },
  },
  {
    name: "Prose constants",
    scope: ["punctuation.definition.constant.restructuredtext"],
    settings: {
      foreground: mk.constants,
    },
  },
  {
    name: "Braces in markdown headings",
    scope: [
      "markup.heading.markdown punctuation.definition.string.begin",
      "markup.heading.markdown punctuation.definition.string.end",
    ],
    settings: {
      foreground: mk.braces,
    },
  },
  {
    name: "Braces in markdown paragraphs",
    scope: [
      "meta.paragraph.markdown punctuation.definition.string.begin",
      "meta.paragraph.markdown punctuation.definition.string.end",
    ],
    settings: {
      foreground: mk.bracesParagraph,
    },
  },
  {
    name: "Braces in markdown blockquotes",
    scope: [
      "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
      "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end",
    ],
    settings: {
      foreground: mk.bracesBlock,
    },
  },
];
