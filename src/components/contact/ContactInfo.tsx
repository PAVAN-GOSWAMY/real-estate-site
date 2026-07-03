import * as React from "react";
import { contactInfo, businessHours } from "@/data/contact";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-8">Contact Information</h2>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex gap-4 p-6 bg-white rounded-2xl border border-border/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Office Address</h4>
              <p className="text-muted-foreground leading-relaxed">{contactInfo.address}</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-6 bg-white rounded-2xl border border-border/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Phone & WhatsApp</h4>
              <p className="text-muted-foreground">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl border border-border/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Email Address</h4>
              <p className="text-muted-foreground">{contactInfo.email}</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-white rounded-2xl border border-border/50">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-2">Business Hours</h4>
              <ul className="space-y-2">
                {businessHours.map((bh, idx) => (
                  <li key={idx} className="text-muted-foreground flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                    <span>{bh.days}:</span>
                    <span className="font-medium text-foreground">{bh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-border/50 aspect-video md:aspect-[4/3] w-full relative bg-muted">
        <iframe 
          src={contactInfo.googleMapsUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
      </div>
    </div>
  );
}
