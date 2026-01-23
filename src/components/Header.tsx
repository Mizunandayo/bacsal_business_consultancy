"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const pathname = usePathname();
  const router = useRouter();


  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track current path
  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services"},
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];



  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link on the same page or navigating to home with hash
    if (href.includes('#')) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const basePath = href.split('#')[0] || '/';
      
      // If we're already on the target page, just scroll
      if (pathname === basePath || (pathname === '/' && basePath === '/')) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the page first, then scroll
        router.push(href);
      }
      setActiveLink(href);
    } else {
      setActiveLink(href);
    }
  };



  return (
    <header 
      className="fixed top-0 z-50 w-full transition-all duration-500 ease-out bg-transparent"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">


        {/* Desktop Navigation - Centered pill style */}
        <nav className="hidden lg:flex items-center">
          <div className={`gap-15 flex items-center  rounded-full px-2 py-1 transition-all duration-300 ${
            scrolled ? "bg-zinc-100/80" : "bg-white/90 "
          }`}>
                    {/* Logo */}
        <Link href="/" className="relative flex items-center group">
          <div className="relative overflow-hidden rounded-full">
            <Image
              src="/bacsallogo.png"
              alt="Bacsal Business Consultancy"
              width={140}
              height={60}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>


            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-white bg-[#1B6174] shadow-lg shadow-[#1B6174]/25"
                    : scrolled
                    ? "text-zinc-600 hover:text-[#1B6174] hover:bg-zinc-200/50"
                    : "text-zinc-700 hover:text-[#1B6174] hover:bg-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group relative overflow-hidden rounded-full bg-[#1B6174] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#1B6174]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#1B6174]/30 hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2d8a9e] to-[#1B6174] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`relative flex h-12 w-12 items-center justify-center rounded-xl lg:hidden transition-all duration-300 ${
            scrolled ? "bg-zinc-100 hover:bg-zinc-200" : "bg-white/20 backdrop-blur-md hover:bg-white/40"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-zinc-800 rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-0.5 bg-zinc-800 rounded-full transition-all duration-300 origin-center ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Slide down */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      }`}>
        <nav className="bg-white/95 backdrop-blur-xl border-t border-zinc-200/50 px-6 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveLink(link.href);
                }}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-[#1B6174] text-white shadow-lg shadow-[#1B6174]/20"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-[#1B6174]"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                {activeLink === link.href && (
                  <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-zinc-200">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#1B6174] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#1B6174]/25 transition-all duration-300 hover:bg-[#2d8a9e]"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
