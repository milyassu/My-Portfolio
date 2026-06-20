"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/90
      backdrop-blur-md
      border-b
      border-slate-200
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >
        <Link
          href="/"
          className="
          text-xl
          font-bold
          text-slate-900
          "
        >
          Mohammad Ilyas Suud
        </Link>

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-slate-600
          "
        >
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}