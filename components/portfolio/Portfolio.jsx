import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Typewriter from "react-typewriter-effect";
 


  
const items = [
    {
        id:1,
        title:"Technotes App - MERN",
        img:"./techblack.png",
        desc:"A subsitute for sticknotes system at a tech company digitalized.",
        demoLink:"https://github.com/hihassan1998/MERNapp",

    },
    {
        id:2,
        title:"Online Course App - Django Stack",
        img:"./courseapp.png" ,
        desc:"Django stack utelized to create a online course web application with three sample courses and PostgresSQL used on the backend as Database for the app.",
        demoLink:"https://github.com/hihassan1998/djangoCourseApp/blob/main/README.md",
    },
    {
        id:3,
        title:"360Customer -  ",
        img:  "./360home.png" ,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",
        demoLink:"https://github.com/hihassan1998/expressBookReviews/tree/main/final_project/router",
    },
    {
        id:4,
        title:"Sentiments Analyzer - IBM Watson AI",
        img:"./watsonai_csharp.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",
    },
    {
      id:5,
        title:"Django Course App",
        img:"./watsonai_csharp.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque."
    },
    {
      id:6,
        title:"Django Course App",
        img:"./watsonai_csharp.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",

    },
];
const TypewriterText = ({ text, speed = 50 }) => {
  return <Typewriter typing={1} pause={1000} speed={speed} eraseDelay={2000} text={text} />;
};


const Single = ({ item }) =>{

    const ref = useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["end end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
        <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="textContainer" style={y}>
            <h2>
            <TypewriterText text={item.title} />
            </h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
            <button>See Demo</button>
            </a>
          </motion.div>
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {

    const ref = useRef()
    

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })



  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>
                Featured Works
            </h1>
            <motion.div style={{scaleX }} className="progressBar"></motion.div>
        </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
