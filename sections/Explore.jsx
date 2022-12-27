'use client';
import { motion } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import styles from '../styles';

import { exploreWorlds } from '../constants';

import {
  staggerContainer,
  textContainer,
  textVariant2,
} from '../utils/motions';
import { useState } from 'react';
const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| The World' textStyles='text-center' />
        <TitleText
          title={
            <>
              Choose the world you want <br className='md:block hidden' /> to
              explore{' '}
            </>
          }
        />

        <div className='flex flex-col lg:flex-row min-h-[70vh] gap-5 mt-[50px]'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
