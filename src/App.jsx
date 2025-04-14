import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';
import { TweetLove } from './components/TweetLove';
import { StudentsMarquee } from './components/StudentsMarquee';
import { Cohorts } from './components/Cohorts';

function App() {
  return (
    <main className='bg-background-primary relative w-full'>
      <AppNavbar />
      <Hero />
      <TweetLove />
      <StudentsMarquee />
      <Cohorts />
    </main>
  );
}

export default App;
