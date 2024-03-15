import { colors } from "../generic";

export type variant = "filled" | "outlined" | "gradient" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white" | colors;
export type fullWidth = boolean;
export type ripple = boolean;
export type loading = boolean;

export interface ButtonProps {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  loading?: loading;
  to?: string;
  href?: string;
}
