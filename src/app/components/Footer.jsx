"use client"

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer  z-10 border-slate-200 border-t
      text-white">
      <div className="container p-12 flex justify-between">
      <motion.div
          className="md:w-[180px] w-[90px] md:h-16 h-8 relative"
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
        <p className="text-slate-300 md:text-[20px] text-[12px] text-right">All rights reserved ©2024 natsudev.com</p>
      </div>
    </footer>
  );
};

export default Footer;
