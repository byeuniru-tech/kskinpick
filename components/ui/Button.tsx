import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-[#e84d67] text-white hover:opacity-90"
      : "border border-[#e84d67] bg-white text-[#e84d67] hover:bg-[#fff5f7]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${styles}`}
    >
      {icon}
      {children}
    </Link>
  );
}