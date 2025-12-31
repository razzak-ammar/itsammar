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

  return (
    <div className="w-full py-6 px-4">
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="font-bold text-2xl">
          it&apos;s<span className="text-teal-500">ammar</span>
        </h1>
        <button
          onClick={toggleMobileMenu}
          className="p-2 hover:text-teal-500 transition-all duration-300 menu-icon-rotate"
          aria-label="Toggle menu"
        >
          <div className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-950/95 backdrop-blur-sm z-50 md:hidden mobile-menu-overlay">
          <div className="flex flex-col h-full mobile-menu-content">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800 mobile-menu-item">
              <h1 className="font-bold text-2xl">
                it&apos;s<span className="text-teal-500">ammar</span>
              </h1>
              <button
                onClick={closeMobileMenu}
                className="p-2 hover:text-teal-500 transition-all duration-300 hover:rotate-90"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col flex-1 p-6 space-y-6">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl hover:text-teal-500 transition-all duration-300 py-2 mobile-menu-item hover:translate-x-2"
              >
                Home
              </Link>
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl hover:text-teal-500 transition-all duration-300 py-2 mobile-menu-item hover:translate-x-2"
              >
                About
              </Link>
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl hover:text-teal-500 transition-all duration-300 py-2 mobile-menu-item hover:translate-x-2"
              >
                Blog
              </Link>
              {/* <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl hover:text-teal-500 transition-all duration-300 py-2 mobile-menu-item hover:translate-x-2"
              >
                Research
              </Link> */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-xl hover:text-teal-500 transition-all duration-300 py-2 mobile-menu-item hover:translate-x-2"
              >
                Projects
              </Link>

              {/* Social Icons */}
              <div className="flex gap-6 pt-6 border-t border-gray-800 mobile-menu-item">
                <Link
                  href="https://github.com/itsammar-dev"
                  onClick={closeMobileMenu}
                  className="hover:text-teal-500 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ammar-razzak/"
                  onClick={closeMobileMenu}
                  className="hover:text-teal-500 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="https://medium.com/@itsammar"
                  onClick={closeMobileMenu}
                  className="hover:text-teal-500 transition-all duration-300 hover:scale-110"
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
      <div className="hidden md:flex justify-between items-center">
        <h1 className="font-bold text-3xl mr-8">
          it&apos;s<span className="text-teal-500">ammar</span>
        </h1>
        <div className="navbar-items flex gap-4 text-lg">
          <div className="navbar-item">
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              Home
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              About
            </Link>
          </div>
          <div className="navbar-item">
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              Blog
            </Link>
          </div>
          {/* <div className="navbar-item">
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              Research
            </Link>
          </div> */}
          <div className="navbar-item">
            <Link href="/" className="hover:text-teal-500 transition-colors duration-300">
              Projects
            </Link>
          </div>
        </div>
        <div className="navbar-items flex gap-4 text-lg">
          {/* Social Icons */}
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://github.com/itsammar-dev"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              <Github /> <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://www.linkedin.com/in/ammar-razzak/"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              <Linkedin /> <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="navbar-item cursor-pointer">
            <Link
              href="https://medium.com/@itsammar"
              className="hover:text-teal-500 transition-colors duration-300"
            >
              <BookText /> <span className="sr-only">Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
