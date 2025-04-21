import { motion } from 'motion/react';
import { Tweet } from 'react-tweet';
import { tweetIds } from '../constant/data';

export function TweetLove() {
  return (
    <section id='tweet-love' className='py-24 max-w-5xl mx-auto px-4'>
      <motion.p
        className='text-center text-4xl md:text-6xl text-text-primary font-semibold'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Tweet Love
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Love that we get from our community
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4'>
        {tweetIds.map((tweetId, index) => (
          <div key={index} className='h-fit relative'>
            <Tweet id={tweetId} />
          </div>
        ))}
      </div>
    </section>
  );
}
