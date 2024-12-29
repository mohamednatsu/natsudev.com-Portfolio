"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <motion.nav
      className="fixed mx-auto top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-100 shadow-lg border-b border-[#33353F]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex container lg:py-4 flex-wrap items-center md:justify-around justify-between lg:gap-[30rem] mx-auto px-4 py-2">
        {/* Logo with Animation */}
        <motion.div
          className="md:w-[190px] w-[90px] md:h-16 h-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <Image
              alt="logo"
              src="/images/2.png"
              layout="fill"
              quality={100}
              className="cursor-pointer md:w-[110px] md:h-16 h-8 w-[90px] "
            />
          
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="absolute border-b border-white top-[3.5rem] left-0 w-full shadow-lg bg-[#121212] md:hidden"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col p-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={[{ scale: 1.03 }]}
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-lg font-medium"
                >
                  <Link href={link.path}>{link.title}</Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
