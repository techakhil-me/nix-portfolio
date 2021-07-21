import React from "react";
import "./Loader.css";

import { motion } from "framer-motion";

function Loader({setLoading}) {
  return (
    <div className="Loader">
<div className="loaderCont">
      <motion.div layoutId="main-name" onClick={()=>{setLoading(false)}} className="name title gradient loader__name">NIKHIL</motion.div>
</div>
     
    </div>
  );
}

export default Loader;
