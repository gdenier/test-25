import { ComponentProps } from "react";
import { Text as DripsyText, Theme } from "dripsy";
import { tw as tailwind } from "../../../theme/tailwind";

export type TextVariant = keyof Theme["text"];

export type TextProps = { tw?: string; variant?: TextVariant } & Omit<
  ComponentProps<typeof DripsyText>,
  "variant"
>;

function Text({ tw, sx, variant, ...props }: TextProps) {
  return (
    <DripsyText
      sx={{ ...sx, ...tailwind.style(tw) }}
      variant={variant}
      {...props}
    />
  );
}

export { Text };
