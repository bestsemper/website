"use client";

import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-6 px-6 border-t" style={{ borderColor: 'var(--border)', background: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-center" style={{ color: 'var(--foreground-secondary)' }}>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
