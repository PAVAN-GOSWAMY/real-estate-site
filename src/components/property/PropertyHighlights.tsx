import { CheckCircle2 } from "lucide-react";

interface PropertyHighlightsProps {
  highlights: string[];
}

export function PropertyHighlights({ highlights }: PropertyHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-2xl font-bold text-primary">Project Highlights</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border/50">
            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
