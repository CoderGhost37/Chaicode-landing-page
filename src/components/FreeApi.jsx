import { motion } from 'motion/react';
import { AspectRatio } from './ui/aspect-ratio';
import YouTube from 'react-youtube';
import { Suspense } from 'react';

export function FreeApi() {
  return (
    <section id='freeapi' className='py-24 px-4 max-w-6xl mx-auto'>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold mt-2 font-roboto'
      >
        FreeAPI - Open Source
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='mt-8 flex flex-col-reverse md:flex-row gap-4 md:gap-8 items-center'
      >
        <motion.div
          className='w-full'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className='text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white font-inter'>
            Unlock Your Potential with Our API Hub
          </p>
          <p className='mt-2 text-center md:text-left text-base md:text-lg font-medium text-text-secondary font-inter'>
            Our API Hub is designed to streamline your learning experience in
            API handling across various programming languages. With this
            resource, you can effortlessly build and showcase your front-end
            portfolio in both web and mobile applications. Join us to enhance
            your skills and take your coding projects to the next level!
          </p>
        </motion.div>

        <motion.div
          className='w-full'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <AspectRatio
            ratio={16 / 9}
            className='rounded-lg h-full overflow-hidden'
          >
            <Suspense
              fallback={
                <div className='w-full h-full bg-gray-600 animate-pulse' />
              }
            >
              <YouTube
                videoId='FjHSOAtlyKI'
                style={{ width: '100%', height: '100%' }}
                opts={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </Suspense>
          </AspectRatio>
        </motion.div>
      </motion.div>

      <motion.div
        className='flex justify-center mt-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          href='https://freeapi.app/'
          target='_blank'
          className='border border-brand-primary py-3 px-6 text-brand-primary font-semibold rounded-lg mt-8 inline-block transition duration-200 hover:bg-orange-50/20 hover:scale-105'
        >
          Check FreeAPI Docs
        </a>
      </motion.div>
    </section>
  );
}
