import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { MyStory } from './components/sections/MyStory';
import { Coursework } from './components/sections/Coursework';
import { IEExperiences } from './components/sections/IEExperiences';
import { FinalReflection } from './components/sections/FinalReflection';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <MyStory />
        <Coursework />
        <IEExperiences />
        <FinalReflection />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
