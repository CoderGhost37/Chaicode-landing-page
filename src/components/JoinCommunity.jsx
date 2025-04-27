import { motion } from 'motion/react';
import ChaiLogo from '../assets/chai-white.png';
import { FaDiscord } from 'react-icons/fa';

export function JoinCommunity() {
  return (
    <section id='community' className='relative px-4 py-24 max-w-7xl mx-auto'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center bg-black/50 rounded-lg px-8 py-8 gap-12'>
        <motion.div
          className='w-full md:w-3/5 flex flex-col'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className='flex items-center gap-1 mb-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className='w-2 h-2 bg-[#FF7700] rounded-full mr-2 animate-pulse' />
            <p className='text-sm text-gray-400 font-semibold'>
              80,000 Active Coders in Discord
            </p>
          </motion.div>

          <motion.h2
            className='text-text-primary font-bold text-4xl md:text-5xl lg:text-6xl leading-tight font-roboto'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Learn & Grow with a community of learners just like you!
          </motion.h2>

          <motion.div
            className='mt-8 flex justify-center md:justify-start'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href='https://discord.com/invite/WDrH3zuWFb'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105'
            >
              <FaDiscord className='w-6 h-6' />
              Join Discord
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className='w-full md:w-2/5 rounded-lg overflow-hidden'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={ChaiLogo}
            alt='Discord Community Screenshot'
            className='w-60 sm:w-80 md:w-full h-auto object-cover mx-auto rounded-lg'
            loading='lazy'
          />
        </motion.div>
      </div>
    </section>
  );
}
