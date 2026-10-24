import { ArrowDownToLine } from "lucide-react";
import { site, socials } from "@/data/config";

export default function Hero() {
  return (
    <section id="top" className="container-mono pt-24 pb-32 md:pt-36 md:pb-40">
      <p className="reveal text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
        Available for work
      </p>
      <h1 className="reveal text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
        {site.name}
        <span className="block text-muted-foreground font-normal">
          {site.role}.
        </span>
      </h1>
      <p className="reveal max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
        {site.bio}
      </p>
      <div className="reveal flex flex-wrap items-center gap-3">
        <a
          href={site.cvUrl}
          download
          className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border text-sm font-medium hover:bg-accent transition-colors"
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download CV
        </a>

        <div className="flex items-center gap-2">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noreferrer noopener"
              className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
