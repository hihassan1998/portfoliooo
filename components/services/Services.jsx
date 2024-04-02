import "./services.scss";
import {FaCode, FaReact, FaServer, FaDatabase} from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from 'react-icons/di';
import { motion , animate, useInView  } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
    }
}
const Services = () => {

    const ref =useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div className="Services" 
        variants={variants}
        initial="initial"
        // animate="animate"
        // whileInView = "animate"
        ref={ref}
        animate={ "animate"}
       >

      <div className="mobServices" 
        variants={variants}
        initial="initial"
        ref={ref}
        animate={"animate"}
       > 
        
        <motion.div className="textContainer"  variants={variants}>
        <p> MERN fullstack utveckling <FaDatabase/> <SiExpress/> <FaReact/> <DiNodejsSmall/> <br /> 
        <FaCode/> Aspirerande Full Stack Utveckalare
        </p> 
        <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
      <div className="title">
        <img src="./people.webp" alt="" />
        <h1>
          <motion.b whilehover={{color:"orange"}}>Unika </motion.b> idéer
        </h1>
      </div>
      <div className="title">
        <h1>
          <motion.b whilehover={{color:"orange"}}>Till er </motion.b> företag
        </h1>
        <button>VAD JAG GÖR?</button>
      </div>
    </motion.div>
        <motion.div className="listContainer"  variants={variants}>
            <div className="box" whilehover={{background:"lightgray", color:"black"}}>
                <h2>MERN FullStack</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempoSed do eiusmod r incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whilehover={{background:"lightgray", color:"black"}}>
                <h2>Javascript</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whilehover={{background:"lightgray", color:"black"}}>
                <h2>Python</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whilehover={{background:"lightgray", color:"black"}}>
                <h2>React,Express,SQL</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
        </motion.div>
        </div> 
    </motion.div>
  )
}

export default Services
