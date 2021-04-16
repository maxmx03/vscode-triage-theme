export type TColors = {
  name: string;
  scope: Array<string> | string;
  settings: {
    foreground?: string;
    fontStyle?:
      | "normal"
      | "italic"
      | "bold"
      | "regular"
      | "underline"
      | "underline italic"
  };
};
