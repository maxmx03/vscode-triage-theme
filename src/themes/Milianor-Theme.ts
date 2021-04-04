import { Theme } from "../utils/interfaces";
import { TColors } from "../utils/types";

export default class MilianorTheme implements Theme {
    public name: string;
    public type: string;
    public colors: object;
    public tokenColors: Array<TColors>;

    constructor(
        name?: string,
        type?: string,
        color?: object,
        tokenColors?: Array<TColors>
    ) {
        this.name = name ?? "";
        this.type = type ?? "";
        this.colors = color ?? {};
        this.tokenColors = tokenColors ?? [];
    }
}
