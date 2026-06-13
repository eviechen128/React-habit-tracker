import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost-destructive";

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
        getVariantStyles(variant),
        className,
      )}
    />
  );
}

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case "primary":
      return "bg-emerald-400 text-emerald-950 hover:bg-emerald-300";
    case "secondary":
      return "border border-emerald-800/70 bg-emerald-950 hover:bg-emerald-900 text-emerald-100";
    case "ghost-destructive":
      return "hover:bg-rose-950 text-rose-400 hover:text-rose-100";
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
