import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
