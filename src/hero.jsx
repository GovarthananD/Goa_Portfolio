import { motion, useScroll, useTransform } from "framer-motion";
import cube1 from "./assets/cube1.mp4";
import AnimatedHeading from "./animate";
import Govarthanan_FSD_Resume from './assets/Govarthanan_FSD_Resume.pdf';


export default function Hero() {
  const { scrollY } = useScroll();

  const yTitle = useTransform(scrollY, [0, 500], [0, -200]);
  const ySubtitle = useTransform(scrollY, [0, 500], [0, -300]);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center [clip-path:inset(0)]">
      {/* Video Background */}
      <motion.div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover" // <-- added blur
        >
          <source src={cube1} type="video/mp4" />
        </video>
      </motion.div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Text */}
      <motion.h1
        style={{ y: yTitle }}
        className="relative text-white text-6xl md:text-8xl font-bold text-center z-10"
      >
        <AnimatedHeading />
      </motion.h1>

      <motion.p
        style={{ y: ySubtitle }}
        className="relative text-white text-xl md:text-3xl mt-6 z-10 text-center"
      >
        Full Stack Developer | ReactJs | NodeJs | MongoDB
      </motion.p>

      {/* Hire Me Button */}
      <motion.a
        href={Govarthanan_FSD_Resume}
        download="Govarthanan_FSD_Resume"
        animate={{ y: [0, -8, 0] }} // small up-down infinite motion
        transition={{
          duration: 2,       // speed of the animation
          repeat: Infinity,   // infinite loop
          repeatType: "loop", // loops smoothly
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-[rgb(54,65,83)] text-white font-semibold rounded-lg shadow-lg hover:bg-[rgb(44,53,73)] transition-colors duration-300 z-10"
      >
        Hire Me
      </motion.a>

    </div>
  );
}
