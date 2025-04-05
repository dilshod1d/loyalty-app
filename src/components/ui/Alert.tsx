import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"; // Example icons

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground", // Generic, might not be used often here
        destructive:
          "border-red-400/50 text-red-700 dark:border-red-400 [&>svg]:text-red-700 bg-red-100",
        success:
          "border-green-400/50 text-green-700 dark:border-green-400 [&>svg]:text-green-700 bg-green-100",
        warning:
          "border-accent-border/50 text-accent-text dark:border-accent-border [&>svg]:text-accent-text bg-accent-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-bold leading-none tracking-tight", className)} // Changed font-medium to font-bold
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

// Helper to get icon based on variant
const getIcon = (variant: VariantProps<typeof alertVariants>["variant"]) => {
  switch (variant) {
    case "destructive":
      return <XCircle className="h-4 w-4" />;
    case "success":
      return <CheckCircle className="h-4 w-4" />;
    case "warning":
      return <Info className="h-4 w-4" />;
    default:
      return <AlertCircle className="h-4 w-4" />;
  }
};

export { Alert, AlertTitle, AlertDescription, getIcon };
