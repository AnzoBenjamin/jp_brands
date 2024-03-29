import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
interface Props {
  children: JSX.Element;
  classes: any;
}
const RevealImage = ({ children, classes }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
        mainControls.start("visible")
    }
  },[isInView])
  return (
    <motion.div
      className={classes}
      variants={{
        hidden: { scale:0.25 },
        visible: { scale:1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default RevealImage;
