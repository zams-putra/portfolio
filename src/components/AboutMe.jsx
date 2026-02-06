import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";

export default function AboutMe() {
  return (
    <motion.section
      className="h-screen w-full flex flex-col md:flex-row gap-6 justify-evenly items-center p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
    >

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="md:text-5xl text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent md:-rotate-90"
      >
        About me
      </motion.h1>


      <motion.div
        whileTap={{ scaleY: 2 }}
        whileHover={{ scaleX: 1.1 }}
        className="bg-black cursor-pointer w-full md:w-1/4 border-2 border-green-400 rounded-lg h-1/3 md:h-1/2 flex flex-col gap-4 p-6 text-xs md:text-sm"
      >
        <p>
          <span className="text-green-400">{`user@portfolio>`}</span> cat
          me.json
        </p>
        <pre className="text-white whitespace-pre-wrap">
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
        className="bg-black cursor-pointer w-full md:w-1/4 border-2 border-red-500 rounded-lg md:h-1/2 h-1/3 flex flex-col gap-3 p-6 text-xs md:text-sm"
      >
        <p>I{"'"}am happy with :</p>

        <p>
          <span className="text-red-500">{`>`}</span> Competitive Programming
        </p>
        <p>
          <span className="text-red-500">{`>`}</span> Web Developer
        </p>
        <p>
          <span className="text-red-500">{`>`}</span> Cyber Security
        </p>


        <a
          href="https://medium.com/@sirsebasers"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto border border-red-500 rounded px-3 py-2 text-center hover:bg-red-500 hover:text-black transition"
        >
          <span className="text-red-500">{`>`}</span> Read my blog on Medium
        </a>
      </motion.div>
    </motion.section>
  );
}
