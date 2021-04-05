import { pallet } from "./pallet";

export const codeColors = {
  typescript: {
    comment: pallet.grey2,
    importMetaNewBoolean: pallet.pink3,
    brackets: pallet.white2,
    squareBrace: pallet.blue1,
    importVar: pallet.pink2,
    string: pallet.green5,
    storage: pallet.red2,
    constant: pallet.orange2,
    function: pallet.yellow2,
    params: pallet.yellow3,
    class: pallet.blue4,
    attributes: pallet.purple3,
    objectMethod: pallet.green4,
    this: pallet.purple3,
    interface: pallet.blue3,
    declareVar: pallet.red2
  },
  json: {
    comment: pallet.purple3,
    brackets: pallet.pink3,
    constant: pallet.yellow2,
  },
  xml: {
    meta: pallet.pink3,
    version: pallet.pink3,
    tag: pallet.orange5,
    attribute: pallet.purple3
  }, 
  html: {
    meta: pallet.pink3,
    tag: pallet.orange5,
    attribute: pallet.purple3,
    text: pallet.white2,
    constant: pallet.yellow2
  },
  css: {
    meta: pallet.pink3,
    tag: pallet.orange5,
    class: pallet.yellow3,
    id: pallet.red2,
    pseudo: pallet.yellow5,
    property: pallet.blue4,
    propertyValue: pallet.purple3,
    unit: pallet.green4,
    variable: pallet.pink4
  }
};
