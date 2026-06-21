"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on Escape key
  React.useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
      if (hash && window.location.pathname === "/") {
        e.preventDefault();
        const targetId = hash.replace("#", "");
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* ── Fixed header bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-sm min-[375px]:text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
          >
            Mohammad Ilyas Suud
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 rounded-md hover:bg-muted"
              aria-label="Toggle theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground transition-all" />
                )
              ) : (
                <div className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </nav>

          {/* Mobile: Theme + Hamburger buttons */}
          <div className="flex items-center gap-1.5 min-[375px]:gap-3 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 min-[375px]:h-9 min-[375px]:w-9 rounded-md hover:bg-muted"
              aria-label="Toggle theme"
            >
              {mounted ? (
                resolvedTheme === "dark" ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground" />
                )
              ) : (
                <div className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="h-8 w-8 min-[375px]:h-9 min-[375px]:w-9 rounded-md hover:bg-muted"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/*
        ── Mobile Menu Panel ──
        Rendered OUTSIDE <header> as its own fixed element.
        This avoids the iOS Safari / Android Chrome bug where backdrop-filter
        on a fixed ancestor creates an isolated stacking context that swallows
        touch events for all child elements.
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop — tap outside to close */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel — sits just below the header bar (~65px) */}
            <motion.nav
              key="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed top-[65px] left-0 right-0 z-40 border-b border-border/40 bg-background shadow-lg md:hidden"
            >
              <div className="flex flex-col px-6 py-5 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-3 text-base font-medium text-muted-foreground hover:text-foreground active:text-foreground transition-colors border-b border-border/40 last:border-0"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}