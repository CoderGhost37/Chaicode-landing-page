import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import HiteshDiscord from '../assets/hitesh-discord.jpg';
import Discord from '../assets/discord.png';

export function JoinCommunity() {
  return (
    <section id='community' className='px-4 py-24 max-w-5xl mx-auto'>
      <div className='flex flex-col-reverse sm:flex-row justify-between items-center gap-6'>
        <div className='w-full md:w-3/5 flex flex-col'>
          <p className='mt-2 text-center sm:text-left text-text-primary font-semibold text-4xl md:text-5xl lg:text-6xl'>
            Join our community where creativity thrives.
          </p>

          <div className='flex justify-center sm:justify-start'>
            <a href='#cohorts'>
              <motion.button
                className='mt-8 group cursor-pointer rounded-xl border-4 border-brand-primary border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className='relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-brand-primary px-4 md:px-6 py-2 md:py-4 font-bold text-white'>
                  80,000 Active Coders in Discord
                  <ArrowRight className='transition-all group-hover:translate-x-2 group-hover:scale-125' />
                  <div
                    className={cn(
                      'absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]'
                    )}
                  />
                </div>
              </motion.button>
            </a>
          </div>
        </div>

        <div className='relative w-full md:w-2/5 border-2 rounded bg-background-secondary border-gray-300'>
          <div className='flex flex-col justify-center items-center'>
            <img
              src={HiteshDiscord}
              alt='ChaiCode Logo'
              className='w-full h-full object-cover'
            />
            <div className='bg-black px-4 py-1'>
              <img
                src={Discord}
                alt='Discord'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
