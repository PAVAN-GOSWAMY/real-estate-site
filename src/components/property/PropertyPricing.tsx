import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface ConfigItem {
  type: string;
  area: string;
  price: string;
  status: string;
}

interface PropertyPricingProps {
  configurations: ConfigItem[];
}

export function PropertyPricing({ configurations }: PropertyPricingProps) {
  if (!configurations || configurations.length === 0) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">Pricing & Configurations</h3>
      <div className="rounded-xl border border-border/50 overflow-hidden bg-background">
        <Table>
          <TableHeader className="bg-surface">
            <TableRow>
              <TableHead className="font-semibold text-primary">Configuration</TableHead>
              <TableHead className="font-semibold text-primary">Super Area</TableHead>
              <TableHead className="font-semibold text-primary">Starting Price</TableHead>
              <TableHead className="font-semibold text-primary text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {configurations.map((config, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{config.type}</TableCell>
                <TableCell>{config.area}</TableCell>
                <TableCell className="font-bold text-foreground">{config.price}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Request Quote
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
