// import Test from "./Test.jsx"
import "./app.scss"
import Navbar from "../components/navbar/NAvbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Startsida">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Tjänster"> <Parallax type= "services"/> </section>
    <section>Services</section>
    <section id="Portfölj"> <Parallax type= "portfolio"/> </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Kontakt">Contact</section>

    {/* <Test/>
    <Test/>
    <Test/> */}

  </div>;
};

export default App;
