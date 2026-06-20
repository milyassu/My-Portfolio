"use client";

import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkedinIcon } from "@hugeicons/core-free-icons";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="font-bold text-lg text-foreground">
          {profile.name}
        </h3>
        <p className="text-muted-foreground mt-2 max-w-xl mx-auto text-sm leading-relaxed">
          {profile.tagline}
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-5 mt-6">
          <a
            href="https://www.linkedin.com/in/milyassu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <HugeiconsIcon icon={LinkedinIcon} className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/milyassu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <HugeiconsIcon icon={GithubIcon} className="h-5 w-5" />
          </a>

          <a
            href="mailto:muhammadilyas12114@gmail.com"
            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}