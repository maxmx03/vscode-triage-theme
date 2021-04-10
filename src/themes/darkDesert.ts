import VsCodeTheme from "../utils/classes/VsCodeTheme";
import { desertIdeColors } from "../colors";
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
} from "../styles/darkDesert";

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
