import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";
import Globe from "../components/design/Globe";

export default function Hero() {
  return (
    <motion.header
      className="h-screen w-screen p-4 flex flex-col md:flex-row  gap-8 justify-center items-center relative" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.4, ease: "easeOut" }}

    >


{/* bumi */}
 
      <Globe className="w-40 h-40 md:w-[300px] md:h-[300px] lg:w-[600px] lg:h-[600px]" />

      {/* brutalism text ama img */}
      <motion.section
        className="text-[clamp(3rem,13vw,7rem)] font-black leading-none border-t-4 p-2 border-[#B1FC0A] flex gap-3 items-start tracking-tighter relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
      >

        <motion.span className="text-[#B1FC0A] z-20"  initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}>
            Zams
          </motion.span>
        <div className="lg:w-72 lg:h-72 md:w-40 md:h-40 w-32 h-32 border-l-4 border-t-4 border-[#484BB1] absolute right-2 -bottom-12 rounded-md z-10 overflow-hidden">

          <motion.img
            className="w-full h-full object-cover grayscale"
            src="/img/me.jpg"
            alt="me.jpg"
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          />
        </div>
        <motion.span className="relative " style={{ width: '1.8em', height: '1em' }}     initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}>
          {[
          { top: '0em',       solid: false, app: true },
            { top: '0.30em', solid: true, app: false },
            { top: '0.60em',  solid: false, app: false },
            { top: '0.90em',   solid: true , app: true },
          ].map((layer, i) => (
            <span
              key={i}
              className="absolute font-black tracking-tighter whitespace-nowrap"
              style={{
                top: layer.top,
                color: layer.solid ? '#484BB1' : 'transparent',
                WebkitTextStroke: layer.solid ? undefined : '1px #484BB1',
                zIndex: layer.app ? 20 : 0
              }}
            >
              Putra
            </span>
          ))}
        </motion.span>
      </motion.section>

{/* button */}
      <motion.div
          className="flex gap-4 mt-4 absolute bottom-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
        >
          <a
            href="https://blog.zamsputra.my.id"
            className="px-4 py-2 md:px-8 md:py-4 text-sm font-mono rounded-lg border border-[#B1FC0A] text-[#B1FC0A] hover:bg-[#B1FC0A] hover:text-black transition-all duration-200"
          >
            {`>`} Read Blog
          </a>
        </motion.div>


{/* text writer */}
        <motion.span className="text-4xl md:text-7xl absolute bottom-10 font-black tracking-tighter whitespace-nowrap text-transparent" style={{
          WebkitTextStroke: '1px #B1FC0A'
        }}      initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}>
          
            <TypewriterComponent
              options={{
                strings: [
                  "Web Developer",
                  "CySec Enthusiast",
                  "CTF Lab Builder"
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
              }}
            />
        </motion.span>

        

       
    
    </motion.header>
  );
}


