import { Hero } from './components/Hero';
import { AppNavbar } from './components/Navbar';

function App() {
  return (
    <main className='bg-background-primary relative w-full'>
      <AppNavbar />
      <Hero />
    </main>
  );
}

export default App;
