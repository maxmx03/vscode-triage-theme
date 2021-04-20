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
import { goldIdeColors, goldCodeColors } from "../colors";

export const goldAge = new VsCodeTheme();

goldAge.name = "Milianor Theme";
goldAge.type = "dark";
goldAge.semanticHighlighting = true;
goldAge.colors = {
  ...goldIdeColors,
};

goldAge.tokenColors = [
  ...react(goldCodeColors),
  ...vue(goldCodeColors),
  ...json(goldCodeColors),
  ...xml(goldCodeColors),
  ...html(goldCodeColors),
  ...scss(goldCodeColors),
  ...gitGnoreAtr(goldCodeColors),
  ...markdown(goldCodeColors),
  ...languages(goldCodeColors),
];
