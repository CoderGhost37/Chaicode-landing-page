import { motion } from 'motion/react';
import { cardData } from '../constant/data';

export function KeyBenefitsOfCohort() {
  return (
    <section id='benefits-of-cohort' className='py-24 px-4 max-w-7xl mx-auto'>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold'>
        Key Benefits Of Cohorts
      </p>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'>
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </p>

      <div className='px-6 py-12'>
        <div className='grid md:grid-cols-3 gap-6'>
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className='group relative bg-background-secondary border border-white/20 rounded-lg p-5'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='transition duration-200 group-hover:translate-x-2 mb-2 w-8 h-8 flex justify-center items-center text-white rounded'>
                <card.icon />
              </div>
              <h3 className='transition duration-200 group-hover:translate-x-2 text-xl font-semibold text-orange-400 mb-2'>
                {card.title}
              </h3>
              <p className='transition duration-200 group-hover:translate-x-2 text-white/80 text-sm'>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='relative group bg-background-secondary mt-12 border border-white/20 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className='transition duration-200 group-hover:translate-x-2 flex-1 grid grid-cols-4 gap-4 justify-items-center bg-white'>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className='w-4 h-4 rounded-full border border-white/40'
              ></div>
            ))}
          </div>

          <div className='flex-1'>
            <h3 className='transition duration-200 group-hover:translate-x-2 text-xl font-semibold text-orange-400 mb-2'>
              Alumni Network and job listings
            </h3>
            <p className='transition duration-200 group-hover:translate-x-2 text-white/80 text-sm'>
              The alumni Network that you always wished for in your college. We
              have a dedicated platform where students get to know each other,
              do projects, make agencies and join Hackathons. Our HR team also
              post regular job updates that you can apply directly whenever you
              are ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
