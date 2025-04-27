import { motion } from 'motion/react';
import { topics } from '../constant/data';
import { cn } from '../lib/utils';

export function TopicsCloud() {
  return (
    <section id='topics' className='py-24 px-4 max-w-5xl mx-auto'>
      <motion.p
        className='text-center text-4xl md:text-6xl bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-semibold font-roboto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Topics Cloud
      </motion.p>

      <motion.p
        className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        You can find videos and courses on topics and much more
      </motion.p>

      <motion.div
        className='mt-8 flex flex-wrap justify-center gap-4 md:gap-6'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.2, staggerChildren: 0.1 }}
      >
        {topics.map((topic, index) => (
          <TopicPill key={index} topic={topic} />
        ))}
      </motion.div>
    </section>
  );
}

function TopicPill({ topic }) {
  const pillVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    whileHover: { scale: 1.1 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.a
      href={topic.videoUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='relative inline-flex items-center rounded-full bg-zinc-800/50 text-gray-300 font-semibold px-4 py-2 shadow-md hover:shadow-lg transition-shadow duration-300'
      variants={pillVariants}
      initial='initial'
      animate='animate'
      whileHover='whileHover'
      transition='transition'
    >
      <img
        src={topic.logo}
        alt={`${topic.name} Logo`}
        width={24}
        height={24}
        className={cn(
          'mr-2 rounded-full',
          ['NextJs', 'MCP Server'].includes(topic.name) && 'invert'
        )}
        loading='lazy'
      />
      {topic.name}
    </motion.a>
  );
}
