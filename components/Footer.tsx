"use client";

import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t border-border bg-background">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-center text-foreground-secondary">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
