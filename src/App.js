import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import QuoteStrip from "./Components/QuoteStrip";
import Courses from "./Components/Courses";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MainSection />
      <QuoteStrip />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
