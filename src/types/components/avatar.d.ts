import type { colors } from "../generic";

export type color = colors;
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type variant = "circular" | "rounded" | "square";
export type withBorder = boolean;

export interface AvatarProps {
  variant?: variant;
  size?: size;
  withBorder?: withBorder;
  color?: color;
}
