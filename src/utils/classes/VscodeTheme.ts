import path from "path";
import fs from "fs";
import tinycolor from "tinycolor2";
import { ITheme } from "../interfaces";
import { TColors, IColors } from "../types";

export default class VsCodeTheme implements ITheme {
  public name: string;
  public type: string;
  public semanticHighlighting: boolean;
  public colors: IColors;
  public tokenColors: Array<TColors>;

  constructor(
    semanticHighlighting?: boolean,
    name?: string,
    type?: string,
    color?: object,
    tokenColors?: Array<TColors>
  ) {
    this.name = name ?? "";
    this.type = type ?? "";
    this.semanticHighlighting = semanticHighlighting ?? false;
    this.colors = color ?? {};
    this.tokenColors = tokenColors ?? [];
  }

  writeJsonFile(theme: string, location: string) {
    fs.writeFile(location, theme, "utf8", (err: any) => {
      if (err) throw err;
    });
  }

  saveFile(folderName: string, fileName: string) {
    return path.resolve(folderName, fileName);
  }

  makeThemeSoft(theme: VsCodeTheme): string {
    return JSON.stringify({
      ...theme,
      tokenColors: theme.tokenColors.map((object) => {
        return {
          ...object,
          settings: {
            ...object.settings,
            foreground: tinycolor(object.settings.foreground)
              .desaturate(20)
              .toString(),
          },
        };
      }),
    });
  }

  generateTheme() {
    const myTheme = JSON.stringify(this);
    const myThemeSoft = this.makeThemeSoft(this);

    this.writeJsonFile(myTheme, this.saveFile("themes", "Milianor-theme.json"));
    this.writeJsonFile(
      myThemeSoft,
      this.saveFile("themes", "Milianor-theme-soft.json")
    );
  }
}
