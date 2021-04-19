import tinycolor from "tinycolor2";

import { desertColors } from "./desertColors";

export const desertIdeColors = {
  "editor.background": desertColors.background,
  "editor.foreground": desertColors.foreground,
  "activityBarBadge.background": desertColors.red,
  "sideBarTitle.foreground": desertColors.grey,
  "activityBar.foreground": desertColors.red,
  "statusBar.background": desertColors.red,
  focusBorder: desertColors.red,
  "button.background": desertColors.orange,
  "button.foreground": desertColors.foreground,
  "button.hoverBackground": desertColors.red,
  "list.activeSelectionBackground": tinycolor(desertColors.red)
    .darken(50)
    .toHexString(),
  "list.activeSelectionForeground": desertColors.white,
};
