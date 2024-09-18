import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="font-sans">
      <div className="fixed w-full top-0 left-0">
        <Header />
        <Banner />
      </div>
      <main className="mt-[6.875rem] sm:mt-[8.875rem]">
        <Hero />
      </main>
    </div>
  );
}

export default App;
