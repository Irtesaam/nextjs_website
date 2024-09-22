'use client';
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Skills() {
    const {ref, inView} = useInView(
        {
            threshold: 0.4,
        }
    );
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection('Skills');
        }
      },[inView, setActiveSection, timeOfLastClick]);

  return (
   <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 ">
    <SectionHeading>My Skills</SectionHeading>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
            <motion.li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true, // animate only once
            }}
            transition={{ delay: 0.05 * index }} // delay each skill by 0.1s
            key={index}>{skill}</motion.li>
        ))}
    </ul>
   </section>
  )
}
