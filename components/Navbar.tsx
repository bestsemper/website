"use client";

import { useState, useEffect } from "react";
import { personalInfo } from "@/data/resume";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    
    // Apply theme by setting color-scheme on html element
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Apply theme by setting color-scheme on html element
    document.documentElement.style.colorScheme = newTheme;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{ background: 'var(--background)' }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <svg className="logo" viewBox="-20 -10 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle className="dot" cx="20.5" cy="15" r="2.5"/>
              <path
                d="M20.5 26V53C19.5 62.6666 15.1 81.1 5.49997 77.5C-6.50003 73 14.1347 46.4999 30.5673 44C30.5673 44 30.5 36 31.5 31C32.5 26 41.9 2 35.5 2C29.1 2 30.5673 16.5 30.5673 31C30.601 31.5 30 47 30 52C30 56.7434 37 20 45.5 23C50 26 42.5 34 37 36.5C38.5 47 46 61.6 52 44"
              />
              <path 
                className="stroke" 
                d="M20.5 26V53C19.5 62.6666 15.1 81.1 5.49997 77.5C-6.50003 73 14.1347 46.4999 30.5673 44C30.5673 44 30.5 36 31.5 31C32.5 26 41.9 2 35.5 2C29.1 2 30.5673 16.5 30.5673 31C30.601 31.5 30 47 30 52C30 56.7434 37 20 45.5 23C50 26 42.5 34 37 36.5C38.5 47 46 61.6 52 44"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setActiveLink(link)}
                  className="capitalize text-sm font-medium transition-colors"
                  style={{
                    color: activeLink === link 
                      ? 'var(--foreground)' 
                      : 'var(--foreground-secondary)'
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="transition-colors hover:opacity-70 cursor-pointer"
                style={{ color: 'var(--foreground-secondary)' }}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-70"
                style={{ color: 'var(--foreground-secondary)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-70"
                style={{ color: 'var(--foreground-secondary)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
