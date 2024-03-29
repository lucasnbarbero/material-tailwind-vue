import typographyColors from "./typographyColors";

const typography = {
  variants: {
    h1: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-5xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-tight",
    },
    h2: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-4xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-[1.3]",
    },
    h3: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-3xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-snug",
    },
    h4: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-2xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-snug",
    },
    h5: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-xl",
      fontWeight: "font-semibold",
      lineHeight: "leading-snug",
    },
    h6: {
      display: "block",
      fontSmoothing: "antialiased",
      letterSpacing: "tracking-normal",
      fontSize: "text-base",
      fontWeight: "font-semibold",
      lineHeight: "leading-relaxed",
    },
    lead: {
      display: "block",
      fontSmoothing: "antialiased",
      fontSize: "text-xl",
      fontWeight: "font-normal",
      lineHeight: "leading-relaxed",
    },
    paragraph: {
      display: "block",
      fontSmoothing: "antialiased",
      fontSize: "text-base",
      fontWeight: "font-normal",
      lineHeight: "leading-relaxed",
    },
    small: {
      display: "block",
      fontSmoothing: "antialiased",
      fontSize: "text-sm",
      fontWeight: "font-light",
      lineHeight: "leading-normal",
    },
  },
  colors: typographyColors,
};

export default typography;
