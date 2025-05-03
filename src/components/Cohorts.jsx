import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { cohorts } from '../constant/data';
import YouTube from 'react-youtube';
import { Suspense } from 'react';

export function Cohorts() {
  return (
    <section id='cohorts' className='px-4 py-24 max-w-7xl mx-auto'>
      <motion.p
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Cohorts
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Live training classes
      </motion.p>

      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-6'>
        {cohorts.map((cohort) => {
          const savePercent = Math.round(
            ((cohort.originalPrice - cohort.discountedPrice) /
              cohort.originalPrice) *
              100
          );

          return (
            <motion.div
              key={cohort.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: cohort.id * 0.1 }}
              viewport={{ once: true }}
              className='relative rounded bg-background-secondary flex flex-col hover:scale-[1.02] transition-transform duration-300'
            >
              <div className='aspect-video w-full relative rounded-t overflow-hidden'>
                <Suspense
                  fallback={
                    <div className='w-full h-full bg-gray-600 animate-pulse' />
                  }
                >
                  <YouTube
                    loading='lazy'
                    videoId={cohort.videoId}
                    style={{ width: '100%', height: '100%' }}
                    opts={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </Suspense>
              </div>
              <div className='flex flex-col py-4 px-2 md:px-4'>
                <p className='text-white text-base sm:text-lg lg:text-xl font-bold w-full truncate'>
                  {cohort.name}
                </p>
                <p className='mt-2 text-gray-300 text-xs md:text-sm'>
                  {cohort.desc}
                </p>

                <div className='mt-2 flex justify-between items-center gap-2'>
                  <div className='flex items-center gap-1 w-full'>
                    <Calendar size={12} className='text-text-primary' />
                    <span className='text-gray-500 text-xs'>
                      Starts {cohort.startsOn}
                    </span>
                  </div>
                  <div className='flex items-center gap-1 w-full'>
                    <Clock size={12} className='text-text-primary' />
                    <span className='text-gray-500 text-xs'>
                      {cohort.duration}
                    </span>
                  </div>
                </div>

                <div className='mt-4'>
                  <p className='text-white text-xl font-semibold'>
                    {cohort.discountedPrice} INR{' '}
                    <strike className='text-gray-500 font-normal text-base'>
                      {cohort.originalPrice} INR
                    </strike>
                  </p>
                  <p className='text-text-primary text-sm'>
                    Save {savePercent}%
                  </p>
                </div>

                <a
                  href={cohort.href}
                  title={cohort.name}
                  className='group mt-4 flex justify-center items-center gap-2 text-white font-medium w-full bg-gradient-to-r from-brand-primary/90 to-text-primary/90 group-hover:from-brand-primary group-hover:to-text-primary py-2 px-4 rounded transition-all duration-300'
                >
                  <span>Learn More</span>
                  <ArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
