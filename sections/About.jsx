'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motions';
const About = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Metaversus' textStyles='text-center' />

      <motion.p
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, type: 'tween', ease: 'easeOut' }}
        className='mt-[8px] font-normal sm:text-[32px] text[20px] text-center text-secondary-white '
      >
        <span className='font-extrabold text-white'>Metaversus</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className='font-extrabold text-white'>
          madeness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className='font-extrabold text-white'>VR</span> devices you can
        easily explore the metaverse world you want, turn your deams into
        reality. let's explore the madeness of the metaverse by scrolling down
      </motion.p>

      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1, type: 'tween', ease: 'easeOut' }}
        src='/arrow-down.svg'
        className='w-[18px] h-[28px] mb-10 object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
