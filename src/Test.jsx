import {motion } from "framer-motion"
import { useState } from "react"

const Test = () => {

  const [open, setOpen] = useState(false)

  const variants = {
    visible:{opacity:1, x:800, transition :{duration:2}},
    hidden:{opacity:0},
  }

  return (
    <div className="course">
    <motion.div className="box"
     variants={variants}
     //initial="hidden"
     //animate="visible"
     animate={open ? "visible" : "hidden"}
     ></motion.div>
     <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
    </div>
  )
}

export default Test
//App.scss
// .course{
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .box{
//   width: 200px;
//   height: 200px;
//   background-color: white;
// }