import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar  */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} >Ansh Varshney</motion.span>
        <div className="social w-16">
          <a href="https://www.linkedin.com/in/varshneyansh11/"><img src="/assets/t_500x300.jpeg" alt="" /></a>
          <a href="https://github.com/varshneyansh1">
          
          <img className="w-16 h-6" src="https://img.icons8.com/?size=100&id=g7P0iny5Rros&format=png&color=000000" alt="" />
        
          </a>
      
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
