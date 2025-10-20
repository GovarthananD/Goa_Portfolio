import React from "react";
import { motion } from "framer-motion";
import justice from './assets/justice.png';
import Netflix from './assets/Netflix.png';
import IMDB from './assets/IMDB.png';
import blogs from './assets/blogs.png'

const projectss = [
  {
    id: 1,
    title: "AI Lawyer",
    description:
      "AI Lawyer helps poor people easily clear legal doubts using AI and raise complaints.",
    image: justice,
    demo: "https://complaintuserform.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix",
    description: "Netflix developed using Reactjs, Redux toolkit, Nodejs and MongoDB",
    image: Netflix,
    demo: "https://netflic-clon.netlify.app/",
  },
  {
    id: 3,
    title: "IMDB",
    description: "Try to clone IMDB",
    image: IMDB,
    demo: "https://imdb-cruds.netlify.app/",
  },
  {
    id: 4,
    title: "Capstone",
    description: "Outfit cloth & colour suggestion site using Reactjs, Nodejs, MongoDB",
    image: "https://images.hdqwalls.com/download/amanda-qe-1920x1080.jpg",
    demo: "https://gregarious-starlight-9ad7c0.netlify.app/",
  },
  {
    id: 5,
    title: "Social Blogs",
    description: "Anyone can login and create blogs. Authorized user can Create, Update and Delete their own blogs. Otherwise other users blogs can see",
    image: blogs,
    demo: "https://arnifblogs.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="w-full py-16 px-4 md:px-12">
      {/* Animated Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold inline-block text-white relative text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My Projects
          <motion.span
            className="block h-1 bg-blue-500 mx-auto mt-3 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </div>

      {/* 2x2 Responsive Grid with Shadow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectss.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 sm:h-80 object-cover transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-100 sm:opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-200 text-sm mb-4">{project.description}</p>
              <div className="flex gap-4 flex-wrap justify-center">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(54,65,83)] text-white px-4 py-2 rounded-lg hover:bg-[rgb(44,53,73)] transition"
                  >
                    Explore
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
