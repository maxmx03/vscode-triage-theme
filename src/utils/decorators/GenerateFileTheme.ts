import path from "path";
import fs from "fs";
import tinycolor from "tinycolor2";

import { TColors } from "../types";

export function GenerateFileTheme<T extends new (...args: any[]) => any>(
  target: T
): T {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
    }

    hasForeground(object: TColors): boolean | undefined {
      return object.settings.foreground?.includes("#");
    }

    makeThemeVibrant(theme: any) {
      return JSON.stringify({
        ...theme,
        colors: {
          ...theme.colors,
          "editor.background": tinycolor(theme.colors["editor.background"])
            .saturate(5)
            .toHexString(),
        },
        tokenColors: theme.tokenColors.map((object: any) => {
          return {
            ...object,
            settings: {
              ...object.settings,
              [this.hasForeground(object)
                ? "foreground"
                : ""]: this.hasForeground(object)
                ? tinycolor(object.settings.foreground).saturate().toHexString()
                : "",
            },
          };
        }),
      });
    }

    makeThemeSoft(theme: any): string {
      return JSON.stringify({
        ...theme,
        tokenColors: theme.tokenColors.map((object: any) => {
          return {
            ...object,
            settings: {
              ...object.settings,
              [this.hasForeground(object)
                ? "foreground"
                : ""]: this.hasForeground(object)
                ? tinycolor(object.settings.foreground)
                    .desaturate(20)
                    .toHexString()
                : "",
            },
          };
        }),
      });
    }

    writeJsonFile(theme: string, location: string) {
      new Promise((resolve, reject) => {
        fs.unlink(location, (err) => {
          if (err) reject(err);

          resolve("success");
        });
      }).finally(() => {
        fs.writeFile(location, theme, "utf8", (err: any) => {
          if (err) throw err;
        });
      });
    }

    saveFile(folderName: string, fileName: string): string {
      return path.resolve(folderName, fileName);
    }

    generateTheme(opts: { default: string; soft: string; vibrant: string }) {
      const myTheme = JSON.stringify(this);
      const myThemeSoft = this.makeThemeSoft(this);
      const mtThemeVibrant = this.makeThemeVibrant(this);

      this.writeJsonFile(myTheme, this.saveFile("themes", opts.default));
      this.writeJsonFile(myThemeSoft, this.saveFile("themes", opts.soft));
      this.writeJsonFile(mtThemeVibrant, this.saveFile("themes", opts.vibrant));
    }
  };
}
