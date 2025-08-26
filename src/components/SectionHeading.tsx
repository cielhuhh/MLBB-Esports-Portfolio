"use client";

export function SectionHeading({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-brand-50 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/60">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}
