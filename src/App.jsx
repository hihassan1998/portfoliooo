// import Test from "./Test.jsx"
import "./app.scss"
import Navbar from "../components/navbar/NAvbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Startsida">
        <Navbar />
        <Hero />
      </section>
      <section id="Tjänster">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfölj">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="Kontakt">Contact</section>

      {/* 
        <Test/>
        <Test/>
        <Test/> 
      */}
    </div>
  );
};


export default App;
