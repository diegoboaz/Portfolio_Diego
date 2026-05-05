import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Insights from './components/Insights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Insights />
        <Contact />
      </main>
    </div>
  );
}

export default App;
