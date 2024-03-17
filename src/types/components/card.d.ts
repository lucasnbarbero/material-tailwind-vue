import { colors } from "../generic";

type variant = "filled" | "gradient";
type color = "transparent" | "white" | colors;
type shadow = boolean;
type floated = boolean;
type divider = boolean;

export interface CardProps {
  variant?: variant;
  color?: color;
  shadow?: shadow;
}

export interface CardHeaderProps extends CardProps {
  floated?: floated;
}

export interface CardFooterProps {
  divider?: divider;
}
