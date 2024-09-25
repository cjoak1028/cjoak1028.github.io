import { useRef } from "react";
import Header from "src/features/Header/Header";
import Hero from "src/features/Hero/Hero";
import About from "src/features/About/About";
import Projects from "src/features/Projects/Projects";
import Contact from "src/features/Contact/Contact";
import Footer from "src/features/Footer/Footer";

const Home = () => {
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
      <main>
        <About propRef={aboutRef} />
        <Projects propRef={projectsRef} />
        <Contact propRef={contactRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
