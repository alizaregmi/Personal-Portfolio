import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { VscOrganization } from "react-icons/vsc";
import recyclerags from "@/public/recyclerags.png";
import expertbookmart from "@/public/expertbookmart..png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Bachelor in Computer Science and Information Technology (BSc. CSIT)",
    location: "Bhairahawa Multiple Campus, TU",
    description: "I am currently studing in 8th semester.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - Present",
  },
  {
    title: "Vice President",
    location: " CSITAN Rupandehi",
    description:
      "Currently working with CSITAN Rupandehi as a Vice President. Actively worked with CSITAN Rupandehi as an Executive Member in 79/80 tenure, empowering participants with practical skills and fostering a dynamic community of aspiring developers.",
    icon: React.createElement(VscOrganization),
    date: "2022 - present",
  },
  {
    title: "Digi School Global",
    location: "Kathmandu",
    description:
      "I worked as a Butwal Representative for 9 months. I managed relationships with 8 different schools within the area. Conducted training sessions for teachers on computer-related topics, enhancing their digital literacy and teaching skills.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jan 2024",
  },

  {
    title: "Deputy Community Builder",
    location: "Coding Olympics Nepal",
    description:
      "Worked for inspiring students from grades 1 to 10 to explore coding and join coding competitions organised by Coding Olympics Nepal.",
    icon: React.createElement(VscOrganization),
    date: "Feb 2023- Apr 2024",
  },
] as const;

export const projectsData = [
  {
    title: "RecycleRags",
    description:
      "I worked as a frontend developer on this project . Users can buy old clothes on reasonable price as well as place their used clothes for sell.",
    tags: ["React", "MongoDB", "Node"],
    imageUrl: recyclerags,
  },
  {
    title: "Expert Book Mart",
    description:
      "Online Book Store. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["HTML", "CSS", "JS", "Bootstrap"],
    imageUrl: expertbookmart,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
