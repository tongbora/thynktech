"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Scroll() {
  // 1️⃣ Hook to track scroll progress
  const { scrollYProgress } = useScroll();

  // 2️⃣ Spring it for smoother transitions
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <div className="fixed top-0 left-0 w-full z-100">
      {/* 3️⃣ motion.div to reflect scaleX */}
      <motion.div
        style={{ scaleX }}
        className="bg-[linear-gradient(to_right,_red,_orange,_yellow,_green,_blue,_indigo,_violet)] h-2 origin-left"
      />
    </div>
  );
}
