import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { udemyCourses } from '../constant/data';
import YouTube from 'react-youtube';
import { Suspense } from 'react';

export function UdemyCourses() {
  const cards = udemyCourses.map((course, index) => (
    <UdemyCourseCard key={course.id} course={course} index={index} />
  ));

  return (
    <section id='udemy' className='py-24 px-4 bg-background-primary'>
      <div className='max-w-7xl mx-auto'>
        <motion.p
          className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto pb-2'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Udemy
        </motion.p>

        <motion.p
          className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Not only in India, we are global leaders in tech education
        </motion.p>

        <div className='px-8 md:px-16'>
          <Carousel
            className='mt-12 max-w-6xl mx-auto'
            loop={true}
            defaultIndex={0}
          >
            <CarouselContent>
              {udemyCourses.map((course, index) => (
                <CarouselItem
                  key={course.id}
                  index={index}
                  className='md:basis-1/2 lg:basis-full'
                >
                  <UdemyCourseCard course={course} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function UdemyCourseCard({ course, index }) {
  const savePercent = Math.round(
    ((course.originalPrice - course.discountedPrice) / course.originalPrice) *
      100
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className='w-full rounded-xl overflow-hidden bg-background-secondary border border-gray-800 flex flex-col lg:flex-row items-center'
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      whileHover='hover'
      viewport={{ once: true }}
    >
      <div className='aspect-video w-full relative overflow-hidden'>
        <Suspense
          fallback={<div className='w-full h-full bg-gray-600 animate-pulse' />}
        >
          <YouTube
            videoId={course.videoId}
            style={{ width: '100%', height: '100%' }}
            opts={{
              height: '100%',
              width: '100%',
            }}
          />
        </Suspense>
      </div>

      <div className='p-6'>
        <h3 className='text-white text-xl font-bold line-clamp-1'>
          {course.name}
        </h3>

        <p className='mt-2 text-gray-400 text-sm line-clamp-2'>{course.desc}</p>

        <div className='flex items-center gap-1 mt-3'>
          {[1, 2, 3, 4, 5].map((i) => {
            const diff = course.stars - i + 1;
            const fillPercentage =
              diff >= 1 ? 100 : diff > 0 ? Math.round(diff * 100) : 0;

            return (
              <div key={i} className='relative w-4 h-4'>
                <Star className='absolute text-gray-600' size={16} />
                <div
                  className='absolute overflow-hidden'
                  style={{ width: `${fillPercentage}%` }}
                >
                  <Star
                    className='text-yellow-400'
                    size={16}
                    fill='currentColor'
                  />
                </div>
              </div>
            );
          })}
          <span className='text-sm text-gray-400 ml-1'>
            ({course.stars.toFixed(1)})
          </span>

          <div className='ml-auto'>
            <span className='text-xs font-medium px-2 py-1 rounded bg-orange-500/20 text-orange-400'>
              Top Rated
            </span>
          </div>
        </div>

        <div className='mt-4 flex items-end'>
          <div>
            <p className='text-white text-2xl font-bold'>
              {course.discountedPrice} INR
            </p>
            <div className='flex items-center gap-2'>
              <p className='text-gray-500 font-normal text-sm line-through'>
                {course.originalPrice} INR
              </p>
              <p className='text-green-500 text-sm font-medium'>
                Save {savePercent}%
              </p>
            </div>
          </div>
        </div>

        <motion.a
          href={course.href}
          title={course.name}
          className='mt-5 flex justify-center items-center gap-2 text-white font-medium w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-3 px-4 rounded-lg transition-all duration-300'
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Learn More</span>
          <ArrowRight size={18} />
        </motion.a>
      </div>
    </motion.div>
  );
}
