"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        After getting enrolled in my bachelor study in{" "}
        <span className='font-medium'>BSc.CSIT</span>, I decided to move for the
        carrier on Frontend. I started learning and doing small projects on{" "}
        <span className='font-medium'>frontend of web development</span>.{" "}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className='font-medium'>React, Next.js</span>. I am also
        familiar with TypeScript. I am always looking to learn new technologies.
        I am currently looking for a{" "}
        <span className='font-medium'>full-time position</span> as a frontend
        developer.
      </p>
      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy singing,
        dancing, watching movies, and playing with dogs. I also enjoy{" "}
        <span className='font-medium'>learning new things</span>.
      </p>
    </motion.section>
  );
}
