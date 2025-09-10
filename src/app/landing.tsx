"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="text-center md:text-left p-8 md:pl-16 lg:pl-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Hi, I'm a Software Developer passionate about creating amazing web
          experiences
        </p>

        <nav className="flex flex-wrap justify-center md:justify-start gap-4 ">
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
                        bg-gray-700/50 text-gray-200 shadow-md hover:shadow-lg
                        transform hover:-translate-y-1
                        transition-all duration-200
                        border border-gray-600
                        hover:border-blue-500
                        hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
