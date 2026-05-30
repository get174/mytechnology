import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CursorGlow from './components/CursorGlow';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <CursorGlow />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
