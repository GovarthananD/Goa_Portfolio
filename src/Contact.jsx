import React from "react";
import { motion } from "framer-motion";
import Wavify from "react-wavify";

const contactItems = [
  { icon: "📧", label: "Email", value: "govarthananduraisamy@gmail.com", link: "govarthananduraisamy@gmail.com" },
  { icon: "📱", label: "Mobile", value: "+91 8220839008", link: "tel:+91 8220839008" },
  { icon: "🔗", label: "LinkedIn", value: "Profile", link: "https://www.linkedin.com/in/govarthanan-duraisamy-9185a22a2" },
  { icon: "💻", label: "GitHub", value: "github.com/Govarthanan D", link: "https://github.com/GovarthananD" },
];

const Contact = () => {
  return (
    <section className="relative min-h-screen w-full py-16 px-4 md:px-12 text-white overflow-hidden bg-black">
      {/* Animated Heading */}
      <div className="text-center mb-12 z-20 relative">
        <motion.h2
          className="text-4xl font-bold inline-block relative text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Me
          <motion.span
            className="block h-1 bg-blue-500 mx-auto mt-3 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </div>

      {/* Responsive Grid with subtle infinite animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl mx-auto relative z-20 pb-32">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }} // small float up and down
            transition={{ repeat: Infinity, repeatType: "loop", duration: 6 + index }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(34,36,40)] p-6 rounded-xl flex items-center gap-4 shadow-lg transition-transform duration-300 hover:shadow-2xl hover:scale-105 hover:bg-[rgb(44,50,65)]"
            >
              <motion.span
                className="text-3xl"
                whileHover={{ rotate: 15, scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.span>
              <div className="flex flex-col">
                <span className="font-semibold">{item.label}</span>
                <span className="text-gray-300">{item.value}</span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>


      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full h-48 z-10">
        <Wavify
          fill="#3e414dff"
          paused={false}
          options={{ height: 35, amplitude: 40, speed: 0.15, points: 4 }}
          className="absolute bottom-0 left-0 w-full"
        />
        <Wavify
          fill="#7d7f8cff"
          paused={false}
          options={{ height: 28, amplitude: 35, speed: 0.2, points: 3 }}
          className="absolute bottom-0 left-0 w-full"
        />
        <Wavify
          fill="#21242fff"
          paused={false}
          options={{ height: 22, amplitude: 30, speed: 0.25, points: 5 }}
          className="absolute bottom-0 left-0 w-full"
        />
      </div>
    </section>
  );
};

export default Contact;
