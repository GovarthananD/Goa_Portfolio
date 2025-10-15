import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import goa from "./assets/goa.jpg";
import ParallaxSwiper from "./skillmorphing"; // Ensure this file exports a valid component
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Govarthanan_FSD_Resume from './assets/Govarthanan_FSD_Resume.pdf'

export default function About() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: parallaxRef, inView: parallaxInView } = useInView({ threshold: 0.3, triggerOnce: false });


  return (
    <div className="min-h-screen px-6 pt-12 flex flex-col items-center justify-start text-white bg-black">
      {/* About Me Heading */}
      <h2 className="text-5xl md:text-3xl font-bold text-center py-10 relative inline-block">
        About Me
        <motion.div
          initial={{ width: 0 }}
          animate={aboutInView ? { width: 150 } : { width: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[4px] bg-indigo-500 rounded-full mt-2 mx-auto"
        />
      </h2>

      {/* Image + Paragraph */}
      <div ref={aboutRef} className="flex flex-col md:flex-row items-start gap-8 w-full mt-12">
        <motion.img
          src={goa}
          alt="About"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={aboutInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-white mt-6 md:mt-0 flex flex-col"
        >
          <p className="text-lg md:text-xl leading-relaxed">
            "Full Stack Developer with practical internship experience, skilled in creating dynamic web applications. Driven to craft clean, efficient, and user-focused solutions."

            "Aspiring Full Stack Developer with hands-on experience in building end-to-end web applications. Passionate about coding and solving real-world problems."

            "Full Stack Developer with 3 months of internship experience, experienced in both frontend and backend development. Enthusiastic about turning ideas into interactive digital experiences."
          </p>
    
              {/* Parallax Swiper */}
          <div ref={parallaxRef} className="mt-8 md:mt-12 w-full">
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
            <ParallaxSwiper inView={parallaxInView} />
          </div>
        </motion.div>
      </div>

      {/* Skills Section (Independent) */}
      <div className="mt-20 w-full">
        <SkillParallax />
      </div>
    </div>
  );
}












const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Material UI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "NodeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Netlify", img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
  { name: "Render", img: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" },
];

function SkillParallax() {
  return (
    <div className="w-full bg-black text-white">
      {/* Animated Heading */}
      <div className="text-center mb-10 relative">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold inline-block relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My <span className="text-indigo-400">Skills</span>
          <motion.span
            className="block h-1 bg-indigo-500 mx-auto mt-3 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </div>

      {/* Swiper Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={2000} // transition speed
          autoplay={{
            delay: 0, // continuous scroll
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-3xl shadow-lg flex flex-col items-center justify-center text-center p-6 transition-transform duration-300 hover:scale-110 hover:shadow-indigo-500/50"
              style={{ width: "200px", height: "240px", marginRight: "20px" }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-20 h-20 object-contain mx-auto mb-4"
              />
              <p className="text-white font-semibold text-lg">{skill.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


