"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { business } from "../data/business";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-green-200 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between px-10 py-4">
        <Link href="/" className="text-2xl font-bold text-green-900">
          {business.name}
        </Link>

        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-green-200 text-green-900 transition hover:bg-green-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <div className="flex flex-col gap-1">
                <span className="block h-0.5 w-5 bg-green-900"></span>
                <span className="block h-0.5 w-5 bg-green-900"></span>
                <span className="block h-0.5 w-5 bg-green-900"></span>
              </div>
            )}
          </button>

          <nav
            className={`absolute right-0 mt-3 w-48 rounded-xl border border-green-200 bg-white p-4 shadow-lg transition-all duration-300 ease-out ${
              isOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4 text-sm font-medium text-green-900">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative w-fit transition hover:text-green-700 ${
                      isActive ? "font-semibold text-green-900" : ""
                    }`}
                  >
                    {link.label}

                    {isActive && (
                      <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-green-900"></span>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}