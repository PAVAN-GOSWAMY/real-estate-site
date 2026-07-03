import * as React from "react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------
// 1. Container Wrapper
// Centralizes horizontal padding and maximum width boundaries
// ----------------------------------------------------------------------
export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("container mx-auto px-4 md:px-8", className)} {...props}>
      {children}
    </div>
  )
);
Container.displayName = "Container";

// ----------------------------------------------------------------------
// 2. MaxWidth Wrapper
// Used for restricting text or content width to an optimal reading length
// ----------------------------------------------------------------------
export const MaxWidth = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mx-auto max-w-7xl", className)} {...props}>
      {children}
    </div>
  )
);
MaxWidth.displayName = "MaxWidth";

// ----------------------------------------------------------------------
// 3. Section Wrapper
// Implements consistent vertical rhythm/spacing for page sections
// ----------------------------------------------------------------------
export const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => (
    <section ref={ref} className={cn("py-16 md:py-24", className)} {...props}>
      {children}
    </section>
  )
);
Section.displayName = "Section";

// ----------------------------------------------------------------------
// 4. PageWrapper
// Main layout wrapper handling minimum height to push footer to bottom
// ----------------------------------------------------------------------
export const PageWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <main ref={ref} className={cn("flex-1 w-full min-h-screen bg-background text-foreground", className)} {...props}>
      {children}
    </main>
  )
);
PageWrapper.displayName = "PageWrapper";

// ----------------------------------------------------------------------
// 5. SectionHeader
// Semantic header structures for typography alignment
// ----------------------------------------------------------------------
export const SectionHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-12 md:mb-16", className)} {...props}>
      {children}
    </div>
  )
);
SectionHeader.displayName = "SectionHeader";

// ----------------------------------------------------------------------
// 6. PageHeader
// Semantic header structures for top-level pages
// ----------------------------------------------------------------------
export const PageHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("bg-primary py-12 md:py-20", className)} {...props}>
      <Container>
        {children}
      </Container>
    </div>
  )
);
PageHeader.displayName = "PageHeader";
