import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">>,
    HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-apple-accent text-white hover:opacity-90",
    secondary: "bg-apple-bg text-apple-text hover:bg-gray-200",
    ghost: "bg-transparent text-apple-text hover:bg-gray-100",
    outline: "bg-transparent border border-gray-200 text-apple-text hover:bg-gray-50",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-5 text-base",
    lg: "h-12 px-8 text-lg font-medium",
    icon: "h-10 w-10 flex items-center justify-center p-0",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
