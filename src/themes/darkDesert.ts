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
  "editor.background": desertIdeColors.editorBackground,
  "editor.foreground": desertIdeColors.editorForeground,
  "activityBarBadge.background": desertIdeColors.activityBarBadgeBackground,
  "sideBarTitle.foreground": desertIdeColors.sideBarTitleForeground,
  "activityBar.activeBorder": desertIdeColors.activityBarActiveBorder,
  "activityBar.foreground": desertIdeColors.activityBarForeground,
  "statusBar.background": desertIdeColors.statusBarBackground,
};

darkDesert.tokenColors = [
  ...languages(desertCodeColors),
  ...react(desertCodeColors),
  ...vue(desertCodeColors),
  ...json(desertCodeColors),
  ...xml(desertCodeColors),
  ...html(desertCodeColors),
  ...scss(desertCodeColors),
  ...gitGnoreAtr(desertCodeColors),
  ...markdown(desertCodeColors),
];
