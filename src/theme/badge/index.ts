import badgeColors from "./badgeColors";

export const badge = {
  base: {
    container: {
      position: "relative",
      display: "inline-flex",
    },
    badge: {
      initial: {
        position: "absolute",
        rounded: "rounded-full",
        minWidth: "min-w-[12px]",
        minHeight: "min-h-[12px]",
        display: "grid",
        fontWeidth: "font-medium",
        fontSize: "text-xs",
        paddingY: "py-1",
        paddingX: "px-1",
        content: "content-['']",
        leading: "leading-none",
        placeItems: "place-items-center",
      },
      withBorder: {},
      withContent: {
        minWidth: "min-w-[24px]",
        minHeight: "min-h-[24px]",
      },
    },
  },
  placements: {
    "top-start": {
      square: {},
      circular: {
        top: "top-[4%]",
        left: "left-[4%]",
        translateX: "-translate-x-2/4",
        translateY: "-translate-y-2/4",
      },
    },
    "top-end": {
      square: {},
      circular: {
        top: "top-[4%]",
        left: "right-[4%]",
        translateX: "translate-x-2/4",
        translateY: "-translate-y-2/4",
      },
    },
    "bottom-start": {
      square: {},
      circular: {
        bottom: "bottom-[4%]",
        left: "left-[2%]",
        translateX: "-translate-x-2/4",
        translateY: "translate-y-2/4",
      },
    },
    "bottom-end": {
      square: {},
      circular: {
        bottom: "bottom-[4%]",
        left: "right-[2%]",
        translateX: "translate-x-2/4",
        translateY: "translate-y-2/4",
      },
    },
  },
  colors: badgeColors,
};

export default badge;
