import "./App.css";
import Contact from "./Components/Contact/contact";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
