import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Fragment, lazy, Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import planetGambar from '/img/salad.jpg'
import { UseLazyMount } from "../helper/UseLazyMount";

const GlobeTemplate = lazy(() => import('../components/design/GlobeTemplate'))


const experienceData = [
  {
    company: "Medium",
    position: "Blogger",
    duration: "Oct 2024 - Now",
    description: "Writing articles about ..... and sharing knowledge, sometimes i write this for myself to remember technical things that i forgot.",
    tasks: ["- Made some articles", "- Publishing projects documentation"]
  },
  {
    company: "Hacktrace Ranges",
    position: "CTF Player",
    duration: "Feb 2025 - Now",
    description: "Playing CTF in here, for enhanced my CySec Skills",
     tasks: ["- Recon to Exploit CVE / Bug and PrivEsc for a root flag (offensive)", "- Analyze log, file, and answering their questions (defensive)"]
  },
  {
    company: "TryHackMe",
    position: "CTF Player",
    duration: "Jan 2025 - Now",
    description: "Playing CTF in here, for enhanced my CySec Skills",
     tasks: ["- Learn about CyberSecurity", "- Playing CTF", "- Answering Cyber Security Quiz"]
  },
  {
    company: "HackTheBox",
    position: "CTF Player",
    duration: "Feb 2025 - Now",
    description: "Completing some challenges in here, learned and hands on Pentest, CTF B2R",
     tasks: ["- Pentest machine to get some flags", "- Made writeup for their Machines", "- Joining HTB Season to get the Tier"]
  },
  {
    company: "LeetCode",
    position: "Competitive Programming Player",
    duration: "Jul 2024 - Now",
    description: "Being problem solver and completing some challenges in here",
     tasks: ["- Joining weekly contest to solve weekly problems", "- Made writeup for their problems"]
  },

];


export default function Experience() {


  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })


  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20
  })


  const [progres, setProgres] = useState(0)
  useEffect(() => {
    return smoothProgress.on('change', (v) => setProgres(v))
  }, [smoothProgress])


  const lineheight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])


  const [ref, shouldRender] = UseLazyMount();
  
  
  
  return (
    <section className="w-full min-h-screen  flex flex-col items-center gap-10 p-4 md:p-16">

      <div ref={ref} className="flex flex-col md:flex-row gap-2 justify-center items-center">
         <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-2xl md:text-4xl bg-gradient-to-r mb-16 from-slate-500 to-slate-200 bg-clip-text text-transparent"
        >
          My Experience
        </motion.h1>
        {/* <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/> */}
           {shouldRender && (
              <Suspense fallback={<div className="w-32 h-32 rounded-full bg-slate-800 animate-pulse"/>}>
                <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>
              </Suspense>
            )}

        
      </div>
     

      <motion.main ref={containerRef} className="flex gap-2 justify-between items-center relative">

          {/* garis abu2 mati buat bawah */}
          <div className="absolute left-[calc(50%-1px)] top-0 w-0.5 h-full bg-slate-700" />
          {/* garis ijo sesuai mouse ini */}
          <motion.div
            className="absolute left-[calc(50%-1px)] top-0 w-0.5 bg-green-400 origin-top"
            style={{ height: lineheight }}
          />

          <motion.section className="grid grid-cols-[1fr_auto_1fr] w-full gap-y-16" initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
              {experienceData.map((exp, index) => {
                const thresHold = (index + 0.5) / experienceData.length
                const isActive = progres >= thresHold                
                return (
              <Fragment key={index}>
                  {/* responsibility kiri */}
                  <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{once: true}}
                  transition={{ duration: 0.7, delay: index * 0.5, ease: 'easeInOut' }}
                   className="flex flex-col items-end pr-6 pt-1 min-w-0">
                        <p className="text-md md:text-2xl text-slate-500 mb-1">Responsibilities</p>
                     <div className="flex flex-col items-start max-w-[200px] gap-y-1">
                          {exp.tasks.map((task, i) => (
                            <p key={i} className="text-xs text-slate-400 text-left leading-relaxed">{task}</p>
                          ))}
                        </div>
                  </motion.div>


                  {/* dots */}
                  <div className="flex items-start justify-center pt-1 z-10">
                    <span className={`w-3 h-3 rounded-full border-2 transition-colors duration-300
                      ${isActive ? 'bg-green-400 border-green-400' : 'bg-slate-900 border-slate-600'}`}
                    />
                  </div>
                  

                  {/* data kiri */}
                <motion.div key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{once: true}}
                transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeInOut' }}
                className="flex flex-col gap-4 pl-6 min-w-0">
                      <h2 className="text-md md:text-2xl font-semibold bg-gradient-to-r from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.position} at {exp.company}</h2>
                      <p className="text-xs md:text-sm bg-gradient-to-l from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.duration}</p>
                      <p className="text-xs  border-b-2 border-slate-600 py-4 bg-gradient-to-tr from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.description}</p>
                </motion.div>
              </Fragment>
        )
        })}
      </motion.section>
      </motion.main>


   



    </section>
  );
}
