import { motion } from 'motion/react';
import { Tweet } from 'react-tweet';
import { tweetIds } from '../constant/data';
import { useState, useEffect } from 'react';

export function TweetLove() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const createColumns = () => {
      const colCount = getColumnCount();
      const cols = [];

      for (let i = 0; i < colCount; i++) {
        const shuffled = shuffleArray(tweetIds);
        cols.push([...shuffled, ...shuffled]);
      }

      setColumns(cols);
    };

    createColumns();
    window.addEventListener('resize', createColumns);
    return () => window.removeEventListener('resize', createColumns);
  }, []);

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  const getColumnCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  return (
    <section id='tweet-love' className='py-24 max-w-6xl mx-auto px-4'>
      <motion.p
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto'
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

      <div className='mt-8 relative shadow-xl p-4 overflow-hidden h-[600px]'>
        <div className='flex gap-4 justify-center'>
          {columns.map((tweets, colIndex) => {
            const duration = 60 + colIndex * 10;
            return (
              <div
                key={colIndex}
                className='space-y-6 animate-marquee'
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${colIndex * 3}s`,
                }}
              >
                {tweets.map((id, index) => (
                  <div key={`${colIndex}-${index}`} className='w-full'>
                    <Tweet id={id} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Top & bottom fade */}
        <div className='absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background-primary to-transparent z-10' />
        <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background-primary to-transparent z-10' />
      </div>
    </section>
  );
}
