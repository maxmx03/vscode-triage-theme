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
} from "../styles/darkAqua";
import { aquaIdeColors } from "../colors";

export const darkAqua = new VsCodeTheme();

darkAqua.name = "Milianor Theme";
darkAqua.type = "dark";
darkAqua.semanticHighlighting = true;
darkAqua.colors = {
  ...aquaIdeColors,
};

darkAqua.tokenColors = [
  ...languages,
  ...react,
  ...vue,
  ...json,
  ...xml,
  ...html,
  ...scss,
  ...gitGnoreAtr,
  ...markdown,
];
