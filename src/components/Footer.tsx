import { site } from "@/data/config";

export default function Footer() {
  return (
    <footer className="hairline">
      <div className="container-mono py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
