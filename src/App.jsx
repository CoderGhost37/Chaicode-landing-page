import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';
import { TweetLove } from './components/TweetLove';
import { StudentsMarquee } from './components/StudentsMarquee';
import { Cohorts } from './components/Cohorts';
import { StudentFeedbacks } from './components/StudentFeedbacks';
import { UdemyCourses } from './components/Udemy';
import { WhyChaicode } from './components/WhyChaicode';
import { TopicsCloud } from './components/TopicsCloud';

function App() {
  return (
    <main className='bg-background-primary relative w-full'>
      <AppNavbar />
      <Hero />
      <TweetLove />
      <StudentsMarquee />
      <Cohorts />
      <StudentFeedbacks />
      <UdemyCourses />
      <WhyChaicode />
      <TopicsCloud />
    </main>
  );
}

export default App;
