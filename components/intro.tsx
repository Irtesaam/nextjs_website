"use client"; // this is edited from Linux VM
import React, { useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import {links} from "@/lib/data";
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const {ref, inView} = useInView(
        {
            threshold: 0.75,
        }
    );
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Home');
        }
      },[inView, setActiveSection, timeOfLastClick]);

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0" ref={ref}>
        <div className="flex justify-center items-center">
            <div className="relative">
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.25,
                    delay: 0.1,
                }}
                id="home"
                className="scroll-mt-[100rem]"
                >
                <Image src="/me.jpg" alt="my portrait" width="150" height="150" quality="95" priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl"/>
                </motion.div>
            <motion.span className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                duration: 0.7,
                stiffness: 125,
                delay: 0.2,
            }}
            >
                👋
            </motion.span>
            </div>
        </div>
        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            type: "tween",
            duration: 0.5,
            delay: 0.3,
        }}
        >
            <span className="font-bold">Hi, I&apos;m Irtesaam</span>, a  <span className="font-bold"> B.Tech student at NIT Hamirpur</span> and I&apos;m a beginner web developer. I&apos;m currently  <span className="font-bold"> learning Next.js, Tailwind CSS </span> and other Web technologies. I&apos;m also into  <span className="font-bold">Pen-Testing and hardware stuffs</span>. I&apos;m open to internships and full-time opportunities.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center gap-3 px-4 text-lg font-medium justify-center"
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
            delay: 0.1,
        }}
        >
            <a href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> </a>

            <a className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10" href="/cv.pdf" download> Download CV<HiDownload  className="opacity-70 group-hover:translate-x-1 transition"/> </a>

            <a href="https://www.linkedin.com/in/irtesaam/" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"><BsLinkedin/> </a>

            <a href="https://github.com/Irtesaam" target="_blank" className="bg-white p-4 text-gray-700 text-[1.3rem] flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60"><FaGithubSquare/> </a>
        </motion.div>
    </section>
  )
}
