import express from "express";

import { darkDesert, darkAqua, goldAge } from "./themes";

const app = express();
const port = 4001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/generate", (req, res) => {
  darkDesert.generateTheme({
    default: "Milianor-desert.json",
    soft: "Milianor-desert-soft.json",
    vibrant: "Milianor-desert-vibrant.json",
  });

  darkAqua.generateTheme({
    default: "Milianor-aqua.json",
    soft: "Milianor-aqua-soft.json",
    vibrant: "Milianor-aqua-vibrant.json",
  });

  goldAge.generateTheme({
    default: "Milianor-gold.json",
    soft: "Milianor-gold-soft.json",
    vibrant: "Milianor-gold-vibrant.json",
  });

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
