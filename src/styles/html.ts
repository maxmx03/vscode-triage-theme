import { TColors, CodeColors } from "../utils/types";

export const html = ({ html: ht }: CodeColors): Array<TColors> => {
  return [
    {
      name: "HTML Meta",
      scope: [
        "meta.tag.metadata.doctype.html",
        "punctuation.definition.entity.html",
        "variable.control.import.include.pug",
        "meta.tag.sgml.doctype.html",
      ],
      settings: {
        foreground: ht.meta,
      },
    },
    {
      name: "HTML Tag",
      scope: ["entity.name.tag.html"],
      settings: {
        foreground: ht.tag,
      },
    },
    {
      name: "HTML Attribute",
      scope: [
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.tag.pug",
      ],
      settings: {
        foreground: ht.attribute,
      },
    },
    {
      name: "HTML Text",
      scope: ["text.html.jinja"],
      settings: {
        foreground: ht.text,
      },
    },
    {
      name: "HTML Comments",
      scope: ["comment.block.html"],
      settings: {
        foreground: ht.comment,
      },
    },
    {
      name: "HTML Constant",
      scope: ["constant.character.entity.named.nbsp.html"],
      settings: {
        foreground: ht.constant,
      },
    },
    {
      name: "PUG String",
      scope: ["string.quoted.pug"],
      settings: {
        foreground: ht.string,
      },
    },
  ];
};
