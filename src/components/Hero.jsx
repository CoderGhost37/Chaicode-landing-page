import { motion } from 'motion/react';
import { BackgroundFollowGlow } from './ui/background-follow-glow';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import YouTube from 'react-youtube';

export function Hero() {
  return (
    <BackgroundFollowGlow
      color='#FF5733'
      size={500}
      blue='10px'
      className='bg-background-primary'
    >
      <motion.div
        className='flex flex-col justify-center items-center pt-36 pb-24 px-4 max-w-4xl mx-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.p
          className='relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-2.5 py-1.5 text-sm text-zinc-50 outline outline-1 outline-[#fff2f21f]'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className='w-2 h-2 bg-[#FF7700] rounded-full mr-2 animate-pulse' />
          <span>Trusted by 1.5M Code Learners</span>
        </motion.p>

        <motion.p
          className='hidden md:block'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className='mt-4 relative inline-block text-center z-20 text-neutral-200 bg-clip-text px-2 py-4 text-5xl font-bold lg:text-6xl after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-brand-primary after:transition-all after:duration-150 hover:after:h-full'>
            <span className='relative z-10 font-roboto'>
              Consistency and Community
            </span>
          </span>
        </motion.p>
        <motion.p
          className='md:hidden block relative mt-4 text-center z-20 text-neutral-200 bg-clip-text p-2 text-4xl font-bold sm:text-6xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Consistency and Community
        </motion.p>

        <motion.p
          className='md:mt-2 text-center z-20 text-text-primary bg-clip-text text-lg font-semibold md:text2xl lg:text-3xl'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          An unmatched Learning Experience for coding courses.
        </motion.p>
        <motion.p
          className='mt-8 text-center z-20 text-gray-300 text-sm sm:text-lg'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
          className='relative mt-8 flex aspect-video w-full max-w-3xl mx-auto items-center justify-center overflow-hidden rounded-lg bg-zinc-900 shadow-lg shadow-zinc-900/50'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <YouTube
            videoId='yG8JMlldoCE'
            style={{ width: '100%', height: '100%' }}
            opts={{
              height: '100%',
              width: '100%',
            }}
          />
        </motion.div>
      </motion.div>
    </BackgroundFollowGlow>
  );
}
