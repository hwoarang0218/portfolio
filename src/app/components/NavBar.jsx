"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DETAIL = {
  name: "MARK LESTER DE GUZMAN",
  href: "/",
  email: "marklester0218@gmail.com",
};

export const NavBar = () => {
  const link = [
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Interests", href: "/interests" },
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about" },
  ];

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        boxShadow:
          theme == "light"
            ? "0px 0px 10px rgba(0,0,0,0.1)"
            : "0px 0px 10px rgba(255,255,255,0.1)",
      }}
      className="print:hidden flex h-16 w-full shrink-0 items-center px-4 md:px-6 "
    >
      <Link
        className="text-zinc-500 hover:text-zinc-800 transition-colors "
        href="/projects"
      >
        {DETAIL.name}
      </Link>

      <div className="ml-auto hidden lg:flex gap-6">
        {link.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-800 transition-colors  "
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
        <button onClick={toggleMode}>
          {theme.color == "#fff" ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
