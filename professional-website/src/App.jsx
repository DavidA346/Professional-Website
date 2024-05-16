import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Education from './components/Education/Education.jsx';
import Experience from './components/Experience/Experience.jsx';
import Misc from './components/Misc/Misc.jsx';
import Footer from './components/Footer/Footer.jsx';
import ParticlesComponent from './components/Particle.jsx';

function App() {
  return(
    <>
      <Navbar />
      <ParticlesComponent id="particles"/>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Misc />
      <Footer />
    </>
  );
}

export default App
