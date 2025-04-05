import React from "react";
import { Slot } from "@radix-ui/react-slot"; // Useful for composition
import { cva, type VariantProps } from "class-variance-authority"; // For variant styling
import { cn } from "@/lib/utils"; // Assumes you have a cn utility (see below)

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md",
  {
    variants: {
      variant: {
        default:
          "bg-primary-500 text-white hover:bg-primary-hover ring focus-visible:ring-primary",
        secondary:
          "bg-secondary-500 text-white hover:bg-secondary-hover focus-visible:ring-secondary",
        outline:
          "border border-primary text-primary-500 bg-white hover:bg-primary-500/10 focus-visible:ring-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary-500 underline-offset-4 hover:underline",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
