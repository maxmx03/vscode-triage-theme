import { TColors, CodeColors } from "../utils/types";

export function xml({ xml: xm }: CodeColors): Array<TColors> {
  return [
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
}
