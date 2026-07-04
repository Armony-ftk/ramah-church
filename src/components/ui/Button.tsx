import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: ComponentProps<typeof Link>["href"];
  };

type ButtonElementProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D63D2] disabled:pointer-events-none disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#6A3FB5] text-[#FFFFFF] hover:bg-[#8D63D2]",
  secondary:
    "border border-[#6A3FB5] bg-transparent text-[#FFFFFF] hover:border-[#8D63D2] hover:bg-[#8D63D2]/10",
};

function getButtonClasses(variant: ButtonVariant, className?: string) {
  return [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonProps) {
  const buttonClasses = getButtonClasses(
    props.variant ?? "primary",
    props.className,
  );

  if (props.href !== undefined) {
    const {
      href,
      children: linkChildren,
      className: omittedClassName,
      variant: omittedVariant,
      ...linkProps
    } = props;
    void omittedClassName;
    void omittedVariant;

    return (
      <Link href={href} className={buttonClasses} {...linkProps}>
        {linkChildren}
      </Link>
    );
  }

  const {
    children: buttonChildren,
    className: omittedClassName,
    variant: omittedVariant,
    type = "button",
    ...buttonProps
  } = props;
  void omittedClassName;
  void omittedVariant;

  return (
    <button type={type} className={buttonClasses} {...buttonProps}>
      {buttonChildren}
    </button>
  );
}
