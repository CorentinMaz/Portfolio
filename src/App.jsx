import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AnimatedBackground } from "./components/AnimatedBackground";
import {Helmet} from "react-helmet"
import { LanguageProvider } from "./i18n";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Logo } from './components/Logo';

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: 'ease-out-quart', once: true, offset: 40 });
  }, []);
  return (
    <LanguageProvider>
      <div className="App">
        <AnimatedBackground />
        <Helmet>
          <meta charSet='utf-8' />
          <title>Portfolio Corentin</title>
        </Helmet>
        <Logo />
        <Banner />
        <AboutMe />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
