import { TColors, Colors } from "../types";

export interface ITheme {
  name: string;
  type: string;
  semanticHighlighting: boolean;
  semanticTokenColors?: object;
  colors: Colors;
  tokenColors: Array<TColors>;
}
