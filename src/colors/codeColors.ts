import dotenv from "dotenv";
dotenv.config();
import ColorPallete from "../utils/classes/ColorPallete";

const style = process.env.STYLE ?? "normal";
ColorPallete.generatePallete(style);
export const codeColors = {
  typescript: {
    comment: ColorPallete.colors.grey,
    importMetaNewBoolean: ColorPallete.colors.darkerPink,
    brackets: ColorPallete.colors.white,
    squareBrace: ColorPallete.colors.white,
    importVar: ColorPallete.colors.white,
    string: ColorPallete.colors.green,
    storage: ColorPallete.colors.red,
    constant: ColorPallete.colors.orange,
    function: ColorPallete.colors.yellow,
    params: ColorPallete.colors.lightYellow,
    class: ColorPallete.colors.blue,
    attributes: ColorPallete.colors.purple,
    objectMethod: ColorPallete.colors.limon,
    this: ColorPallete.colors.purple,
    interface: ColorPallete.colors.cyan,
    declareVar: ColorPallete.colors.red,
    regex: ColorPallete.colors.purple,
    regexString: ColorPallete.colors.darkerPink,
  },
  json: {
    comment: ColorPallete.colors.grey,
    brackets: ColorPallete.colors.white,
    constant: ColorPallete.colors.orange,
  },
  xml: {
    meta: ColorPallete.colors.darkerPink,
    version: ColorPallete.colors.darkerPink,
    tag: ColorPallete.colors.orange,
    attribute: ColorPallete.colors.purple,
  },
  html: {
    meta: ColorPallete.colors.darkerPink,
    tag: ColorPallete.colors.orange,
    attribute: ColorPallete.colors.purple,
    text: ColorPallete.colors.white,
    constant: ColorPallete.colors.yellow,
    string: ColorPallete.colors.green,
  },
  scss: {
    keyword: ColorPallete.colors.pink,
    meta: ColorPallete.colors.white,
    tag: ColorPallete.colors.orange,
    custom: ColorPallete.colors.turquoise,
    class: ColorPallete.colors.blue,
    id: ColorPallete.colors.red,
    pseudo: ColorPallete.colors.cyan,
    property: ColorPallete.colors.purple,
    propertyValue: ColorPallete.colors.white,
    unit: ColorPallete.colors.limon,
    variable: ColorPallete.colors.darkerPink,
    variable2: ColorPallete.colors.blue,
    comment: ColorPallete.colors.grey,
    string: ColorPallete.colors.green,
    bracket: ColorPallete.colors.white,
    function: ColorPallete.colors.yellow,
  },
  gitGnoreAtr: {
    string: ColorPallete.colors.orange,
    hash: ColorPallete.colors.red,
  },
};
