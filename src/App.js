import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import QuoteStrip from "./Components/QuoteStrip";
import CourseSection from "./Components/CourseSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MainSection />
      <QuoteStrip />
      <CourseSection />
      <Footer />
    </div>
  );
}

export default App;
