import { Tweet } from 'react-tweet';

const tweetIds = [
  '1907045909394788416',
  '1906390359841640771',
  '1911327271782150213',
];

export function TweetLove() {
  return (
    <section id='tweet-love' className='py-12 max-w-5xl mx-auto px-4'>
      <p className='text-center text-base md:text-xl font-medium text-text-secondary'>
        Love that we get from our community
      </p>
      <p className='text-center text-4xl md:text-6xl text-text-primary font-semibold mt-2'>
        Tweet Love
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4'>
        {tweetIds.map((tweetId, index) => (
          <div key={index} className='h-fit relative'>
            <Tweet id={tweetId} />
          </div>
        ))}
      </div>
    </section>
  );
}
