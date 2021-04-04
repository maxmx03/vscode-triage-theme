import { TColors } from "../types";

export interface Theme {
    name: string;
    type: string;
    colors: object;
    tokenColors: Array<TColors>;
}
