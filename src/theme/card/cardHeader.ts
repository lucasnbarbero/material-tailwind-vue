import cardFilled from "./cardFilled";
import cardGradient from "./cardGradient";

const cardHeader = {
  base: {
    initial: {
      position: "relative",
      backgroundClip: "bg-clip-border",
      mt: "mt-4",
      mx: "mx-4",
      borderRadius: "rounded-xl",
      overflow: "overflow-hidden",
    },
    shadow: {
      boxShadow: "shadow-lg",
    },
    floated: {
      mt: "-mt-6",
    },
  },
  variants: {
    filled: cardFilled,
    gradient: cardGradient,
  },
};

export default cardHeader;
