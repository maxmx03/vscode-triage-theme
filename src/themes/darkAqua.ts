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
import { aquaIdeColors, aquaCodeColors } from "../colors";

export const darkAqua = new VsCodeTheme();

darkAqua.name = "Milianor Theme";
darkAqua.type = "dark";
darkAqua.semanticHighlighting = true;
darkAqua.colors = {
  ...aquaIdeColors,
};

darkAqua.tokenColors = [
  ...react(aquaCodeColors),
  ...vue(aquaCodeColors),
  ...json(aquaCodeColors),
  ...xml(aquaCodeColors),
  ...html(aquaCodeColors),
  ...scss(aquaCodeColors),
  ...gitGnoreAtr(aquaCodeColors),
  ...markdown(aquaCodeColors),
  ...languages(aquaCodeColors),
];
