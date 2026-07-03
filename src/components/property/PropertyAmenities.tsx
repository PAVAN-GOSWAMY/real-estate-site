import { 
  Waves, Dumbbell, ShieldCheck, TreePine, 
  Gamepad2, Coffee, Utensils, Car, Home,
  Wifi, Snowflake, Video
} from "lucide-react";

interface AmenityGroup {
  category: string;
  items: { name: string; iconKey: string }[];
}

interface PropertyAmenitiesProps {
  groups: AmenityGroup[];
}

const iconMap: Record<string, any> = {
  pool: Waves,
  gym: Dumbbell,
  security: ShieldCheck,
  park: TreePine,
  sports: Gamepad2,
  clubhouse: Coffee,
  dining: Utensils,
  parking: Car,
  smart: Home,
  wifi: Wifi,
  ac: Snowflake,
  theatre: Video,
  yoga: TreePine, // fallback
  concierge: ShieldCheck, // fallback
  default: Home
};

export function PropertyAmenities({ groups }: PropertyAmenitiesProps) {
  if (!groups || groups.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">World-Class Amenities</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((group, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="font-semibold text-lg text-primary border-b border-border/50 pb-2">{group.category}</h4>
            <div className="grid grid-cols-2 gap-4">
              {group.items.map((item, itemIdx) => {
                const Icon = iconMap[item.iconKey] || iconMap.default;
                return (
                  <div key={itemIdx} className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 rounded-lg bg-surface shrink-0">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{item.name}</span>
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
