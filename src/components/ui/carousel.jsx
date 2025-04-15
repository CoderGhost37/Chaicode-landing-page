import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useMemo,
} from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export const CarouselContext = createContext({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const scrollableWidth = useMemo(() => {
    const isDesktop = window && window.innerWidth >= 1024;
    const isMobile = window && window.innerWidth < 768;
    return isDesktop ? 900 : isMobile ? 350 : 700;
  }, [window.innerWidth]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollableWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollableWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex }}>
      <div className='relative w-full'>
        <div
          className='flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]'
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              'absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l'
            )}
          ></div>

          <div
            className={cn(
              'flex flex-row justify-start gap-4 pl-4',
              // remove max-w-4xl if you want the carousel to span the full width of its container
              'max-w-7xl mx-auto'
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true,
                  },
                }}
                key={'card' + index}
                className='last:pr-[5%] md:last:pr-[33%]  rounded-3xl'
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className='flex justify-end gap-2 mr-10'>
          <button
            className='relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50'
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <ArrowLeft className='h-6 w-6 text-gray-500' />
          </button>
          <button
            className='relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50'
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <ArrowRight className='h-6 w-6 text-gray-500' />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
