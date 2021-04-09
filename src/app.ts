import express from "express";
import myTheme from "./themes/MilianorTheme";

const app = express();
const port = 4001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/generate", (req, res) => {
  myTheme.generateTheme();
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}/`);
});
