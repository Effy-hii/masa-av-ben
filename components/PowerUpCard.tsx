import { ReactNode } from "react";

interface PowerUpCardProps {
  level: string;
  title: string;
  description: string;
  icon: ReactNode;
  color?: "cyan" | "navy" | "action";
}

export function PowerUpCard({ level, title, description, icon, color = "cyan" }: PowerUpCardProps) {
  const accentClass =
    color === "action"
      ? "bg-action text-action-foreground"
      : color === "navy"
        ? "bg-primary text-primary-foreground"
        : "bg-accent text-accent-foreground";

  return (
    <div className="group relative overflow-hidden rounded-3xl border-2 border-border bg-card p-7 shadow-card-elegant transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-glow">
      <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-all duration-500 group-hover:bg-accent/30" />
      <div className="relative">
        <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono-display text-xs ${accentClass}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
          {level}
        </div>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cyan text-primary shadow-glow">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-extrabold text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
