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
      <div className="flex flex-col lg:flex-row lg:px-24">
        <div className="lg:w-1/2 lg:sticky lg:top-[8.25rem] lg:h-[calc(100vh-8.25rem)] lg:py-24">
          <Hero />
        </div>
        <div className="lg:w-1/2 lg:py-24">
          <main>
            <About propRef={aboutRef} />
            <Projects propRef={projectsRef} />
            <Contact propRef={contactRef} />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
