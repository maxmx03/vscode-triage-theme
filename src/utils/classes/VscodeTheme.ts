import { ITheme } from "../interfaces";
import { TColors, Colors } from "../types";
import { GenerateFileTheme } from "../decorators";

@GenerateFileTheme
export default class VsCodeTheme implements ITheme {
  public name: string;
  public type: string;
  public semanticHighlighting: boolean;
  public colors: Colors;
  public tokenColors: Array<TColors>;

  constructor(
    semanticHighlighting?: boolean,
    name?: string,
    type?: string,
    color?: Colors,
    tokenColors?: Array<TColors>
  ) {
    this.name = name ?? "";
    this.type = type ?? "";
    this.semanticHighlighting = semanticHighlighting ?? false;
    this.colors = color ?? {};
    this.tokenColors = tokenColors ?? [];
  }

  generateTheme(opts: { default: string; soft: string; vibrant: string }) {}
}
