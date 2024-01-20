import "./services.scss";
import {FaCode, FaReact, FaServer, FaDatabase} from "react-icons/fa"
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from 'react-icons/di';
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div className="Services">
        <motion.div className="textContainer">
        <p> Frontend Utvecklare | Backend Utvecklare | Mitt focus är mot frontend utveckling och MERN fullstack utveckling <FaDatabase/> <SiExpress/> <FaReact/> <DiNodejsSmall/> <br /> 
        <FaCode/> Aspirerande Full Stack Utveckalare
        </p> 
        <hr />
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    Unika <br /> idéer
                </h1>
            </div>
            <div className="title">
            <h1>
                For Your<br /> Business
            </h1>
            <button>WHAT I DO ?</button>
        </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempoSed do eiusmod r incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                </p> 
                <button>Gå</button>              
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services
