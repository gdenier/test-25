import { makeTheme } from "dripsy";

import { textSizes } from "./typography";
import { lightColors } from "./colors";

export const theme = makeTheme({
  fontSizes: [],
  colors: {
    ...lightColors,
    modes: {
      light: lightColors,
    },
  },
  buttons: {
    primary: {
      bg: "black",
      borderRadius: 999,
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      paddingVertical: 12,
      text: {
        color: "white",
      },
    },
  },
  text: {
    "text-xs": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-xs"],
    },
    "text-sm": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-sm"],
    },
    // `body` is the default text variant in Dripsy
    body: {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-base"],
    },
    "text-base": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-base"],
    },
    "text-lg": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-lg"],
    },
    "text-xl": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-xl"],
    },
    "text-2xl": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-2xl"],
    },
    "text-3xl": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-3xl"],
    },
    "text-4xl": {
      fontWeight: "default",
      color: "slate.950",
      ...textSizes["text-4xl"],
    },
  },
});

type MyTheme = typeof theme;

declare module "dripsy" {
  interface DripsyCustomTheme extends MyTheme {}
}
