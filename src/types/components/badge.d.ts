import { colors } from "../generic";

export type color = colors;
export type placement = "top-start" | "top-end" | "bottom-start" | "bottom-end";
export type withBorder = boolean;

export interface BadgeProps {
  color?: colors;
  content?: string;
  placement?: placement;
  withBorder?: boolean;
  max?: number | string;
}
