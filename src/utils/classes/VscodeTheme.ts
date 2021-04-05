import { ITheme } from "../interfaces";
import { TColors, IColors } from "../types";

export default class VsCodeTheme implements ITheme {
  public name: string;
  public type: string;
  public semanticHighlighting: boolean;
  public colors: IColors;
  public tokenColors: Array<TColors>;

  constructor(
    semanticHighlighting?: boolean,
    name?: string,
    type?: string,
    color?: object,
    tokenColors?: Array<TColors>
  ) {
    this.name = name ?? "";
    this.type = type ?? "";
    this.semanticHighlighting = semanticHighlighting ?? false;
    this.colors = color ?? {};
    this.tokenColors = tokenColors ?? [];
  }
}
