import { MapPin, Train, GraduationCap, Hospital, ShoppingBag, Briefcase, Car } from "lucide-react";

interface LocationGroup {
  category: string;
  items: { name: string; distance: string; iconKey: string }[];
}

interface PropertyLocationAdvantagesProps {
  advantages: LocationGroup[];
}

const locationIconMap: Record<string, any> = {
  metro: Train,
  school: GraduationCap,
  hospital: Hospital,
  mall: ShoppingBag,
  work: Briefcase,
  road: Car,
  default: MapPin
};

export function PropertyLocationAdvantages({ advantages }: PropertyLocationAdvantagesProps) {
  if (!advantages || advantages.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">Location Advantages</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {advantages.map((group, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="font-semibold text-lg text-primary border-b border-border/50 pb-2">{group.category}</h4>
            <div className="space-y-3">
              {group.items.map((item, itemIdx) => {
                const Icon = locationIconMap[item.iconKey] || locationIconMap.default;
                return (
                  <div key={itemIdx} className="flex justify-between items-center bg-surface p-3 rounded-lg border border-border/50">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-accent" />
                      <span className="font-medium text-foreground text-sm">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                      {item.distance}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
