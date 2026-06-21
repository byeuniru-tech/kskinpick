import type { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-[92%] max-w-screen-2xl mx-auto ${className}`}>
      {children}
    </div>
  );
}