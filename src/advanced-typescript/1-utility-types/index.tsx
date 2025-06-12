import React from "react";

// Define all allowed variants
const variantStyles = {
  default: "p-4 bg-gray-500",
  danger: "p-4 bg-red-500",
  success: "p-4 bg-green-500",
} as const;

// 🔸 Extract variant keys
type Variant = keyof typeof variantStyles;

// 🔸 Define base props for the button
type BaseButtonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

//  Pick: Create a minimal prop shape used in configs or stories
export type PickedProps = Pick<BaseButtonProps, "variant" | "className">;

//  Omit: Create a version of props without `variant`
export type WithoutVariant = Omit<BaseButtonProps, "variant">;

//  Partial: Make all props optional for builder/config mode
export type PartialButton = Partial<BaseButtonProps>;

//  Required: For validation/internal enforcement
export type StrictButton = Required<Pick<BaseButtonProps, "children">>;

//  Record: Enforce variant-to-class map with strict keys
const styles: Record<Variant, string> = variantStyles;

//  NonNullable: Ensure fallback for variant
export type NonNullableVariant = NonNullable<BaseButtonProps["variant"]>;

//  Exclude: Example of removing a deprecated variant
export type ActiveVariant = Exclude<Variant, "danger">;

//  Extract: Restrict to theme-safe variants
export type ThemedVariant = Extract<Variant, "default" | "success">;

//  ReturnType: Simulated factory returning button props
export const getDefaultProps = () => ({
  variant: "default" as Variant,
  onClick: () => console.log("Clicked"),
});
export type FactoryProps = ReturnType<typeof getDefaultProps>;

//  ThisType (very niche, shown for completion)
export type WithClassBuilder = {
  classList: string[];
  build(): string;
} & ThisType<WithClassBuilder>;

//  Component Definition
type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "default",
  className = "",
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  const variantClass = styles[variant];

  return (
    <button
      onClick={onClick}
      className={`${variantClass} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
