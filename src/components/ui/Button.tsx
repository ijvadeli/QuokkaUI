import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(... inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const buttonVariants = cva("px-4 rounded-full tracking-tight", {
  variants: {
    variant: {
      default: "bg-gray-200 text-black hover:bg-gray-300",
      primary: "bg-blue-500 text-white hover:bg-blue-400",
      outline: "border border-blue-500 text-blue-500 hover:bg-blue-400 hover:text-white",
      neutral: "border border-black text-black hover:bg-black hover:text-white",
      info: "bg-green-500 text-white",
    },
    size: {
      default: "h-10",
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
