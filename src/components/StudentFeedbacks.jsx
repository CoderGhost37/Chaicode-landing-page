import { Star } from 'lucide-react';
import { Marquee } from './ui/marquee';
import { testimonials } from '../constant/data';

export function StudentFeedbacks() {
  return (
    <section id='feedbacks' className='py-24 px-4 max-w-7xl mx-auto'>
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
