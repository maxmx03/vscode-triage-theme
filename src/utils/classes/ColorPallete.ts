import tinycolor from "tinycolor2";
import { Colors } from "../types";

const colors = {
  background: "#212121",
  foreground: "#fafafa",
  green: "#54e346",
  limon: "#c0e218",
  turquoise: "#1bf5af",
  cyan: "#88e1f2",
  blue: "#4fc1e9",
  lightYellow: "#f0e48e",
  yellow: "#fffb97",
  gold: "#fdb827",
  red: "#f85959",
  orange: "#f79071",
  pink: "#f5b5fc",
  darkerPink: "#ff62a5",
  purple: "#a06ee1",
  grey: "#bbbbbb",
  white: "#fafafa",
};

export default class ColorPallete {
  static colors: Colors = colors;

  static generatePallete(style: string): void {
    if (style === "soft") {
      let softColors: Colors = colors;
      for (const key in ColorPallete.colors) {
        if (Object.prototype.hasOwnProperty.call(ColorPallete.colors, key)) {
          const element = ColorPallete.colors[key];

          softColors = {
            ...softColors,
            [`${key}`]: tinycolor(element).desaturate(30).toString(),
          };
        }
      }

      ColorPallete.colors = softColors;
      return;
    }

    ColorPallete.colors = colors;
  }
}
