"use client";

import { personalInfo } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-600 text-sm text-center">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
