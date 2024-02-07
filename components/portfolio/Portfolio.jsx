import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"React-App",
        img:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2150394443.jpg?w=740&t=st=1707232782~exp=1707233382~hmac=15cb390713fbe11594c1d734aabf079a8d24e96020f426ef9c7e87ef579b1c75",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",

    },
    {
        id:2,
        title:"Express.js ",
        img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/gamer-dude-ii-mindy-sommers.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",

    },
    {
        id:3,
        title:"Express.js Bookstore Server",
        img:"https://images.freeimages.com/vhq/images/previews/d50/butterfly-papilio-philenor-side-clip-art-545705.jpg?fmt=webp&w=500",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",

    },
    {
        id:4,
        title:"C# applications",
        img:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/star-droid-watercolor-3-naxart-studio.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vitae facilis expedita quae earum a consequuntur eos quam commodi minima unde explicabo eius optio numquam magni quaerat laboriosam, autem neque.",

    },
];

const Single = ({ item }) =>{

    const ref = useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref,
        //offset: ["end end", "start start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                <motion.div className="textContainer" style={y}>
                    <h2 >
                        {item.title}
                    </h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
              </div>
            </div>
        </section>
    )
}

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
