import "./App.css";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import MainSection from "./Components/MainSection";
import Blob from "./Blob";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MainSection />
      <Blob />

      <Footer />
    </div>
  );
}

export default App;
