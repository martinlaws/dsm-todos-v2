export const defaultCssProperties: any = {
  background: "var(--background-color-base)",
  textAlign: "center",
  color: "var(--text-color)",
  fontFamily: "'IBM Plex Sans', sans-serif",
  "--base-transition": "0.2s ease-in-out"
};

export type ColorPalette = {
  name: string;
  colors: Color[];
};

export type Color = {
  name: string;
  value: string;
};

export { defaultToDos } from "./defaultToDos";