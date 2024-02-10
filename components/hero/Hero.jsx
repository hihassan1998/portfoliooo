import './hero.scss'
import {motion} from "framer-motion"
import Typewriter from "react-typewriter-effect";

const TypewriterText = ({ text, speed = 50 }) => {
  return <Typewriter typing={1} pause={1000} speed={speed} eraseDelay={2000} text={text} />;
};

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0, opacity: 1,
    transition:{
      duration:1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y: 10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  },
};
const sliderVariants = {
  initial:{
    x:0,
  },
  animate: {
    x:"-200%",
    transition:{
      repeat:Infinity ,
      repeatType: "mirror",
      duration:20,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className='wrapper'>
          <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate" >
          <motion.h2 variants={textVariants}>Hassan Hussain</motion.h2>
        <h1>
          <TypewriterText text="Frontend och  Webb Utvecklare" speed={50} />
        </h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>Senaste arbete</motion.button>
                <motion.button variants={textVariants}>Kontakta mig</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""  />
        </motion.div>
        </div>
        <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
          MERN Fullstack Utveckling
        </motion.div>
        <div className='imageContainer'>
            <img src="./bluehalf.png" alt="" />
        </div>
        
    </div>
  );
};

export default Hero
