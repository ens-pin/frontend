"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navLinks = [
  { title: "About Us", path: "#aboutus" },
  { title: "Developer", path: "#developer" },
  { title: "Contact", path: "#contact" },
  { title: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="z-50 fixed flex justify-center w-full text-white font-bold">
      <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[800px] mx-auto">
        <div>
        <Image
          src="/4.svg"
          alt="logo"
          width={80}
          height={40}
          priority
        />
        </div>
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex">
            <Link href="/get-started">
            <button className="ml-4 px-6 py-2 rounded-full bg-white text-black hover:bg-white/80 transition">
                Get Started
            </button>
            </Link>
        </div>
      </div>

      

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
      >
        {nav ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
      </div>
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav} className="text-5xl">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
