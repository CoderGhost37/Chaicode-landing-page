import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';
import { TweetLove } from './components/TweetLove';
import { StudentsMarquee } from './components/StudentsMarquee';
import { Cohorts } from './components/Cohorts';
import { StudentFeedbacks } from './components/StudentFeedbacks';
import { UdemyCourses } from './components/Udemy';
import { WhyChaicode } from './components/WhyChaicode';
import { TopicsCloud } from './components/TopicsCloud';
import { JoinCommunity } from './components/JoinCommunity';
import { FreeApi } from './components/FreeApi';
import { KeyBenefitsOfCohort } from './components/KeyBenefitsOfCohort';
import AppDownload from './components/AppDownload';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className='bg-background-primary relative w-full scroll-smooth'>
      <AppNavbar />
      <Hero />
      <TweetLove />
      <StudentsMarquee />
      <Cohorts />
      <StudentFeedbacks />
      <UdemyCourses />
      <KeyBenefitsOfCohort />
      <WhyChaicode />
      <TopicsCloud />
      <JoinCommunity />
      <FreeApi />
      <AppDownload />
      <Features />
      <Footer />
    </main>
  );
}

export default App;
