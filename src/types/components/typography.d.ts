import type { colors } from "../generic";

export type variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "paragraph"
  | "small";
export type color = "black" | "white" | colors;

export interface TypographyProps {
  variant?: variant;
  color?: color;
}
