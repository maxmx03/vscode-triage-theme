import fs from "fs";
import path from "path";
import myTheme from "./theme";

const vscodeTheme = JSON.stringify(myTheme);
const fileThemesLocation = path.resolve("themes", "Milianor-theme.json");

fs.writeFile(fileThemesLocation, vscodeTheme, "utf8", (err: any) => {
  if (err) throw err;
});
