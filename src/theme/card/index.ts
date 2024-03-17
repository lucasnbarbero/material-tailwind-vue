import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

const card = {
  base: {
    initial: {
      position: "relative",
      display: "flex",
      flexDirection: "flex-col",
      backgroundClip: "bg-clip-border",
      borderRadius: "rounded-xl",
    },
    shadow: {
      boxShadow: "shadow-md",
    },
  },
  variants: {
    filled: cardFilled,
    gradient: cardGradient,
  },
};

export default card;
