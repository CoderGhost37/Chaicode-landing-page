import { useEffect, useRef, useState, createContext } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const CarouselContext = createContext({
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }

    window.addEventListener('resize', checkScrollability);
    return () => window.removeEventListener('resize', checkScrollability);
  }, [initialScroll]);

  const scrollableWidth = () => {
    if (typeof window === 'undefined') return 700;
    const isDesktop = window.innerWidth >= 1024;
    const isMobile = window.innerWidth < 768;
    return isDesktop ? 900 : isMobile ? 350 : 700;
  };

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollableWidth(),
        behavior: 'smooth',
      });

      // Update current index
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollableWidth(),
        behavior: 'smooth',
      });

      // Update current index
      if (currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <CarouselContext.Provider value={{ currentIndex }}>
      <div
        className='relative w-full'
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className='flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none] -mx-4 px-4'
          ref={carouselRef}
          onScroll={checkScrollability}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div
            className={cn(
              'flex flex-row justify-start gap-6 pl-4 pr-16',
              'max-w-7xl mx-auto'
            )}
          >
            {items.map((item, index) => (
              <div key={'card' + index} className='flex-shrink-0'>
                {item}
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {(isHovering || true) && (
            <>
              <motion.button
                className='absolute left-4 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed border border-gray-700'
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className='h-5 w-5 text-white' />
              </motion.button>

              <motion.button
                className='absolute right-4 top-1/2 -translate-y-1/2 z-40 h-12 w-12 rounded-full bg-gray-800/80 backdrop-blur-sm flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed border border-gray-700'
                onClick={scrollRight}
                disabled={!canScrollRight}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className='h-5 w-5 text-white' />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        <div className='flex justify-center gap-1 mt-6'>
          {Array.from({ length: Math.min(5, Math.ceil(items.length / 2)) }).map(
            (_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full ${
                  index === currentIndex
                    ? 'w-6 bg-yellow-500'
                    : 'w-2 bg-gray-700'
                }`}
                initial={false}
                animate={{ width: index === currentIndex ? 24 : 8 }}
                transition={{ duration: 0.3 }}
              />
            )
          )}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
