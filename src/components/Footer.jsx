import { motion } from 'motion/react';
import Logo from '../assets/chaicode-white.png';
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const footer = {
  socials: [
    {
      icon: FaYoutube,
      name: 'YouTube',
      link: 'https://www.youtube.com/@chaiaurcode',
    },
    {
      icon: FaInstagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/hiteshchoudharyofficial/?hl=en',
    },
    {
      icon: FaGithub,
      name: 'Github',
      link: 'https://github.com/hiteshchoudhary',
    },
    {
      icon: FaXTwitter,
      name: 'X',
      link: 'https://x.com/hiteshdotcom',
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      link: 'https://in.linkedin.com/in/hiteshchoudhary',
    },
    {
      icon: FaDiscord,
      name: 'Discord',
      link: 'https://discord.com/invite/WDrH3zuWFb',
    },
  ],
  products: [
    {
      name: 'Courses',
      link: 'https://courses.chaicode.com/learn',
    },
    {
      name: 'Cohort',
      link: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
    },
    {
      name: 'Coding Hero',
      link: 'https://courses.chaicode.com/learn/batch/about?bundleId=226894',
    },
    {
      name: 'FreeAPI',
      link: 'https://freeapi.app/',
    },
    { name: 'Masterji', link: 'https://masterji.co/login' },
  ],
  resources: [
    { name: 'Docs', link: 'https://docs.chaicode.com' },
    { name: 'Privacy Policy', link: 'https://www.chaicode.com/privacy-policy' },
    {
      name: 'Terms of Service',
      link: 'https://www.chaicode.com/terms-of-services',
    },
    { name: 'Pricing Policy', link: 'https://www.chaicode.com/pricing-policy' },
    { name: 'Refund Policy', link: 'https://www.chaicode.com/refund-policy' },
  ],
};

export function Footer() {
  return (
    <footer className='bg-black text-white px-6 md:px-16 py-12 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-400 via-brand-primary to-gray-400' />

      <div className='max-w-7xl max-auto flex flex-col md:flex-row justify-between gap-12 z-10 relative'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className='space-y-4 max-w-sm'
        >
          <img src={Logo} alt='logo' className='h-8 w-auto' />
          <p className='text-sm text-gray-300'>Home for programmers</p>
          <div className='flex gap-4 text-lg'>
            {footer.socials.map((social) => (
              <a
                href={social.link}
                target='_blank'
                className='text-gray-300 hover:text-text-primary transition duration-200 hover:-translate-y-0.5'
              >
                <social.icon />
              </a>
            ))}
          </div>
          <p className='text-xs text-gray-300 pt-4'>
            © 2025 ChaiCode. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-col sm:flex-row gap-12 text-sm'
        >
          <div>
            <h4 className='font-semibold mb-3'>Products</h4>
            <ul className='space-y-2 text-gray-300'>
              {footer.products.map((item) => (
                <li key={item}>
                  <a href={item.link} className='hover:text-text-primary'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-3'>Resources</h4>
            <ul className='space-y-2 text-gray-300'>
              {footer.resources.map((item) => (
                <li key={item}>
                  <a href={item.link} className='hover:text-text-primary'>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className='text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[15vw] pt-8 text-center relative font-bold bg-gradient-to-b from-brand-primary to-black text-transparent bg-clip-text select-none'
      >
        CHAICODE
      </motion.div>
    </footer>
  );
}
