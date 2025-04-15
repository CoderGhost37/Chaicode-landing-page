import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';
import { TweetLove } from './components/TweetLove';
import { StudentsMarquee } from './components/StudentsMarquee';
import { Cohorts } from './components/Cohorts';
import { StudentFeedbacks } from './components/StudentFeedbacks';
import { UdemyCourses } from './components/Udemy';

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
    </main>
  );
}

export default App;
