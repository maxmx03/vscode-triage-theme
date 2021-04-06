import dotenv from "dotenv";
dotenv.config();
import ColorPallete from "../utils/classes/ColorPallete";

const style = process.env.STYLE ?? "normal";
ColorPallete.generatePallete(style);
export const ideColors = {
  editorBackground: ColorPallete.colors.background,
  editorForeground: ColorPallete.colors.foreground,
  activityBarBadgeBackground: ColorPallete.colors.red,
  sideBarTitleForeground: ColorPallete.colors.grey,
  activityBarActiveBorder: ColorPallete.colors.red,
  activityBarForeground: ColorPallete.colors.red,
  statusBarBackground: ColorPallete.colors.red,
};
