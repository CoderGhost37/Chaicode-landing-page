'use client';

import { motion } from 'framer-motion';

import HtmlLogo from '../assets/topics/html.png';
import CssLogo from '../assets/topics/css.png';
import JavaScriptLogo from '../assets/topics/javascript.png';
import ReactjsLogo from '../assets/topics/react.png';
import NodejsLogo from '../assets/topics/node.png';
import NextjsLogo from '../assets/topics/nextjs.png';
import PythonLogo from '../assets/topics/python.png';
import JavaLogo from '../assets/topics/java.png';
import CppLogo from '../assets/topics/cpp.png';
import DockerLogo from '../assets/topics/docker.png';
import DjangoLogo from '../assets/topics/django.svg';
import KubernetesLogo from '../assets/topics/kubernetes.png';
import GolangLogo from '../assets/topics/golang.png';
import McpServerLogo from '../assets/topics/mcp.png';

export function TopicsCloud() {
  return (
    <section id='topics' className='py-12 px-4 max-w-5xl mx-auto'>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold'>
        Topics Cloud
      </p>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'>
        You can find videos and courses on topics and much more
      </p>

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
        className='mr-2 rounded-full'
      />
      {topic.name}
    </motion.a>
  );
}

const topics = [
  {
    name: 'JavaScript',
    logo: JavaScriptLogo,
    videoUrl: 'https://www.youtube.com/watch?v=Hr5iLG7sUa0',
  },
  {
    name: 'Python',
    logo: PythonLogo,
    videoUrl: 'https://www.youtube.com/watch?v=Ca5DLSDfPec',
  },
  {
    name: 'NextJs',
    logo: NextjsLogo,
    videoUrl: 'https://www.youtube.com/watch?v=OgS1ZWZItno',
  },
  {
    name: 'Django',
    logo: DjangoLogo,
    videoUrl: 'https://www.youtube.com/watch?v=j6szNSzw4BU',
  },
  {
    name: 'Docker',
    logo: DockerLogo,
    videoUrl: 'https://www.youtube.com/watch?v=rr9cI4u1_88',
  },
  {
    name: 'ReactJs',
    logo: ReactjsLogo,
    videoUrl: 'https://www.youtube.com/watch?v=vz1RlUyrc3w',
  },
  {
    name: 'Kubernetes',
    logo: KubernetesLogo,
    videoUrl: 'https://www.youtube.com/watch?v=7XDeI5fyj3w',
  },
  {
    name: 'NodeJs',
    logo: NodejsLogo,
    videoUrl: 'https://www.youtube.com/watch?v=ooBxSg1Cl1w',
  },
  {
    name: 'HTML',
    logo: HtmlLogo,
    videoUrl: 'https://www.youtube.com/watch?v=XmLOwJHFHf0',
  },
  {
    name: 'CSS',
    logo: CssLogo,
    videoUrl: 'https://www.youtube.com/watch?v=aLzfFJb8rWo',
  },
  {
    name: 'Java',
    logo: JavaLogo,
    videoUrl: 'https://www.youtube.com/watch?v=Ev7-pchAFRM',
  },
  {
    name: 'C++',
    logo: CppLogo,
    videoUrl: 'https://www.youtube.com/watch?v=gCkPJTSZ9mU',
  },
  {
    name: 'React Native',
    logo: ReactjsLogo,
    videoUrl: 'https://www.youtube.com/watch?v=UwFFsS33xG8',
  },
  {
    name: 'GoLang',
    logo: GolangLogo,
    videoUrl: 'https://www.youtube.com/watch?v=JoJ8Sw5Yb4c',
  },
  {
    name: 'MCP Server',
    logo: McpServerLogo,
    videoUrl: 'https://www.youtube.com/watch?v=dZyQNy3-HjU',
  },
];
