import { TColors, IColors } from "../types";

export interface ITheme {
  name: string;
  type: string;
  semanticHighlighting: boolean;
  colors: IColors;
  tokenColors: Array<TColors>;
}
