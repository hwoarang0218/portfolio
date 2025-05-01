"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Hi, I'm a Software Developer passionate about creating amazing web
          experiences
        </p>

        <nav className="flex flex-wrap justify-center gap-4">
          {[
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
            { href: "/about", label: "About" },
            { href: "/resume", label: "Resume" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-3 text-lg font-medium rounded-lg 
                        bg-white shadow-md hover:shadow-lg
                        transform hover:-translate-y-1
                        transition-all duration-200
                        border border-gray-200
                        hover:border-blue-500
                        text-gray-800 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
