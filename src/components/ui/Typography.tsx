import type { ReactNode } from "react";
import { cva } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(... inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const typographyVariants = cva("font-semibold tracking-tight", {
    variants: {
        type: {
            h1: "text-4xl sm:text-5xl",
            h2: "text-3xl sm:text-4xl",
            h3: "text-2xl sm:text-3xl",
            h4: "text-xl sm:text-2xl",
            h5: "text-lg sm:text-xl",
            h6: "text-md sm:text-lg",
            p: "text-md font-normal tracking-normal"
        },
    },
    defaultVariants: {
        type: "p",
    },
})

const typographyElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
} as const;

type TypographyType = keyof typeof typographyElements;

type TypographyProps = {
  type?: TypographyType;
  children: ReactNode;
  className?: string;
};

export function Typography({
  type = "p",
  children,
  className,
}: TypographyProps) {
  const Component = typographyElements[type];

  return (
    <Component className={cn(typographyVariants({ type }), className)}>
      {children}
    </Component>
  );
}