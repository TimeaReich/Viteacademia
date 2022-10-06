import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
