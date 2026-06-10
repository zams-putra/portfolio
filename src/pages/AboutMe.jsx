import { motion } from "motion/react";

import { lazy, Suspense, useMemo } from "react";

import planetGambar from '/img/me.jpg'
import { UseLazyMount } from "../helper/UseLazyMount";

// biar ga lag, close terminal
const GlobeTemplate = lazy(() => import('../components/design/GlobeTemplate'))




export default function AboutMe() {



   const [ref, shouldRender] = UseLazyMount();

   const tulisans = useMemo(() => {
      const arr = []
      let rems = 0
      let zs = 1
      for(let i = 0; i < 12; i++){
        arr.push({
          topRem: rems,
          zndex: zs,
        })
        rems += 4
        zs++
      }
      return arr
      
    }, []) 
  

  return (
    <section className="min-h-screen w-full flex flex-col items-center gap-16 p-8 md:p-16 py-24">

      <div ref={ref} className="flex flex-col md:flex-row gap-2 justify-center items-center ">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
    
       <motion.h1 className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap relative min-h-[1.2em] w-full text-center flex justify-center items-center">      
          <motion.span 
            initial={{ scale: 3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 15 
            }}
            className="absolute text-transparent select-none"
            style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
          >
            About Me
          </motion.span>
          
  
          <motion.span 
            initial={{ scale: 4, opacity: 0, x: 0, y: 0 }}
            whileInView={{ scale: 1, opacity: 1, x: '-1rem', y: '1rem' }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 12,   
              delay: 0.15    
            }}
            className="text-[#B1FC0A]" 
            style={{ zIndex: 10 }}
          >
            About Me
          </motion.span>
          
        </motion.h1>
        </motion.div>
        {shouldRender && (
          <Suspense fallback={<div className="w-32 h-32 rounded-full bg-slate-800 animate-pulse"/>}>
            <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>
          </Suspense>
        )}

      </div>

      {/* gambar brutalism design2 baju noh */}
      <section className="w-full p-4 my-7 relative justify-center flex items-center overflow-hidden">
        <img src="/img/brutalism/about_brutalism.png" alt="about" style={{zIndex: tulisans.length + 1}} />
          {tulisans.map((e, index) => {
            return (
              <motion.span key={index}
              className={`text-4xl md:text-7xl whitespace-nowrap font-black absolute ${(index % 2 != 0 ? 'text-transparent' : 'text-[#484BB1]')} select-none tracking-wider`}
              style={{ WebkitTextStroke: index % 2 != 0 ? '1px #B1FC0A' : '1px #484BB1', zIndex: (index % 2 == 0) ? tulisans.length + 2 : e.zndex, top: `${e.topRem}rem` }}
              animate={{
              opacity: [1, 0.85, 1, 0.9, 1, 0.4, 1],
              skewX: [0, 5, -5, 2, 0, -3, 0],
            }}
            transition={{
              duration: 0.4, 
              repeat: Infinity,
              repeatType: "mirror",
              delay: index * 0.08, 
              ease: "linear"
            }}
            >
              Lil About Me
            </motion.span>  
            )
          })}

      </section>

   
      

       <section>
        <motion.h1 className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap relative min-h-[1.2em] w-full text-center flex justify-center items-center">      
          <span 
            className="absolute text-transparent select-none"
            style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
          >
            ✧Sum<span className="text-[#B1FC0A]">mary✧</span>
          </span>  
        </motion.h1>

      
        <motion.div
          className="w-full max-w-5xl mt-16 font-mono text-sm leading-loose border-t-2 border-[#484BB1]  bg-transparent p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
       
          <p>
            <span className="text-[#B1FC0A]">putra@nasgor</span>
            <span className="text-slate-300">:~$ whoami</span>
          </p>
          <p className="text-white">
             Hi! I am <span className="text-[#B1FC0A]">putra putro</span> I like to solve problems .
              Thats why i played CTF and <span className="text-[#B1FC0A]">Competitive Programming</span> Furthermore, i loved sports, game, music, and explore the new positive things
          </p>

          
          <p className="mt-4">
            <span className="text-[#B1FC0A]">putra@nasgor</span>
            <span className="text-slate-300">:~$ </span>
            <span className="text-[#B1FC0A] animate-pulse">_</span>
          </p>
        </motion.div>
      </section>


   
     



      <motion.div
        className="w-full max-w-5xl flex flex-col md:flex-row gap-4 items-stretch"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://medium.com/@sirsebasers"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col gap-2 p-5 rounded-xl border-2 border-[#484BB1] bg-transparent hover:bg-[#484BB1]/5 transition-all group"
        >
          <span className="text-[#B1FC0A] text-xs font-mono">{`> read this`}</span>
          <p className="text-white font-medium group-hover:text-[#B1FC0A] transition-colors">Medium Blog</p>
          <p className="text-slate-500 text-xs">Tips · Writeup · Dev Notes</p>
        </a>
        <a
        href="/blog"
        className="flex-1 flex flex-col gap-2 p-5 rounded-xl border-2 border-[#484BB1] bg-transparent hover:bg-[#484BB1]/5 transition-all group"
      >
        <span className="text-[#B1FC0A] text-xs font-mono">{`> read this`}</span>
        <p className="text-white font-medium group-hover:text-[#B1FC0A] transition-colors">Personal Blog</p>
        <p className="text-slate-500 text-xs">HTB Writeups, Boot2root develop docs, etc</p>
      </a>

        <a
          href="https://github.com/zams-putra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col gap-2 p-5 rounded-xl border-2 border-[#484BB1] bg-transparent hover:bg-[#484BB1]/5 transition-all group"
        >
          <span className="text-[#B1FC0A] text-xs font-mono">{`> read this`}</span>
          <p className="text-white font-medium group-hover:text-[#B1FC0A] transition-colors">GitHub</p>
          <p className="text-slate-500 text-xs">CTF Labs · Web Projects · Vulnerable Machines</p>
        </a>
      </motion.div>
    </section>
  );
}