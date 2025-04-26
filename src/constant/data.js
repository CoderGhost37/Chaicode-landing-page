import {
  CircleDollarSign,
  CircleUserRound,
  Code,
  CodesandboxIcon,
  GitPullRequest,
  SquareStack,
  SquareTerminal,
} from 'lucide-react';

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

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

export const tweetIds = [
  '1907045909394788416',
  '1906390359841640771',
  '1911327271782150213',
  '1906393735203836076',
  '1907045909394788416',
  '1906390359841640771',
  '1911327271782150213',
  '1906393735203836076',
];

export const udemyCourses = [
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

export const topics = [
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

export const cohorts = [
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
    videoUrl: 'https://www.youtube.com/embed/yG8JMlldoCE',
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
    videoUrl: 'https://www.youtube.com/embed/Fw3FezexzV0',
    startsOn: 'Constantly going',
    duration: 'Always running',
    originalPrice: 599,
    discountedPrice: 299,
    href: 'https://courses.chaicode.com/learn/batch/Coding-Hero-2025',
  },
];

export const testimonials = [
  {
    name: 'John Doe.',
    star: 5,
    image:
      'https://plus.unsplash.com/premium_photo-1717529137991-510ad3be15d9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
  },
  {
    name: 'Paul A',
    star: 4,
    image:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
  },
  {
    name: 'Jeff Roe',
    star: 5,
    image:
      'https://images.unsplash.com/photo-1560298803-1d998f6b5249?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
  },
  {
    name: 'Mex Q',
    star: 4,
    image:
      'https://images.unsplash.com/photo-1518287010730-4386819bf3e9?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
  },
  {
    name: 'Cristina W',
    star: 3,
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur!',
  },
  {
    name: 'Lanna Del Rey',
    star: 5,
    image:
      'https://images.unsplash.com/photo-1581092916357-5896ebc48073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
  },
  {
    name: 'Paul Logan',
    star: 4,
    image:
      'https://images.unsplash.com/photo-1483389127117-b6a2102724ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ',
  },
];

export const cardData = [
  {
    icon: CircleUserRound,
    title: 'Taught by Professionals',
    desc: 'Our cohorts are being taught by top industry experts and educators.',
  },
  {
    icon: CircleDollarSign,
    title: 'Bounties',
    desc: 'Earn rewards, from Cash to MacBook. Keeps you motivated to work hard.',
  },
  {
    icon: Code,
    title: 'Coding hostels',
    desc: 'There is nothing like late night discussion with fellow learners and solving bugs.',
  },
  {
    icon: GitPullRequest,
    title: 'Peer Code Reviews',
    desc: 'With our internal tools like Masterji, every code assignment gets feedback to improve your code.',
  },
  {
    icon: SquareTerminal,
    title: 'Leet Lab',
    desc: 'Our in-house built LeetCode style platform that helps you to understand foundation of programming language.',
  },
  {
    icon: SquareStack,
    title: 'Revision classes',
    desc: 'We have so many peer classes by fellow learners that you get so many chances to learn that topic.',
  },
];

export const footer = {
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
