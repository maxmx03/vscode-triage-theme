import dotenv from "dotenv";
dotenv.config();
import express from "express";
import myTheme from "./themes/MilianorTheme";
import path from "path";

const app = express();
const port = 4001;
const style =
  process.env.STYLE === "soft"
    ? `Milianor-theme-${process.env.STYLE}.json`
    : "Milianor-theme.json";
const theme = path.resolve("themes", style);

app.get("/", (req, res) => {
  const style = process.env.STYLE ?? "normal";
  myTheme.generateTheme(style);
  res.sendFile(theme);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
