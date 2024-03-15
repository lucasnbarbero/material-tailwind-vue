import avatarBorderColor from "./avatarBorderColor";

export const avatar = {
  base: {
    initial: {
      display: "inline-block",
      position: "relavite",
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    withBorder: {
      border: "border-2",
    },
  },
  sizes: {
    xs: {
      width: "w-6",
      height: "h-6",
      borderRadius: "rounded-md",
    },
    sm: {
      width: "w-9",
      height: "h-9",
      borderRadius: "rounded-md",
    },
    md: {
      width: "w-12",
      height: "w-12",
      borderRadius: "rounded-lg",
    },
    lg: {
      width: "w-[58px]",
      height: "h-[58px]",
      borderRadius: "rounded-lg",
    },
    xl: {
      width: "w-[74px]",
      height: "h-[74px]",
      borderRadius: "rounded-xl",
    },
    xxl: {
      width: "w-[110px]",
      height: "h-[110px]",
      borderRadius: "rounded-2xl",
    },
  },
  variants: {
    rounded: {},
    square: {
      borderRadius: "!rounded-none",
    },
    circular: {
      borderRadius: "!rounded-full",
    },
  },
  borderColor: avatarBorderColor,
};

export default avatar;
