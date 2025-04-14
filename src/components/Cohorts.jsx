import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const cohorts = [
  {
    id: 1,
    name: 'Full Stack Data Science 1.0',
    desc: 'From Python basics to project deployment',
    videoUrl: 'https://www.youtube.com/embed/Kjd-SWpe1do',
    startsOn: 'April 12, 2025',
    duration: '6 months',
    originalPrice: 8999,
    discountedPrice: 6999,
    href: 'https://hitesh.ai/data-science',
  },
  {
    id: 2,
    name: 'GenAI with Python | Concept to deployment projects 1.0',
    desc: 'Development side of AI application',
    videoUrl: 'https://www.youtube.com/embed/VNb_LawBBWU',
    startsOn: 'April 7, 2025',
    duration: '1-2 months',
    originalPrice: 7999,
    discountedPrice: 4999,
    href: 'https://hitesh.ai/genai-cohort',
  },
  {
    id: 3,
    name: 'DevOps for developers 1.0',
    desc: 'Perfect guide to get started with DevOps',
    videoUrl: 'https://www.youtube.com/embed/oBLpqSHc3lA',
    startsOn: 'April 15, 2025',
    duration: '1-2 months',
    originalPrice: 7999,
    discountedPrice: 4999,
    href: 'https://hitesh.ai/devops-cohort',
  },
  {
    id: 4,
    name: 'Web Dev Cohort 1.0',
    desc: 'Ultimate guide to build software on web',
    videoUrl: 'https://www.youtube.com/embed/oBLpqSHc3lA',
    startsOn: 'January 11, 2025',
    duration: '6 months',
    originalPrice: 8999,
    discountedPrice: 6999,
    href: 'https://hitesh.ai/cohort',
  },
  {
    id: 5,
    name: 'Coding Hero 2025',
    desc: 'Our Community focused program for students',
    videoUrl: 'https://www.youtube.com/embed/oBLpqSHc3lA',
    startsOn: 'Constantly going',
    duration: 'Always running',
    originalPrice: 599,
    discountedPrice: 299,
    href: 'https://courses.chaicode.com/learn/batch/Coding-Hero-2025',
  },
];

export function Cohorts() {
  return (
    <section id='cohorts' className='px-4 py-12 max-w-7xl mx-auto'>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold'>
        Cohorts
      </p>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'>
        Live training classes
      </p>

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
              <iframe
                className='h-56 w-full rounded-t'
                src={cohort.videoUrl}
                title={cohort.name}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
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
