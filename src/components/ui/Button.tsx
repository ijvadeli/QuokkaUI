import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(... inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const buttonVariants = cva("rounded-full tracking-tight hover:cursor-pointer font-medium hover:opacity-90", {
  variants: {
    variant: {
      default: "bg-gray-200 text-black",
      neutral: "bg-black text-white",
      primary: "bg-blue-400",
      secondary: "bg-gray-200 text-blue-700",
      accent: "bg-purple-400",
      info: "bg-sky-400",
      success: "bg-green-400",
      warning: "bg-yellow-500",
      error: "bg-red-400",
    },
    size: {
      default: "px-4 py-2",
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-md",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      {...props}
      className={twMerge(buttonVariants({variant, size, className}))}
    />
  );
}
