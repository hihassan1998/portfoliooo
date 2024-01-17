// import Test from "./Test.jsx"
import "./app.scss"
import Navbar from "../components/navbar/NAvbar";
import Hero from "../components/hero/Hero";


const App = () => {
  return <div>
    <section id="Startsida">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Tjänster">Parallax</section>
    <section>Services</section>
    <section id="Portfölj">Parallax</section>
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
