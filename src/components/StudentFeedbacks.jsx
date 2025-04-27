'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../constant/data';

export function StudentFeedbacks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const pauseAutoplay = () => {
    setAutoplay(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setAutoplay(true);
    }, 10000); // resume autoplay after 10 seconds
  };

  const handlePrev = () => {
    pauseAutoplay();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    pauseAutoplay();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    pauseAutoplay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-brand-primary text-brand-primary'
              : 'text-text-secondary'
          }`}
        />
      ));
  };

  return (
    <section id='feedbacks' className='py-24 px-4 max-w-7xl mx-auto'>
      <motion.p
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Students Feedback
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </motion.p>

      <div className='mt-8 w-full overflow-hidden'>
        <div className='relative max-w-5xl mx-auto'>
          <div className='relative overflow-hidden h-[400px] md:h-[350px] rounded-xl bg-background-secondary p-6 border border-brand-secondary/20'>
            <Quote className='absolute top-6 left-6 w-10 h-10 text-brand-primary opacity-20' />

            <AnimatePresence initial={false} custom={direction} mode='wait'>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className='absolute inset-0 flex items-center justify-center p-6'
              >
                <div className='flex flex-col md:flex-row items-center gap-8 max-w-4xl'>
                  <div className='flex-shrink-0'>
                    <div className='relative'>
                      <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-brand-primary p-1'>
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          loading='lazy'
                          width={96}
                          height={96}
                          className='w-full h-full object-cover rounded-full'
                        />
                      </div>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className='absolute -bottom-2 -right-2 bg-brand-primary text-white rounded-full p-1'
                      >
                        <Quote className='w-4 h-4' />
                      </motion.div>
                    </div>
                  </div>

                  <div className='flex-1 text-center md:text-left'>
                    <motion.div
                      className='mb-4'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h4 className='text-text-primary font-bold text-xl'>
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className='text-text-secondary'>
                        {testimonials[currentIndex].role} at{' '}
                        {testimonials[currentIndex].company}
                      </p>
                    </motion.div>

                    <div className='flex justify-center md:justify-start mb-2'>
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className='text-white text-lg italic mb-4'
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className='absolute bottom-6 right-6 flex space-x-2'>
              <button
                onClick={handlePrev}
                className='p-2 rounded-full bg-background-primary hover:bg-brand-secondary/50 text-text-primary transition-colors'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                onClick={handleNext}
                className='p-2 rounded-full bg-background-primary hover:bg-brand-secondary/50 text-text-primary transition-colors'
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>

            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-6 bg-brand-primary'
                      : 'bg-text-secondary/30 hover:bg-text-secondary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
