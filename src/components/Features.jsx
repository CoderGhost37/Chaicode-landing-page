import { ArrowRight, ChevronsRight } from 'lucide-react';
import { cn } from '../lib/utils';

const AVATARS = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=facearea&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=64&h=64&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=64&h=64&q=80',
];

export function Features() {
  return (
    <section
      id='features'
      className='min-h-screen flex flex-col justify-center items-center py-8'
    >
      <div className='w-full max-w-6xl px-2 grid gap-6 grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1'>
        <NeonCard className='min-h-[250px] col-span-1 row-span-1 flex flex-col justify-between backdrop-blur-[2px]'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-2'>Community</h2>
            <p className='text-gray-300 max-w-md'>
              Join a thriving online community of learners and mentors. Grow
              your skills through collaboration and shared insights.
            </p>
          </div>
          <div className='flex items-center justify-end mt-8'>
            <div className='flex items-center bg-[#1b1b1f]/70 rounded-lg px-3 py-2 min-w-[140px] ring-1 ring-[#FF7700]/40'>
              <div className='w-2 h-2 bg-[#FF7700] rounded-full mr-2 animate-pulse' />
              <input
                className='bg-transparent border-0 outline-none text-sm text-white placeholder-gray-400'
                placeholder='Search members'
                disabled
              />
              <button
                disabled
                className='ml-2 px-2 py-1 rounded bg-[#FF7700] text-white text-xs shadow transition-opacity opacity-70 cursor-default'
              >
                Go
              </button>
            </div>
          </div>
        </NeonCard>

        <NeonCard className='min-h-[250px] col-span-1 row-span-1 flex flex-col justify-between mt-6 md:mt-0'>
          <div>
            <h2 className='text-3xl font-bold text-white mb-2'>Assignments</h2>
            <p className='text-gray-300 max-w-md'>
              Take on challenging assignments to put your skills to the test and
              improve your coding expertise.
            </p>
          </div>
          <div className='flex items-center justify-end mt-8'>
            <button className='flex items-center gap-2 bg-[#FF7700] hover-scale text-white px-5 py-2 text-base rounded-full shadow transition hover:shadow-[0_0_16px_4px_#ff7700cc] font-semibold group'>
              New Assignment
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition' />
            </button>
          </div>
        </NeonCard>
      </div>

      <div className='relative flex justify-center w-full mt-6 max-w-6xl px-2'>
        <NeonCard className='w-full flex-row items-center flex min-h-[125px]'>
          <div className='flex flex-col md:flex-row gap-9 w-full justify-between items-center'>
            <div className='flex-1 text-left'>
              <h3 className='text-2xl font-bold text-white mb-1'>
                Collaborate
              </h3>
              <p className='text-gray-300 max-w-lg'>
                Team up with peers in real time, solve challenges together, and
                improve your understanding &amp; skills.
              </p>
            </div>

            <div className='flex items-center gap-1 md:gap-3'>
              {AVATARS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Avatar ${i + 1}`}
                  className='w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#FF7700] object-cover shadow-md animate-fade-in'
                  style={{ marginLeft: i === 0 ? 0 : '-12px' }}
                />
              ))}
              <span className='ml-3 bg-white/10 text-[#FF7700] text-xs font-bold px-3 py-1 rounded-lg'>
                +5
              </span>
            </div>

            <button className='flex items-center gap-2 bg-[#101014] border border-[#FF7700] hover:bg-[#FF7700]/20 px-4 py-2 rounded-full text-[#FF7700] font-medium shadow hover:scale-105 transition'>
              Collaborate
              <ChevronsRight className='w-4 h-4' />
            </button>
          </div>
        </NeonCard>
      </div>
    </section>
  );
}

function NeonCard({ children, className }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-[#101014] shadow-lg border border-[#FF7700]/40 flex flex-col justify-between',
        'before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-[#FF7700] before:opacity-60 before:pointer-events-none',
        'hover:shadow-[0_0_40px_0_#ff770099,0_4px_32px_0_#ff770055] transition-shadow duration-300 animate-fade-in',
        className
      )}
      style={{
        boxShadow:
          '0 0 20px 2px #FF7700AA, 0 1.5px 8px 0 #FF770022, 0 0 0px 0 #000',
      }}
    >
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div
          className='w-full h-full'
          style={{
            background:
              'radial-gradient(circle at 70% 30%, #FF770022 20%, transparent 70%)',
            opacity: 0.85,
          }}
        />
      </div>
      <div className='relative z-10 p-8'>{children}</div>
    </div>
  );
}
