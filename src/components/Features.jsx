import { Users, HandshakeIcon, BookText } from 'lucide-react';
import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section
      id='features'
      className='max-w-7xl mx-auto p-6 md:p-12 relative overflow-hidden'
    >
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 md:grid-cols-12 gap-6'
      >
        <motion.div variants={item} className='md:col-span-12'>
          <div className='glass group hover:scale-[1.02] transition-all duration-300 overflow-hidden relative h-full bg-background-secondary'>
            <div className='p-8 h-full flex flex-col md:flex-row gap-8'>
              <div className='flex-1'>
                <Users className='h-8 w-8 text-text-primary mb-4' />
                <h2 className='text-3xl font-semibold text-text-primary mb-2'>
                  Community
                </h2>
                <p className='text-zinc-400 text-lg max-w-2xl'>
                  Join a thriving community of learners and creators to enhance
                  your skills through collaboration and shared insights.
                </p>
              </div>
              <div className='md:w-1/3 h-40 md:h-full rounded-lg overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80'
                  alt='Community'
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Collaboration div - Spans 6 columns on desktop */}
        <motion.div variants={item} className='md:col-span-6'>
          <div className='glass group hover:scale-[1.02] transition-all duration-300 overflow-hidden relative h-full bg-background-secondary'>
            <div className='p-8 h-full flex flex-col'>
              <div className='flex-1'>
                <HandshakeIcon className='h-8 w-8 text-text-primary mb-4' />
                <h2 className='text-2xl font-semibold text-text-primary mb-2'>
                  Collaboration
                </h2>
                <p className='text-zinc-400'>
                  Work together on projects, share ideas, and create something
                  amazing.
                </p>
              </div>
              <div className='h-40 mt-4 rounded-lg overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80'
                  alt='Collaboration'
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={item} className='md:col-span-6'>
          <div className='glass group hover:scale-[1.02] transition-all duration-300 overflow-hidden relative h-full bg-background-secondary'>
            <div className='p-8 h-full flex flex-col'>
              <div className='flex-1'>
                <BookText className='h-8 w-8 text-text-primary mb-4' />
                <h2 className='text-2xl font-semibold text-text-primary mb-2'>
                  Assignments
                </h2>
                <p className='text-zinc-400'>
                  Access and complete assignments, track your progress, and
                  improve your skills.
                </p>
              </div>
              <div className='h-40 mt-4 rounded-lg overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80'
                  alt='Assignments'
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
