"use client";

import Link from "next/link";
import { Github, Linkedin, BookText, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Blog", href: "/#blog" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-gray-950 px-4 py-5 md:bg-gray-950/70 md:backdrop-blur-xl">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="font-bold text-2xl">
          it&apos;s<span className="text-[#58a9a0]">ammar</span>
        </h1>
        <button
          onClick={toggleMobileMenu}
          className="menu-icon-rotate p-2 transition-all duration-300 hover:text-[#b99a5e]"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay fixed inset-0 z-50 bg-gray-950 md:hidden">
          <div className="mobile-menu-content relative z-[60] flex h-full flex-col bg-gray-950">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800 mobile-menu-item">
              <h1 className="font-bold text-2xl">
                it&apos;s<span className="text-[#58a9a0]">ammar</span>
              </h1>
              <button
                onClick={closeMobileMenu}
                className="p-2 transition-all duration-300 hover:rotate-90 hover:text-[#b99a5e]"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col flex-1 p-6 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="mobile-menu-item py-2 text-xl transition-all duration-300 hover:translate-x-2 hover:text-[#b99a5e]"
                >
                  {item.label}
                </Link>
              ))}

              {/* Social Icons */}
              <div className="flex gap-6 pt-6 border-t border-gray-800 mobile-menu-item">
                <Link
                  href="https://github.com/itsammar-dev"
                  onClick={closeMobileMenu}
                  className="transition-all duration-300 hover:scale-110 hover:text-[#b99a5e]"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ammar-razzak/"
                  onClick={closeMobileMenu}
                  className="transition-all duration-300 hover:scale-110 hover:text-[#b99a5e]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://medium.com/@itsammar"
                  onClick={closeMobileMenu}
                  className="transition-all duration-300 hover:scale-110 hover:text-[#b99a5e]"
                  aria-label="Medium"
                >
                  <BookText size={24} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between md:flex">
        <Link href="/#home" className="mr-8 text-3xl font-bold">
          it&apos;s<span className="text-[#58a9a0]">ammar</span>
        </Link>
        <div className="navbar-items flex gap-4 text-lg">
          {navItems.map((item) => (
            <div className="navbar-item" key={item.href}>
              <Link href={item.href} className="transition-colors duration-300 hover:text-[#b99a5e]">
                {item.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="navbar-items flex gap-4 text-lg">
          {/* Social Icons */}
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://github.com/itsammar-dev"
              className="transition-colors duration-300 hover:text-[#b99a5e]"
            >
              <Github /> <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/ammar-razzak/"
              className="transition-colors duration-300 hover:text-[#b99a5e]"
            >
              <Linkedin /> <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://medium.com/@itsammar"
              className="transition-colors duration-300 hover:text-[#b99a5e]"
            >
              <BookText /> <span className="sr-only">Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
