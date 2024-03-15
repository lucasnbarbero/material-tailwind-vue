import type { colors } from "../generic";

export type variant = "filled" | "outlined" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white" | colors;
export type fullWidth = boolean;
export type loading = boolean;

export interface ButtonGroupProps {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  loading?: loading;
}
