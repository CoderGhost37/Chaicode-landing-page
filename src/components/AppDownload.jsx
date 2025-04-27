import { Zap, Bell, Smartphone, Code, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function AppDownload() {
  const [activeBlock, setActiveBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='download'
      className='relative max-w-7xl mx-auto overflow-hidden text-white rounded-xl'
    >
      <div className='container mx-auto px-4 py-16 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='flex justify-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ rotate: 1 }}
              className='relative w-72 h-[580px] bg-gray-800 rounded-[40px] border-[10px] border-gray-700 overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.2),0_0_15px_rgba(0,0,0,0.3)]'
            >
              <div className='absolute top-0 left-0 right-0 h-6 bg-gray-800 z-20 flex justify-center items-end pb-1'>
                <div className='w-32 h-5 bg-gray-900 rounded-b-xl'></div>
              </div>

              <div className='absolute top-0 left-0 right-0 h-8 bg-gray-900 z-10 flex items-center justify-between px-5'>
                <div className='text-xs text-white'>9:41</div>
                <div className='flex items-center gap-1'>
                  <div className='w-4 h-4 rounded-full border border-white flex items-center justify-center'>
                    <div className='w-2 h-2 bg-white rounded-full'></div>
                  </div>
                  <div className='w-3 h-3 flex flex-col justify-between'>
                    <div className='w-3 h-0.5 bg-white'></div>
                    <div className='w-3 h-0.5 bg-white'></div>
                    <div className='w-3 h-0.5 bg-white'></div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 15,
                  ease: 'linear',
                }}
                className='bg-gradient-to-r from-orange-600 to-orange-500 p-4 pt-10 flex items-center justify-between bg-[length:200%_200%]'
              >
                <div className='flex items-center gap-2'>
                  <div className='text-white font-mono bg-white/20 p-1 rounded'>
                    &lt;/&gt;
                  </div>
                  <div className='font-bold text-white text-lg'>ChaiCode</div>
                </div>
                <motion.div
                  whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Bell className='w-5 h-5 text-white cursor-pointer' />
                </motion.div>
              </motion.div>

              <div className='p-4 bg-gray-900 h-full overflow-hidden'>
                <motion.div
                  layout
                  animate={{
                    scale: activeBlock === 0 ? 1.05 : 1,
                    borderLeftWidth: activeBlock === 0 ? '4px' : '0px',
                    borderLeftColor:
                      activeBlock === 0 ? '#f97316' : 'transparent',
                    opacity: activeBlock === 0 ? 1 : 0.8,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveBlock(0)}
                  className='mb-6 bg-gray-800 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10'
                >
                  <div className='text-xs text-orange-500 font-semibold mb-2 flex items-center'>
                    <motion.div
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      }}
                      className='w-2 h-2 bg-orange-500 rounded-full mr-2'
                    ></motion.div>
                    TRENDING
                  </div>
                  <div className='text-white font-semibold mb-2 text-lg'>
                    React Native
                  </div>
                  <div className='flex items-center text-xs text-gray-400'>
                    <span>4.8 ★</span>
                    <span className='mx-2'>•</span>
                    <span>2.5h</span>
                    <motion.span
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                      }}
                      className='ml-auto px-2 py-1 bg-orange-500 text-white rounded-md text-xs font-bold'
                    >
                      LIVE
                    </motion.span>
                  </div>
                </motion.div>

                <motion.div
                  layout
                  animate={{
                    scale: activeBlock === 1 ? 1.05 : 1,
                    borderLeftWidth: activeBlock === 1 ? '4px' : '0px',
                    borderLeftColor:
                      activeBlock === 1 ? '#f97316' : 'transparent',
                    opacity: activeBlock === 1 ? 1 : 0.8,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveBlock(1)}
                  className='mb-6 bg-gray-800 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10'
                >
                  <div className='text-xs text-orange-500 font-semibold mb-2 flex items-center'>
                    <div className='w-2 h-2 bg-orange-500 rounded-full mr-2'></div>
                    POPULAR
                  </div>
                  <div className='text-white font-semibold mb-2 text-lg'>
                    Full Stack JavaScript
                  </div>
                  <div className='flex items-center text-xs text-gray-400'>
                    <span>4.9 ★</span>
                    <span className='mx-2'>•</span>
                    <span>8h</span>
                    <span className='ml-auto px-2 py-1 bg-gray-700 text-white rounded-md text-xs font-bold'>
                      ENROLLED
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  layout
                  animate={{
                    scale: activeBlock === 2 ? 1.05 : 1,
                    borderLeftWidth: activeBlock === 2 ? '4px' : '0px',
                    borderLeftColor:
                      activeBlock === 2 ? '#f97316' : 'transparent',
                    opacity: activeBlock === 2 ? 1 : 0.8,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveBlock(2)}
                  className='mb-6 bg-gray-800 rounded-xl p-4 cursor-pointer hover:shadow-lg hover:shadow-orange-500/10'
                >
                  <div className='text-xs text-green-500 font-semibold mb-2 flex items-center'>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                      }}
                      className='w-2 h-2 bg-green-500 rounded-full mr-2'
                    ></motion.div>
                    NEW
                  </div>
                  <div className='text-white font-semibold mb-2 text-lg'>
                    AI with JavaScript
                  </div>
                  <div className='flex items-center text-xs text-gray-400'>
                    <span>5.0 ★</span>
                    <span className='mx-2'>•</span>
                    <span>4h</span>
                    <motion.span
                      whileHover={{ backgroundColor: '#f97316' }}
                      className='ml-auto px-2 py-1 bg-gray-700 text-white rounded-md text-xs font-bold transition-colors duration-300'
                    >
                      ENROLL
                    </motion.span>
                  </div>
                </motion.div>
              </div>

              <div className='absolute bottom-0 left-0 right-0 h-20 bg-gray-900 border-t border-gray-800 flex justify-around items-center backdrop-blur-sm bg-opacity-90'>
                <motion.div
                  whileHover={{ y: -5 }}
                  className='flex flex-col items-center cursor-pointer group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-10 h-10 bg-orange-500/20 flex items-center justify-center rounded-full group-hover:bg-orange-500/40 transition-all duration-300'
                  >
                    <Code className='w-5 h-5 text-orange-500' />
                  </motion.div>
                  <span className='text-xs text-orange-500 mt-1 font-medium'>
                    Courses
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className='flex flex-col items-center cursor-pointer group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full group-hover:bg-gray-700 transition-all duration-300'
                  >
                    <Zap className='w-5 h-5 text-gray-500 group-hover:text-gray-300' />
                  </motion.div>
                  <span className='text-xs text-gray-500 mt-1 group-hover:text-gray-300'>
                    Live
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className='flex flex-col items-center cursor-pointer group'
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className='w-10 h-10 bg-gray-800 flex items-center justify-center rounded-full group-hover:bg-gray-700 transition-all duration-300'
                  >
                    <User className='w-5 h-5 text-gray-500 group-hover:text-gray-300' />
                  </motion.div>
                  <span className='text-xs text-gray-500 mt-1 group-hover:text-gray-300'>
                    Profile
                  </span>
                </motion.div>
              </div>

              <div className='absolute bottom-1 left-0 right-0 flex justify-center'>
                <div className='w-32 h-1 bg-gray-700 rounded-full'></div>
              </div>
            </motion.div>
          </div>

          <div className=''>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-4xl md:text-5xl py-2 font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent font-roboto'
            >
              Learn on the go
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='text-lg text-gray-300 mb-8 font-inter'
            >
              Take your coding journey anywhere with the ChaiCode mobile app.
              Access courses, join live sessions, and connect with the community
              - all from your pocket.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='space-y-4 mb-8'
            >
              <motion.div
                whileHover={{ x: 5 }}
                className='flex items-center gap-4 group font-inter'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='bg-orange-600/20 p-2 rounded-lg group-hover:bg-orange-600/40 transition-all duration-300'
                >
                  <Zap className='w-5 h-5 text-orange-500' />
                </motion.div>
                <span className='text-gray-200 group-hover:text-white transition-colors duration-300'>
                  Offline course access
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className='flex items-center gap-4 group'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='bg-orange-600/20 p-2 rounded-lg group-hover:bg-orange-600/40 transition-all duration-300'
                >
                  <Bell className='w-5 h-5 text-orange-500' />
                </motion.div>
                <span className='text-gray-200 group-hover:text-white transition-colors duration-300'>
                  Live session notifications
                </span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className='flex items-center gap-4 group'
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='bg-orange-600/20 p-2 rounded-lg group-hover:bg-orange-600/40 transition-all duration-300'
                >
                  <Smartphone className='w-5 h-5 text-orange-500' />
                </motion.div>
                <span className='text-gray-200 group-hover:text-white transition-colors duration-300'>
                  Revision while commuting
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href='https://apps.apple.com/in/app/chaicode/id6504993143'
                  target='_blank'
                  className='flex items-center justify-center gap-2 bg-black hover:bg-brand-primary text-white px-6 py-3 rounded-xl border border-gray-800 transition-all hover:shadow-lg hover:shadow-orange-500/70'
                >
                  <svg
                    viewBox='0 0 384 512'
                    className='w-6 h-6'
                    fill='currentColor'
                  >
                    <path d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z' />
                  </svg>
                  <div className='flex flex-col items-start'>
                    <span className='text-xs'>Download on the</span>
                    <span className='text-lg font-semibold'>App Store</span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href='https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share&pli=1'
                  target='_blank'
                  className='flex items-center justify-center gap-2 bg-black hover:bg-brand-primary text-white px-6 py-3 rounded-xl border border-gray-800 transition-all hover:shadow-lg hover:shadow-orange-500/70'
                >
                  <svg
                    viewBox='0 0 512 512'
                    className='w-6 h-6'
                    fill='currentColor'
                  >
                    <path d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z' />
                  </svg>
                  <div className='flex flex-col items-start'>
                    <span className='text-xs'>Get it on</span>
                    <span className='text-lg font-semibold'>Google Play</span>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
