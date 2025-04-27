import { motion } from 'motion/react';
import { cardData } from '../constant/data';
import AluminiImg from '../assets/alumini.jpg';

export function KeyBenefitsOfCohort() {
  return (
    <section id='benefits-of-cohort' className='py-24 px-4 max-w-7xl mx-auto'>
      <motion.p
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Key Benefits Of Cohorts
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Cohorts are best way to learn because you finish the course in a timely
        manner
      </motion.p>

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
              <div className='transition duration-200 group-hover:translate-x-2 mb-2 inline-flex justify-center items-center p-2 bg-orange-500/10 rounded-lg'>
                <card.icon className='w-6 h-6 text-orange-500' />
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
          <div className='transition duration-200 group-hover:translate-x-2 flex-1 aspect-video rounded-lg'>
            <img src={AluminiImg} alt='Alumni' className='rounded-lg' />
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
