import tinycolor from "tinycolor2";
import { goldColors } from "./goldColors";
import { Colors } from "../../utils/types";

const darkenOldGold = tinycolor(goldColors.oldGold).darken(45).toHexString();

export const goldIdeColors: Colors = {
  "editor.background": goldColors.background,
  "editor.foreground": goldColors.foreground,
  "activityBarBadge.background": goldColors.tanzanite,
  "sideBarTitle.foreground": goldColors.marble,
  "activityBar.foreground": goldColors.oldGold,
  "statusBar.background": goldColors.background,
  focusBorder: goldColors.oldGold,
  "button.background": goldColors.tanzanite,
  "button.foreground": goldColors.foreground,
  "button.hoverBackground": goldColors.oldGold,
  "list.activeSelectionBackground": darkenOldGold,
  "list.activeSelectionForeground": goldColors.foreground,
  "progressBar.background": goldColors.oldGold,
  "activityBar.background": goldColors.background,
  "activityBar.border": goldColors.oldGold,
  "sideBar.background": darkenOldGold,
  "titleBar.activeBackground": goldColors.background,
  "gitDecoration.addedResourceForeground": goldColors.diamond,
  "gitDecoration.conflictingResourceForeground": goldColors.tanzanite,
  "gitDecoration.deletedResourceForeground": goldColors.ruby,
  "gitDecoration.modifiedResourceForeground": goldColors.gold,
  "gitDecoration.stageModifiedResourceForeground": goldColors.bronze,
};
