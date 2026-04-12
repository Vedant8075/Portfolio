import { Navbar } from "./components/Navbar";
import { Skills } from "./sections/Skills";
import { Hero } from "./sections/Hero";
import ContactUs from "./sections/ContactUs"
import TargetCursor from "../component/TargetCursor";
import Experience from "./sections/Experience";
import {Projects} from "./sections/Projects";
import { Footer } from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <Navbar />
      <main>
        <Hero></Hero>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
        <ContactUs></ContactUs>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
