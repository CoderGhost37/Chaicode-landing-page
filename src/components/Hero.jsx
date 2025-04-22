import { motion } from 'motion/react';
import { BackgroundFollowGlow } from './ui/background-follow-glow';
import { GlowEffect } from './ui/glow-effect';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Hero() {
  return (
    <BackgroundFollowGlow
      color='#FF5733'
      size={500}
      blue='10px'
      className='bg-background-primary'
    >
      <motion.div
        className='flex flex-col justify-center items-center pt-36 pb-24 px-2 md:px-4 max-w-4xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='relative'>
          <GlowEffect
            colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
            mode='colorShift'
            blur='soft'
            duration={3}
            scale={0.9}
          />
          <motion.button
            className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Trusted by 1.5M Code Learners
          </motion.button>
        </div>

        <motion.p
          className='hidden md:block'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className='mt-4 relative inline-block text-center z-20 text-neutral-200 bg-clip-text px-2 py-4 text-5xl font-bold lg:text-6xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-brand-primary after:transition-all after:duration-150 hover:after:h-full'>
            <span className='relative z-10'>Consistency and Community</span>
          </span>
        </motion.p>
        <motion.p
          className='md:hidden block relative mt-4 text-center z-20 text-neutral-200 bg-clip-text p-2 text-4xl font-bold sm:text-6xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Consistency and Community
        </motion.p>

        <motion.p
          className='md:mt-2 text-center z-20 text-text-primary bg-clip-text text-lg font-semibold sm:text-3xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          An unmatched Learning Experience for coding courses.
        </motion.p>
        <motion.p
          className='mt-8 text-center z-20 text-gray-300 bg-clip-text text-sm sm:text-lg'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Content is everywhere, but we provide a learning experience that is
          unmatched — bounties, peer learning, code reviews, virtual hostel,
          alumni network, doubt sessions, and group projects.
        </motion.p>

        <a href='#cohorts'>
          <motion.button
            className='mt-8 group cursor-pointer rounded-xl border-4 border-brand-primary border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className='relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-brand-primary px-6 py-4 font-bold text-white'>
              Check all Live Cohorts
              <ArrowRight className='transition-all group-hover:translate-x-2 group-hover:scale-125' />
              <div
                className={cn(
                  'absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]'
                )}
              />
            </div>
          </motion.button>
        </a>

        <motion.div
          className='relative mt-8 flex h-60 sm:h-80 md:h-96 w-full max-w-3xl items-center justify-center overflow-hidden rounded-lg bg-zinc-900 shadow-lg shadow-zinc-900/50'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <iframe
            className='absolute top-0 left-0 h-full w-full rounded-lg'
            src='https://www.youtube.com/embed/yG8JMlldoCE'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </BackgroundFollowGlow>
  );
}
