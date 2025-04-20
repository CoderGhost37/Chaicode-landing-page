import { motion } from 'motion/react';
import LinkedIn from '../assets/linkedin.svg';
import FaceBook from '../assets/facebook.svg';
import Google from '../assets/google.svg';
import TikTok from '../assets/tiktok.svg';
import Messenger from '../assets/messenger.svg';
import Apple from '../assets/apple.svg';
import { Marquee } from './ui/marquee';

export function StudentsMarquee() {
  const arr = [LinkedIn, FaceBook, Google, TikTok, Messenger, Apple];
  return (
    <div className='w-full overflow-hidden py-12 z-10 max-w-5xl mx-auto'>
      <motion.p
        className='text-center text-gray-300 bg-clip-text text-sm sm:text-lg'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Our students are not only working in big tech companies but are now
        founders of funded startups and product creators
      </motion.p>
      <div className='relative bg-transparent mt-4 flex max-w-[90vw] overflow-hidden py-5'>
        <Marquee pauseOnHover className='bg-transparent max-h-40'>
          {arr.map((Logo, index) => (
            <div
              key={index}
              className='relative h-full w-fit mx-[4rem] flex items-center justify-start'
            >
              <img src={Logo} alt={`Logo ${index}`} width={50} height={50} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
