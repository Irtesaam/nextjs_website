'use client';
import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';

export default function Contact() {

  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('Contact');
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-5 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:22bce060@nith.ac.in">
          22bce060@nith.ac.in
        </a>{' '}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (FormData) => {
          setPending(true);
          try {
         await sendEmail(FormData);
          } finally {
            setPending(false);
          }
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          placeholder="Enter your email"
        />
        <textarea
          name="message"
          placeholder="Enter your message"
          minLength={5}
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
