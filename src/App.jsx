import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';
import { StudentsMarquee } from './components/StudentsMarquee';

function App() {
  return (
    <main className='bg-background-primary relative w-full'>
      <AppNavbar />
      <Hero />
      <StudentsMarquee />
    </main>
  );
}

export default App;
