"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about-me" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-80 justify-center items-center w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  myFont text-lg transition-all duration-300 hover:scale-105 relative
                  ${
                    pathname === item.href
                      ? "text-(--golden)"
                      : "text-white hover:text-(--beigeCustom)"
                  }
                `}
              >
                {item.name}
                {/* Active indicator */}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-(--golden) rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
