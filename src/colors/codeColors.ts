import { pallet } from "./pallet";

export const codeColors = {
  typescript: {
    comment: pallet.grey,
    importMetaNewBoolean: pallet.darkerPink,
    brackets: pallet.white,
    squareBrace: pallet.white,
    importVar: pallet.white,
    string: pallet.green,
    storage: pallet.red,
    constant: pallet.orange,
    function: pallet.yellow,
    params: pallet.lightYellow,
    class: pallet.blue,
    attributes: pallet.purple,
    objectMethod: pallet.limon,
    this: pallet.purple,
    interface: pallet.cyan,
    declareVar: pallet.red,
    regex: pallet.purple,
    regexString: pallet.darkerPink
  },
  json: {
    comment: pallet.grey,
    brackets: pallet.white,
    constant: pallet.orange,
  },
  xml: {
    meta: pallet.darkerPink,
    version: pallet.darkerPink,
    tag: pallet.orange,
    attribute: pallet.purple
  }, 
  html: {
    meta: pallet.darkerPink,
    tag: pallet.orange,
    attribute: pallet.purple,
    text: pallet.white,
    constant: pallet.yellow,
    string: pallet.green
  },
  scss: {
    keyword: pallet.pink,
    meta: pallet.white,
    tag: pallet.orange,
    custom: pallet.turquoise,
    class: pallet.blue,
    id: pallet.red,
    pseudo: pallet.cyan,
    property: pallet.purple,
    propertyValue: pallet.white,
    unit: pallet.limon,
    variable: pallet.darkerPink,
    variable2: pallet.blue,
    comment: pallet.grey,
    string: pallet.green,
    bracket: pallet.white,
    function: pallet.yellow,
  },
  gitGnoreAtr: {
    string: pallet.orange,
    hash: pallet.red,
  }
};
