'use client';
import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motions';
export const TypingText = ({ title, textStyles }) => (
  <p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white text-center`}
  >
    {Array.from(title).map((letter, index) => (
      <span
        className='text-[14px] text-secondary-white text-center'
        variants={textVariant2}
        key={index}
      >
        {letter === '' ? '\u00A0' : letter}
      </span>
    ))}
  </p>
);

export const TitleText = ({ title }) => (
  <motion.h2 variants={textVariant2} initial='hidden' whileInView='show'
   className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white text-center`}
  >
    {title}
  </motion.h2>
);
