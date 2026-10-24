import { Mail } from "lucide-react";
import { site } from "@/data/config";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="container-mono py-24 md:py-32">
      <SectionHeading
        eyebrow="Say hello"
        title="Contact"
        description="Have a project in mind or just want to chat? I'd love to hear from you."
      />

      <div className="reveal mt-8 max-w-xl rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Reach out directly and I’ll get back to you as soon as possible.
        </p>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            <Mail className="h-4 w-4" />
            Gmail
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ihsanfadilah980@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Gmail
          </a>
        </div>
      </div>
    </section>
  );
}
