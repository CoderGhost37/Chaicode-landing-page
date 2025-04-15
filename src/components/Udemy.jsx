import { ArrowRight, Star } from 'lucide-react';
import { Carousel } from './ui/carousel';

export function UdemyCourses() {
  const cards = udemyCourses.map((course, index) => (
    <UdemyCourseCard key={course.id} course={course} index={index} />
  ));
  return (
    <section id='udemy' className='py-12 px-4 max-w-7xl mx-auto'>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold'>
        Udemy
      </p>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'>
        Not only in India, we are global leaders in tech education
      </p>

      <div className='mt-4'>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

function UdemyCourseCard({ course }) {
  const savePercent = Math.round(
    ((course.originalPrice - course.discountedPrice) / course.originalPrice) *
      100
  );

  return (
    <div className='relative flex flex-col-reverse md:flex-row md:gap-4 w-80 md:w-[700px] lg:w-[1000px] rounded justify-between bg-background-secondary'>
      <div className='flex flex-col py-4 px-2 md:px-4'>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold w-full truncate'>
          {course.name}
        </p>
        <p className='mt-2 text-gray-300 text-xs md:text-sm'>{course.desc}</p>

        <div className='flex items-center gap-1 mt-2'>
          {[1, 2, 3, 4, 5].map((i) => {
            const diff = course.stars - i + 1;
            const fillPercentage =
              diff >= 1 ? 100 : diff > 0 ? Math.round(diff * 100) : 0;

            return (
              <div key={i} className='relative w-4 h-4'>
                <Star className='absolute text-gray-500' size={16} />
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
          <span className='text-sm text-gray-300 ml-1'>({course.stars})</span>
        </div>

        <div className='mt-1 rounded w-fit inline-block py-0.5 px-2 text-sm text-red-500 bg-red-200 font-medium'>
          {course.tag}
        </div>

        <div className='mt-4'>
          <p className='text-white text-xl font-semibold'>
            {course.discountedPrice} INR{' '}
            <strike className='text-gray-500 font-normal text-base'>
              {course.originalPrice} INR
            </strike>
          </p>
          <p className='text-text-primary text-sm'>Save {savePercent}%</p>
        </div>

        <a
          href={course.href}
          className='group mt-4 flex justify-center items-center gap-2 text-white font-medium w-full bg-gradient-to-r from-brand-primary/90 to-text-primary/90 group-hover:from-brand-primary group-hover:to-text-primary py-2 px-4 rounded transition-all duration-300'
        >
          <span>Learn More</span>
          <ArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
        </a>
      </div>

      <iframe
        className='h-40 md:h-72 w-full rounded-t md:rounded-r'
        src={course.videoUrl}
        title={course.name}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
}

const udemyCourses = [
  {
    id: 1,
    name: 'Complete web development course',
    desc: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
    stars: 4.7,
    tag: 'Top Rated',
    originalPrice: 3089,
    discountedPrice: 399,
    videoUrl: 'https://www.youtube.com/embed/KZ31wDjYleI',
    href: 'https://hitesh.ai/udemy',
  },
  {
    id: 2,
    name: 'Complete web development course',
    desc: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
    stars: 4.2,
    tag: 'Top Rated',
    originalPrice: 3089,
    discountedPrice: 399,
    videoUrl: 'https://www.youtube.com/embed/KZ31wDjYleI',
    href: 'https://hitesh.ai/udemy',
  },
  {
    id: 3,
    name: 'Complete web development course',
    desc: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
    stars: 4.7,
    tag: 'Top Rated',
    originalPrice: 3089,
    discountedPrice: 399,
    videoUrl: 'https://www.youtube.com/embed/KZ31wDjYleI',
    href: 'https://hitesh.ai/udemy',
  },
];
