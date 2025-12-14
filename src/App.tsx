import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Projects />
      <WorkExperience />
      <Education />
      <Blog />
      <Contact />
    </div>
  );
}