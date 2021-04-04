import express from "express";
import fs from "fs";
import path from "path";
import myTheme from "./themes/MilianorTheme";

const app = express();
const port = 4001;
const vscodeTheme = JSON.stringify(myTheme);
const fileThemesLocation = path.resolve("themes", "Milianor-theme.json");

function generateTheme(req: any, res: any, next: any) {
  fs.writeFile(fileThemesLocation, vscodeTheme, "utf8", (err: any) => {
    if (err) throw err;

    next();
  });
}

app.use(generateTheme);

app.get("/", (req, res) => {
  res.sendFile(fileThemesLocation);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
