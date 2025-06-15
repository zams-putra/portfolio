import { motion } from "motion/react";
import { SiBurpsuite, SiDocker, SiEjs, SiExpress, SiGo, SiJavascript, SiMongodb, SiMongoose, SiPostman, SiReact, SiTailwindcss } from "react-icons/si";




const stack = {

  Language: [
    {
      name: 'JavaScript',
      description: 'JavaScript programming language',
      logo: <SiJavascript />,
      color: '#fcf000'
    },
    {
      name: 'Go',
      description: 'Go programming language',
      logo: <SiGo />,
      color: '#00f4fc'
    },
  ],
  Frontend: [
    {
      name: 'React',
      description: 'Frontend Framework, for anything',
      logo: <SiReact />,
      color: '#4260f5'
    },
    {
      name: 'TailwindCSS',
      description: 'CSS utility Framework, for my styling',
      logo: <SiTailwindcss />,
      color: '#03999e'
    },
  ],
  Backend: [
    {
      name: 'Express',
      description: 'Backend Framework, for everything muach',
      logo: <SiExpress />,
      color: '#444857'
    },
    {
      name: 'MongoDB',
      description: 'NoSQL Database, for save my bad memories',
      logo: <SiMongodb />,
      color: '#00c93c'
    },
    {
      name: 'Mongoose',
      description: 'Object data modeling for mongodb and nodejs, useful for my query into mongodb',
      logo: <SiMongoose />,
      color: '#691515'
    },
    {
      name: 'EJS',
      description: 'Template engine, for easily my views when my backend is simple',
      logo: <SiEjs />,
      color: '#ba2204'
    },
  ],
  Tools: [
    {
      name: 'Burpsuite',
      description: 'Pentest Tool, for CTF lab testing',
      logo: <SiBurpsuite />,
      color: '#c97200'
    },
    {
      name: 'Docker',
      description: 'Dev tools, for containerize my app',
      logo: <SiDocker />,
      color: '#006fc9'
    },
    {
      name: 'Postman',
      description: 'API testing tools, for testing my endpoint or API etc etc',
      logo: <SiPostman />,
      color: '#9e4b03'
    },
  ]

}





// bakal di renov besar2 an


export default function TechStack() {
  return (
    <motion.section
      className="w-full min-h-screen flex flex-col justify-evenly items-center py-7 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}

    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="md:text-5xl text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
        Tech Stack
      </motion.h1>

      {/* 
      destructure assignment, stack dijadiin arr: front back tools, section[0] yaitu nama nya misal front
      sedangkan items itu value nya, section[0] = section, section[1] = items, frontend: items 
      */}
      {Object.entries(stack).map(([section, items]) => (
        <div key={section} className="w-full p-4 flex flex-col gap-10 my-8 md:p-14">
          <motion.h3 className="text-slate-200 text-xs whitespace-nowrap md:text-2xl text-left md:text-center" initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            animate={{ x: 0, opacity: 1 }} >
            {"["}
            <span className="text-yellow-400">user@</span>
            <span className="text-purple-400">portfolio </span>
            <span className="text-red-500">~/skills</span>
            {"]"}$ <span className="text-sky-400">cat</span> {section}
          </motion.h3>
          <div className="w-full p-1 grid grid-cols-1 md:grid-cols-3 gap-4">
            {items.map((tech, i) => {
              return (
                <motion.div style={{ borderTop: `4px solid ${tech.color}` }} className="p-4 bg-slate-800 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 w-full flex flex-col gap-2 justify-center items-center text-left" initial={{ y: 150, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}

                  whileTap={{ marginBottom: 30 }}
                  transition={{ duration: 0.5, delay: i * 0.2, ease: 'easeInOut', type: "spring", stiffness: 300 }} key={i}>
                  <h1 className="flex text-lg gap-3 text-left font-bold justify-center items-center" style={{ color: `${tech.color}` }}>{tech.name} <span className="text-4xl">{tech.logo}</span> </h1>
                  <p className="text-sm text-slate-400 text-center leading-relaxed">{tech.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))
      }


      {/* <div className="w-full p-4 flex flex-col md:flex-row gap-8">
        <motion.h3 className="text-slate-200 text-sm md:text-3xl text-left" initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          animate={{ x: 0, opacity: 1 }} >
          {"["}
          <span className="text-yellow-400">user@</span>
          <span className="text-purple-400">portfolio </span>
          <span className="text-red-500">~/skills</span>
          {"]"}$ ls /Web/Frontend
        </motion.h3>
        <div className="w-full p-1 grid grid-cols-1 md:grid-cols-3 gap-4">
          {stack.Frontend.map((fro, i) => {
            return (
              <motion.div style={{ borderTop: `4px solid ${fro.color}` }} className="p-4 bg-slate-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full flex flex-col gap-2 justify-center items-center text-left" initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: i * 0.2, ease: 'easeInOut' }} key={i}>
                <h1 className="flex text-lg gap-1 text-left font-bold justify-center items-center" style={{ color: `${fro.color}` }}>{fro.name} <span className="text-4xl">{fro.logo}</span> </h1>
                <p className="text-sm text-slate-400 text-center leading-relaxed">{fro.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div> */}

    </motion.section >
  );
}
