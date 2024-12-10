import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <motion.header
      className="h-screen w-full p-4 flex flex-col gap-8 justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: [1, 0.8, 1] }}
      transition={{ duration: 1, delay: 1.5, ease: "easeIn" }}
    >
      <div className="flex items-center justify-center gap-8">
        <motion.p
          className="md:text-5xl text-sm bg-gradient-to-r from-green-400  to-slate-200 bg-clip-text text-transparent"
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, stiffness: 50, delay: 1.5 }}
        >
          Hello, i{"'"}am Zams Putra
        </motion.p>
        <motion.img
          className="w-14 h-14 cursor-pointer md:w-24 md:h-24 rounded-full border-2 border-yellow-400"
          src="/img/me.jpg"
          alt="me.jpg"
          animate={{ y: [-30, 30, -30] }}
          transition={{ duration: 3, stiffness: 50, repeat: Infinity }}
        />
      </div>
      <div className="flex justify-center items-center gap-4">
        <motion.p
          className="text-sm md:text-2xl flex gap-4"
          transition={{ delay: 1.5 }}
        >
          I{"'"}am a
        </motion.p>
        <span className="text-green-400 text-sm md:text-2xl">
          <TypewriterComponent
            options={{
              strings: [
                "Web developer",
                "Cyber Security Enthusiast",
                "Graphic Designer",
              ],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </span>
      </div>
    </motion.header>
  );
}
