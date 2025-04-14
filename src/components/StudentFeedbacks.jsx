import { Star } from 'lucide-react';
import { Marquee } from './ui/marquee';

export function StudentFeedbacks() {
  return (
    <section id='feedbacks' className='py-12 px-4 max-w-7xl mx-auto'>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold'>
        Our Students Feedback
      </p>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary mt-2'>
        Explore the incredible advantages of enrolling in our courses and
        enhancing your skills
      </p>

      <div className='mt-8 w-full overflow-hidden'>
        <Marquee className='[--duration:25s]' pauseOnHover applyMask={false}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee
          reverse
          className='[--duration:25s]'
          pauseOnHover
          applyMask={false}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>

        <Marquee className='[--duration:25s]' pauseOnHover applyMask={false}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: { image, name, star, description } }) {
  return (
    <div
      className='relative flex h-44 w-96 overflow-hidden border-none rounded-xl border bg-background-secondary text-white'
      key={name}
    >
      <div className='relative h-full w-32 flex-shrink-0 overflow-hidden'>
        <img src={image} alt={name} className='h-full w-full object-cover' />
      </div>
      <div className='px-4 py-2'>
        <span className='block text-lg font-bold text-white'>{name}</span>
        <div className='flex gap-1 mt-1'>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < star ? 'text-yellow-400' : 'text-gray-500'}
              fill={i < star ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className='mt-2 block text-sm text-gray-300'>{description} </span>
      </div>
    </div>
  );
}

const testimonials = [
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
