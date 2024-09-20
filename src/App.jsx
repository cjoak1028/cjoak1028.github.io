import { useRef } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  return (
    <div className="font-sans">
      <Header
        navLinks={{
          About: aboutRef,
          Projects: projectsRef,
          Contact: contactRef,
        }}
      />
      <Hero />
      <main className="px-6 flex flex-col items-center">
        <About propRef={aboutRef} />
        <Projects propRef={projectsRef} />
        <Contact propRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
