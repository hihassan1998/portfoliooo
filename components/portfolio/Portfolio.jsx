import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Typewriter from "react-typewriter-effect";
 


  
const items = [
    {
        id:1,
        title:"React-App",
        img:"./reactapp.jpg.png",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",
        demoLink:"https://hihassan1998.github.io/calculator/",

    },
    {
        id:2,
        title:"Shopping Cart",
        img:"https://img.freepik.com/premium-vector/shopping-basket-vector-illustration_135595-41139.jpg?w=740",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",
        demoLink:"https://hihassan1998.github.io/kduia-shopping-app/",
    },
    {
        id:3,
        title:"Express.js Bookstore Server",
        img:  "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=740&t=st=1707232782~exp=1707233382~hmac=15cb390713fbe11594c1d734aabf079a8d24e96020f426ef9c7e87ef579b1c75" ,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",
        demoLink:"https://github.com/hihassan1998/expressBookReviews/tree/main/final_project/router",
    },
    {
        id:4,
        title:"C# applications",
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
