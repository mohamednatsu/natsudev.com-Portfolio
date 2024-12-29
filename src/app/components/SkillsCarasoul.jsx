'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiAmazonwebservices } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";

const skills = [
    { name: 'React', logo: <FaReact color='white' size={20}/> },
    { name: 'Next.js', logo: <RiNextjsFill color='white' size={20}/> },
    { name: 'Tailwind CSS', logo: <RiTailwindCssFill color='white' size={20}/> },
    { name: 'Node.js', logo: <FaNodeJs color='white' size={20}/> },
    { name: 'Framer Motion', logo: <TbBrandFramerMotion color='white' size={20}/> },
    { name: 'TypeScript', logo: <SiTypescript color='white' size={20}/> },
    { name: 'JavaScript', logo: <IoLogoJavascript color='white' size={20}/> },
    { name: 'HTML5', logo: <FaHtml5 color='white' size={20}/> },
    { name: 'React Native', logo: <FaReact color='white' size={20}/> },
    { name: 'CSS3', logo: <FaCss3Alt color='white' size={20}/> },
    { name: 'MongoDB', logo: <SiMongodb color='white' size={20}/> },
    { name: 'PostgreSQL', logo: <SiPostgresql color='white' size={20}/> },
    { name: 'Express', logo: <SiExpress color='white' size={20}/> },
    { name: 'GraphQL', logo: <GrGraphQl color='white' size={20}/> },
    { name: 'AWS', logo: <SiAmazonwebservices color='white' size={20}/> },
    { name: 'Docker', logo: <FaDocker color='white' size={20}/> },
    { name: 'Figma', logo: <FaFigma color='white' size={20}/> },
    { name: 'NestJS', logo: <SiNestjs color='white' size={20}/> },
    { name: 'Angular', logo: <FaAngular color='white' size={20}/> },

];

const SkillsCarousel = () => {
    return (
        <div className="w-full overflow-hidden py-10">
            {/* Heading */}
            <h2 className="text-center text-3xl font-bold text-white mb-8 md:mb-12">
                Skills & Technologies
            </h2>

            {/* Carousel */}
            <motion.div
                className="flex space-x-8 items-center justify-start w-max"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{
                    type: 'tween',
                    ease: 'linear',
                    duration: 80,
                    repeat: Infinity,
                }}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center bg-primary-400/80 p-6 rounded-lg drop-shadow-lg hover:scale-105 transition-transform"
                    >
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                        {/* Skill Logo */}
                            <div className="">
                                {skill.logo}
                            </div>
                        {/* Skill Name */}
                        <p className="text-white text-sm font-semibold">{skill.name}</p>
                        </div>
                    </motion.div>
                ))}

                {/* Duplicate items for smooth scrolling */}
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center bg-primary-400/80 p-6 rounded-lg shadow-md hover:scale-105 transition-transform"
                    >
                        <div className="w-full flex flex-col items-center justify-center gap-4">
                        {/* Skill Logo */}
                            <div className="">
                                {skill.logo}
                            </div>
                        {/* Skill Name */}
                        <p className="text-white text-sm font-semibold">{skill.name}</p>
                        </div>
                    </motion.div>
                ))}
        
            </motion.div>
        </div>
    );
};

export default SkillsCarousel;
