import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="font-sans">
      <div className="sticky top-0 z-10">
        <Header />
        <Banner />
      </div>
      <Hero />
      <main className="px-4 flex flex-col items-center">
        <About />
      </main>
    </div>
  );
}

export default App;
