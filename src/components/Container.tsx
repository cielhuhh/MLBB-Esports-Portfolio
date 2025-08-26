"use client";
import clsx from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1200px] px-4", className)}>
      {children}
    </div>
  );
}
