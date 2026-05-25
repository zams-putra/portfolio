import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";
import Globe from "../components/design/Globe";

export default function Hero() {
  return (
    <motion.header
      className="h-screen w-full p-4 flex flex-col md:flex-row  gap-8 justify-center items-center" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: [1, 0.8, 1] }}
      transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
    >

      <Globe classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>

      <section  className="w-full max-w-3xl flex flex-col gap-8 items-end">

        <div className="flex items-center justify-center gap-8">
          <motion.p
            className="md:text-5xl text-xl bg-gradient-to-r from-green-300  to-slate-900 bg-clip-text text-transparent"
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, stiffness: 50, delay: 0.5, ease: 'easeInOut' }}
          >
            Hello, i{"'"}m Zams Putra
          </motion.p>
          <motion.img
            className="w-14 h-14 cursor-pointer md:w-24 md:h-24 rounded-full border-2 border-slate-900"
            src="/img/me.jpg"
            alt="me.jpg"
            animate={{ y: [-80, 30, -80] }}
            transition={{ duration: 3, stiffness: 50, repeat: Infinity }}
          />
        </div>


        <div className="flex justify-center items-center gap-4">
          <motion.p
            className="text-sm md:text-2xl flex gap-4"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
          >
            I{"'"}m a
          </motion.p>
          <span className="text-green-300 text-sm md:text-2xl">
            <TypewriterComponent
              options={{
                strings: [
                  "Web Developer",
                  "CTF & CySec Enthusiast",
                  "CTF Lab Builder"
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
          </span>
        </div>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <a
            href="/blog"
            className="px-5 py-2 text-sm font-mono rounded-lg border border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-black transition-all duration-200"
          >
            {`>`} Read Blog
          </a>
        </motion.div>


      </section>
    
    </motion.header>
  );
}


