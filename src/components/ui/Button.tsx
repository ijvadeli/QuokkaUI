import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(... inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const buttonVariants = cva("rounded-full tracking-tight hover:cursor-pointer", {
  variants: {
    variant: {
      default: "bg-gray-200 text-black hover:bg-gray-300",
      neutral: "bg-black text-white hover:text-gray-200",
      primary: "bg-blue-500 text-white hover:bg-blue-400",
      secondary: "bg-gray-200 text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500",
      accent: "bg-purple-500 text-white hover:bg-purple-400",
      info: "bg-cyan-500 text-white hover:bg-cyan-400",
      success: "bg-green-500 text-white hover:bg-green-400",
      warning: "bg-yellow-500 text-white hover:bg-yellow-400",
      error: "bg-red-500 text-white hover:bg-red-400",
    },
    size: {
      default: "px-4 py-2",
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
