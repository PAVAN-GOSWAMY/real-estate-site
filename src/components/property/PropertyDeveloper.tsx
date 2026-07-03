import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Calendar, Trophy, ArrowRight } from "lucide-react";

interface DeveloperProfile {
  name: string;
  logo: string;
  experience: string;
  delivered: string;
  description: string;
}

interface PropertyDeveloperProps {
  profile: DeveloperProfile;
}

export function PropertyDeveloper({ profile }: PropertyDeveloperProps) {
  if (!profile) return null;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold text-primary">About the Developer</h3>
      
      <div className="bg-surface rounded-2xl p-6 border border-border/50">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 shrink-0 bg-surface rounded-xl border border-border overflow-hidden p-2">
            <Image 
              src={profile.logo} 
              alt={profile.name} 
              fill 
              className="object-contain p-2"
            />
          </div>
          
          <div className="flex-1 space-y-4">
            <h4 className="font-heading text-xl font-bold text-foreground">{profile.name}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{profile.description}</p>
            
            <div className="flex flex-wrap gap-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
                  <p className="font-semibold text-foreground">{profile.experience}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Delivered</p>
                  <p className="font-semibold text-foreground">{profile.delivered}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Status</p>
                  <p className="font-semibold text-foreground">Premium Builder</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <Link href={`/builders/${profile.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                <Button variant="link" className="text-accent hover:text-accent-foreground p-0 h-auto font-semibold">
                  View All Projects by {profile.name} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
