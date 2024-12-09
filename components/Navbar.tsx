"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation"; // Import usePathname

const Links = [
  { href: "/", text: "Αρχική" },
  { href: "/about", text: "Ο κτηνίατρος" },
  { href: "/services", text: "Υπηρεσίες" },
  { href: "/cases", text: "Περιστατικά" },
  { href: "/blog", text: "Άρθρα" },
  { href: "/contact", text: "Επικοινωνία" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // To toggle the mobile menu
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto relative flex items-center justify-between px-4 md:px-6">
        {/* Logo on the left */}
        <div className="text-gray-100 text-lg font-bold">
          <Link href="/">
            <Image
              src="/logo.svg" // Path to your SVG in the public folder
              alt="Logo"
              width={50} // Adjust the width as needed
              height={50} // Adjust the height as needed
            />
          </Link>
        </div>

        {/* Centered Navigation Links for larger screens */}
        <div className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            {Links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`capitalize ${
                    pathname === link.href
                      ? "text-amber-300 font-semibold" // Active link style
                      : "text-gray-100 hover:text-amber-300" // Non-active link style
                  }`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu icon for mobile screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 focus:outline-none"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown, visible on small screens */}
        {isOpen && (
          <ul className="md:hidden absolute top-full left-0 w-full bg-background flex flex-col items-center space-y-4 py-4 px-4">
            {Links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`capitalize ${
                    pathname === link.href
                      ? "text-amber-300 font-semibold" // Active link style
                      : "text-gray-100 hover:text-amber-300" // Non-active link style
                  }`}
                  onClick={toggleMenu}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
