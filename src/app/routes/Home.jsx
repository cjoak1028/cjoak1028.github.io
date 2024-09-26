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
      <div className="flex flex-col lg:flex-row py-12 lg:py-0 px-6 sm:px-12 lg:px-24 lg:max-w-screen-xl mx-auto">
        <div className="lg:w-1/2 lg:sticky lg:top-[8.25rem] lg:h-[calc(100vh-8.25rem)] lg:py-24">
          <Hero />
        </div>
        <main className="lg:w-1/2 pt-24 lg:py-24">
          <About propRef={aboutRef} />
          <Projects propRef={projectsRef} />
          <Contact propRef={contactRef} />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
