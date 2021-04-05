export type TColors = {
    name: string;
    scope: Array<string> | string;
    settings: {
      foreground: string;
      fontStyle?: "italic" | "bold";
    };
};
