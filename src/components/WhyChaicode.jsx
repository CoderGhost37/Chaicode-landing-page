import { motion } from 'motion/react';
import HitestImg from '../assets/hitesh.png';

export function WhyChaicode() {
  return (
    <section id='why-chaicode' className='py-24 px-4 max-w-7xl mx-auto'>
      <motion.p
        className='text-center text-4xl md:text-6xl text-text-primary font-semibold'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        But Why ChaiCode?
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        ChaiCode exists because we love tech and teaching
      </motion.p>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-start'>
        <div className='flex flex-col justify-between h-full gap-4'>
          {leftCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <InfoCard title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className='relative bg-background-secondary border border-neutral-700 rounded-lg p-6 flex flex-col items-center text-center transition duration-200 hover:-translate-y-2'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={HitestImg}
            alt='Hitesh Choudhary'
            className='w-full h-48 sm:h-64 md:h-48 object-cover rounded-md mb-4'
          />
          <h2 className='text-xl md:text-2xl font-semibold text-white'>
            Hitesh Choudhary
          </h2>
          <p className='text-sm text-gray-400 mt-2'>
            Retired from corporate and full time YouTuber, founder of LCO
            (acquired), x CTO, Sr. Director at PW. <br />2 YT channels (950k &
            474k), stepped into 43 countries.
          </p>

          <h3 className='mt-4 text-lg text-white font-semibold'>Approach</h3>
          <p className='text-sm text-gray-300 mt-1'>
            Project-based courses with peer learning and bounties with many
            activities
          </p>
        </motion.div>

        <div className='flex flex-col justify-between h-full gap-4'>
          {rightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <InfoCard title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className='mt-4 flex justify-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href='https://courses.chaicode.com/learn/view-all?show=batch&type=17'
          className='border border-brand-primary py-3 px-6 text-brand-primary font-semibold rounded-lg mt-8 inline-block transition duration-200 hover:bg-orange-50/20 hover:scale-105'
        >
          Join Cohorts Live Classes
        </a>
      </motion.div>
    </section>
  );
}

function InfoCard({ title, desc }) {
  return (
    <div className='relative bg-background-secondary border border-neutral-700 rounded-lg p-4 transition duration-200 hover:-translate-y-2'>
      <h3 className='text-white font-semibold text-lg'>{title}</h3>
      <p className='text-gray-400 text-sm mt-1'>{desc}</p>
    </div>
  );
}

const leftCards = [
  {
    title: 'Comprehensive Curriculum',
    desc: 'Master key concepts and hands-on skills. Clearly laid out content. Learn smart methods, the right way. Thorough, practical, and easy to understand.',
  },
  {
    title: 'You finish it',
    desc: 'Our cohorts are a collaborative journey, students help each other, stay motivated, and complete the course on time as a community.',
  },
  {
    title: 'Industry Guests',
    desc: "We're connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.",
  },
];

const rightCards = [
  {
    title: 'Code and Chill',
    desc: 'Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.',
  },
  {
    title: 'Improve Communication',
    desc: 'One of the best ways to boost communication skills is through practice. Our peer assess reviews make it happen where co-learners teach, share, and grow together.',
  },
  {
    title: 'Bounties',
    desc: "Every cohort comes with exciting cash prizes and more (even feature a MacBook giveaway)! It's our way of keeping the motivation high and the learning fun.",
  },
];
