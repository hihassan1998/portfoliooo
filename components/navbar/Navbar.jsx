import "./navbar.scss";
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 2 }}
        >
          Hassan Hussain 
        </motion.span>

        <motion.div className="social"
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:1}}
        transition={{duration:2}}>
          <a href="https://www.facebook.com/hassan.idr1/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/hassan-hussain-3b840429a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
            </a>  
          <a href="https://github.com/hihassan1998" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
