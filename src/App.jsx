import Header from "./components/Header/Header";
import Banner from "./components/Shared/Banner";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-sans">
      <div className="sticky top-0 z-10">
        <Header />
        <Banner />
      </div>
      <Hero />
      <main className="px-6 flex flex-col items-center">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
