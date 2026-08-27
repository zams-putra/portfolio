import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Fragment, lazy, Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import planetGambar from '/img/salad.jpg'
import { UseLazyMount } from "../helper/UseLazyMount";
import { FiAward, FiExternalLink } from "react-icons/fi";

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


const certifications = [
  {
    title: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarFare Labs",
    date: "Aug 2026",
    credentialUrl: "https://labs.cyberwarfare.live/credential/achievement/6a71dabd345e0a58161cbfed",
    image: "/img/cert/crta.png",
    description: "Completed final practical exam covering Red Teaming, AD pentesting, Web Exploit and Pivoting across Internal and External Server Networks",
  },
  {
    title: "CyberSentinelSecure - Web Pentest Bootcamp",
    issuer: "Xcode (PT. Teknologi Server Indonesia)",
    date: "Sep 2025",
    credentialUrl: "https://xcode.co.id/cekkodesertifikat/",
    image: "/img/cert/css.png",
    description: "Completed 6 practical exams in this hands-on web application pentest bootcamp, covering common vulnerabilities and exploitation techniques.",
  },
  {
    title: "Introduction to Security Operation Center (SOC)",
    issuer: "Jadi Hacker",
    date: "Oct 2023 (Expired Oct 2024)",
    credentialUrl: "https://jadihacker.id/certificate/jh-soc-03-0001/",
    image: "/img/cert/jh.png",
    description: "Completed the final practical exam covering SOC analyst fundamentals - log analysis, SIEM-based monitoring, incident detection, and reporting. Scored a perfect 100 (20 quiz, 40 daily report, 40 incident report) and earned the best report in the batch.",
  },
];

const certCardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function CertGrid() {
  return (
    <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert, i) => {
        const meta = [cert.issuer, cert.date].filter(Boolean).join(" · ");

        const CardInner = (
          <>

            <div className="h-40 w-full overflow-hidden bg-slate-900/60 flex items-center justify-center shrink-0">
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <FiAward className="text-[#484BB1]" size={40} />
              )}
            </div>

            <div className="p-5 flex flex-col gap-2 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-white font-medium group-hover:text-[#B1FC0A] transition-colors">
                  {cert.title}
                </p>
                {cert.credentialUrl && (
                  <FiExternalLink className="text-slate-500 group-hover:text-[#B1FC0A] transition-colors shrink-0 mt-1" size={14} />
                )}
              </div>

              {meta && <p className="text-slate-500 text-xs">{meta}</p>}


              {cert.description && (
                <p className="text-slate-300 text-xs leading-relaxed mt-1 font-mono">
                  {cert.description}
                </p>
              )}

              {cert.note && (
                <span className="text-[10px] font-mono text-slate-600 mt-1">{cert.note}</span>
              )}
            </div>
          </>
        );

        const cardClass =
          "group flex flex-col rounded-xl border-2 border-[#484BB1] bg-transparent hover:bg-[#484BB1]/5 transition-all overflow-hidden h-full";

        return (
          <motion.article
            key={cert.title}
            custom={i}
            variants={certCardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {cert.credentialUrl ? (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
                {CardInner}
              </a>
            ) : (
              <div className={cardClass}>{CardInner}</div>
            )}
          </motion.article>
        );
      })}
    </div>
  );
}


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

       <div ref={ref} className="flex flex-col md:flex-row gap-2 justify-center items-center ">
        
              <div className="w-full md:w-auto text-center flex-1">
                <motion.h1 className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap relative min-h-[1.2em] flex justify-center items-center">      
                  <motion.span 
                    initial={{ scale: 3, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="absolute text-transparent select-none"
                    style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
                  >
                    Experience
                  </motion.span>
                  
                  <motion.span 
                    initial={{ scale: 4, opacity: 0, x: 0, y: 0 }}
                    whileInView={{ scale: 1, opacity: 1, x: '-1rem', y: '1rem' }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.15 }}
                    className="text-[#B1FC0A]" 
                    style={{ zIndex: 10 }}
                  >
                    Experience
                  </motion.span>
                </motion.h1>
              </div>
      
        
              {shouldRender && (
                <div className="flex-1 flex justify-center items-center">
                  <Suspense fallback={<div className="w-32 h-32 rounded-full bg-slate-800 animate-pulse"/>}>
                    <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>
                  </Suspense>
                </div>
              )}
                
            </div>
     

      <motion.main ref={containerRef} className="flex gap-2 justify-between items-center relative">

          {/* garis abu2 mati buat bawah */}
          <div className="absolute left-[calc(50%-1px)] top-0 w-0.5 h-full bg-slate-700" />
          {/* garis ijo sesuai mouse ini */}
          <motion.div
            className="absolute left-[calc(50%-1px)] top-0 w-0.5 bg-[#B1FC0A] origin-top"
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
                      ${isActive ? 'bg-[#B1FC0A] border-[#B1FC0A]' : 'bg-slate-900 border-slate-600'}`}
                    />
                  </div>
                  

                  {/* data kiri */}
                <motion.div key={index}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{once: true}}
                transition={{ duration: 0.7, delay: index * 0.3, ease: 'easeInOut' }}
                className="flex flex-col gap-4 pl-6 min-w-0">
                      <h2 className="text-md md:text-2xl font-semibold bg-gradient-to-r from-[#B1FC0A] to-[#484BB1] bg-clip-text text-transparent">{exp.position} at {exp.company}</h2>
                      <p className="text-xs md:text-sm bg-gradient-to-l from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.duration}</p>
                      <p className="text-xs  border-b-2 border-[#484BB1] py-4 bg-gradient-to-tr from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.description}</p>
                </motion.div>
              </Fragment>
        )
        })}
      </motion.section>
      </motion.main>



      <div className="w-full flex flex-col items-center gap-10 mt-16">
               <motion.h1 className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap relative min-h-[1.2em] w-full text-center flex justify-center items-center">      
          <span 
            className="absolute text-transparent select-none"
            style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
          >
            ✧Cert<span className="text-[#B1FC0A]">ification✧</span>
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
            <span className="text-slate-300">:~$ ./cert</span>
          </p>
          <p className="text-white">
             So these just my <span className="text-[#B1FC0A]">Certifications</span> for achieving something in <span className="text-[#B1FC0A]">My Life</span>, i put several in here
          </p>

          
          <p className="mt-4">
            <span className="text-[#B1FC0A]">putra@nasgor</span>
            <span className="text-slate-300">:~$ </span>
            <span className="text-[#B1FC0A] animate-pulse">_</span>
          </p>
        </motion.div>

        <CertGrid />
      </div>


    </section>
  );
}