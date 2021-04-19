import VsCodeTheme from "../utils/classes/VsCodeTheme";
import {
  languages,
  react,
  vue,
  json,
  xml,
  html,
  scss,
  gitGnoreAtr,
  markdown,
} from "../styles";
import { desertIdeColors, desertCodeColors } from "../colors";

export const darkDesert = new VsCodeTheme();

darkDesert.name = "Milianor Theme";
darkDesert.type = "dark";
darkDesert.semanticHighlighting = true;
darkDesert.colors = {
  ...desertIdeColors,
};

darkDesert.tokenColors = [
  ...react(desertCodeColors),
  ...vue(desertCodeColors),
  ...json(desertCodeColors),
  ...xml(desertCodeColors),
  ...html(desertCodeColors),
  ...scss(desertCodeColors),
  ...gitGnoreAtr(desertCodeColors),
  ...markdown(desertCodeColors),
  ...languages(desertCodeColors),
];
