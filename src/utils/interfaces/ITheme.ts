import { TColors, Colors } from "../types";

export interface ITheme {
  name: string;
  type: string;
  semanticHighlighting: boolean;
  semanticTokenColors?: object;
  colors: Colors;
  tokenColors: Array<TColors>;
  writeJsonFile(theme: string, location: string): void;
  saveFile(folderName: string, fileName: string): string;
  makeThemeVibrant(theme: this): string;
  makeThemeSoft(theme: this): string;
  generateTheme(opts: { default: string; soft: string; vibrant: string }): void;
}
