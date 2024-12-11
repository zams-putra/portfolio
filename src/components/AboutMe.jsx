import { motion } from "motion/react";

import TypewriterComponent from "typewriter-effect";

export default function AboutMe() {
  return (
    <motion.section
      className="h-screen w-full flex flex-col md:flex-row gap-4 justify-evenly items-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >
      <h1 className="md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent md:-rotate-90">
        About me
      </h1>
      <motion.div
        whileTap={{ scaleY: 2 }}
        whileHover={{ scaleX: 1.1 }}
        className="bg-black cursor-pointer w-full md:w-1/4 border-2 border-green-400 rounded-lg h-1/3 md:h-1/2 flex flex-col gap-4 p-8 text-xs md:text-sm"
      >
        <p>
          <span className="text-green-400">{`user@portfolio>`}</span> cat
          me.json
        </p>
        <pre className="text-white">
          <TypewriterComponent
            options={{
              strings: [
                `{
name: 'putra',
age: 'age < 25',
isMarried: false,
hobbies: ['Game', 'Music', 'Gym']
}`,
              ],
              autoStart: true,
              cursor: "_",
              loop: true,
            }}
          />
        </pre>
      </motion.div>
      <motion.div
        whileTap={{ scaleY: 2 }}
        whileHover={{ scaleX: 1.1 }}
        className="bg-black cursor-pointer w-full md:w-1/4 border-2 border-red-500 rounded-lg md:h-1/2 h-1/3 flex flex-col gap-4 p-8 text-xs md:text-sm"
      >
        <p>I{"'"}am happy with :</p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-red-500">{`>`}</span> Competitive Programming
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-red-500">{`>`}</span> Web Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span className="text-red-500">{`>`}</span> Red team{" "}
          {"[Web Vuln, CTF]"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <span className="text-red-500">{`>`}</span> Blue team{" "}
          {"[Log analysis]"}
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
