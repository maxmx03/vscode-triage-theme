import VsCodeTheme from "../utils/classes/VsCodeTheme";
import { ideColors } from "../colors";
import { typescript, json, xml, html, css } from "../styles";

const myTheme = new VsCodeTheme();
myTheme.name = "Milianor Theme";
myTheme.type = "dark";
myTheme.semanticHighlighting = true;
myTheme.colors = {
  "editor.background": ideColors.editorBackground,
  "editor.foreground": ideColors.editorForeground,
  "activityBarBadge.background": ideColors.activityBarBadgeBackground,
  "sideBarTitle.foreground": ideColors.sideBarTitleForeground,
  "activityBar.activeBorder": ideColors.activityBarActiveBorder,
  "activityBar.foreground": ideColors.activityBarForeground,
  "statusBar.background": ideColors.statusBarBackground,
};

myTheme.tokenColors = [...typescript, ...json, ...xml, ...html, ...css];

export default myTheme;
