import Aos from 'aos';
import './App.css';
import About from './components/about/About';
import Blogs from './components/blogs/Blogs';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import HireMe from './components/hire-me/HireMe';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import "aos/dist/aos.css";
import { useEffect } from 'react';
function App() {
  useEffect(() => {
  Aos.init({
      duration: 800, 
      once: true     
    });
  }, []);
  return (
    <div className="app">
      <NavBar/>
      <Hero/>
      <About/>
      <Resume/>
      <HireMe/>
      <Services/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
