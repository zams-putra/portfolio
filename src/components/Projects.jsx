import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "QuizMaker App",
      description: "You can make some quiz and get their score with this app",
      techStack: ["MongoDB", "Express", "React", "NodeJS"],
      link: "https://zingy-medovik-3d7c83.netlify.app/",
      repo: "https://github.com/zams-putra/quizmaker-app",
      img: "/img/quizapp.png",
    },
  ];

  return (
    <motion.section
      className="w-full min-h-screen justify-center overflow-y-hidden flex flex-col  items-center gap-8 p-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        My Project
      </motion.h1>
      <div className="w-full min-h-screen px-12 md:p-12  flex flex-col md:flex-row items-center flex-wrap gap-8 justify-between">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: [1, 1.1, 1] }}
            className="w-full relative my-12 md:my-0 md:w-1/4 min-h-48 md:h-72 bg-white rounded-md flex flex-col justify-between content-between gap-2"
          >
            <img
              className="top-0 w-full rounded-md h-24  object-fill object-left-bottom z-0"
              src={project.img}
              alt={project.title}
            />
            <motion.div
              whileHover={{ opacity: 0 }}
              className="absolute  top-0  w-full h-full object-cover z-10 bg-black/10 md:bg-black/40"
            ></motion.div>

            <div className="h-1/2 gap-2 items-end justify-between flex flex-col p-2 text-slate-900">
              <p>{project.title}</p>
              <small>{project.description}</small>
              <div className="flex absolute top-0 right-5 z-50 items-end justify-end flex-wrap  gap-2">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="p-4 hover:bg-black duration-150 rounded-br-md rounded-bl-md bg-slate-900 text-slate-100"
                  target="_blank"
                  href={project.link}
                >
                  see
                </motion.a>
              </div>
              <div className="flex absolute top-0 left-5 z-50 items-end justify-end flex-wrap  gap-2">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="p-4 hover:bg-black duration-150 rounded-br-md rounded-bl-md bg-slate-900 text-slate-100"
                  target="_blank"
                  href={project.repo}
                >
                  repo
                </motion.a>
              </div>
              <div className="flex gap-2 text-xs flex-wrap-reverse">
                {project.techStack.map((t, i) => (
                  <small
                    className="p-1 bg-slate-900 rounded-md text-white"
                    key={i}
                  >
                    #{t}
                  </small>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
