import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {kicker && (
        <p className="text-sm text-gold-600 dark:text-gold-400">{kicker}</p>
      )}
      <h2 className="mt-2 font-display text-3xl text-navy-900 dark:text-mist-50 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-ink-500 dark:text-mist-100/70">{description}</p>
      )}
    </div>
  );
}
