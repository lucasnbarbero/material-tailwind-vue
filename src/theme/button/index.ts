import buttonFilled from "./buttonFilled";
import buttonGradient from "./buttonGradient";
import buttonOutlined from "./buttonOutlined";
import buttonText from "./buttonText";

const button = {
  base: {
    initial: {
      verticalAlign: "align-middle",
      userSelect: "select-none",
      fontWeight: "font-bold",
      textAlign: "text-center",
      textTransform: "uppercase",
      transition: "transition-all",
      borderRadius: "rounded-lg",
      disabled:
        "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
    },
    fullWidth: {
      display: "block",
      width: "w-full",
    },
  },
  sizes: {
    sm: {
      fontSize: "text-sm",
      paddingY: "py-2",
      paddingX: "px-4",
    },
    md: {
      fontSize: "text-sm",
      paddingY: "py-3",
      paddingX: "px-6",
    },
    lg: {
      fontSize: "text-base",
      paddingY: "py-3.5",
      paddingX: "px-7",
    },
  },
  variants: {
    filled: buttonFilled,
    gradient: buttonGradient,
    outlined: buttonOutlined,
    text: buttonText,
  },
};

export default button;
