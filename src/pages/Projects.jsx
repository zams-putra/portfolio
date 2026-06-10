import { motion } from "motion/react";
import { UseLazyMount } from "../helper/UseLazyMount";
// import GlobeTemplate from "../components/design/GlobeTemplate";
import planetGambar from '/img/eskrim.jpg'
import { lazy, Suspense } from "react";


const GlobeTemplate = lazy(() => import('../components/design/GlobeTemplate'))


export default function Projects() {

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.5 },
    }),
  };
  
  const projectCategories = [
    {
      category: "WebDev",
      projects: [
        {
          title: "Portfolio",
          description: "This web.",
          techStack: ["ReactJS", "TailwindCSS", "Motion"],
          link: "https://zamsprofile.netlify.app/",
          repo: "https://github.com/zams-putra/portfolio",
          img: "/img/porto.png",
        },
        {
          title: "QuizMaker App",
          description: "You can make some quiz and get their score with this app",
          techStack: ["MongoDB", "Express", "React", "NodeJS"],
          link: "https://zingy-medovik-3d7c83.netlify.app/",
          repo: "https://github.com/zams-putra/quizmaker-app",
          img: "/img/quizapp.png",
        },
        {
          title: "Boot to Root Framework",
          description: "My B2R CTF Framework me usually doing with these framework, anyway i build this project with AI often (i need to learn D3 JS first)",
          techStack: ["React", "Vite", "D3 Js"],
          link: "https://b2r-framework.vercel.app/",
          repo: "https://github.com/zams-putra/b2r-framework",
          img: "/img/project/b2r_fw.png",
        },
      ]
    },
    {
      category: "CyberSec",

      projects: [
        {
          title: "mY Nasgor (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["React", "Go", "TailwindCSS", "Linux"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/my-nasgor",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/my-nasgor",
          img: "https://tryhackme-images.s3.amazonaws.com/room-icons/63cde864013c24004999383d-1742438201376",
        },
        {
          title: "Amja Semndiri (ON)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["NextJS", "TailwindCSS", "NodeJS", "Linux"],
          link: "https://tryhackme.com/room/amjasemndiri",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/CVE-2025-29927",
          img: "https://tryhackme-images.s3.amazonaws.com/room-icons/63cde864013c24004999383d-1761964397411",
        },
        {
          title: "Stickers Collection (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["Django", "Sqlite3", "Python", "Linux"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/CVE-2025-64459",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/CVE-2025-64459",
          img: "/img/stickers_collection.png",
        },
        {
          title: "Karbit Enjoyer (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["NextJS", "TailwindCSS", "NodeJS", "Linux"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/CVE-2025-55182",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/CVE-2025-55182",
          img: "/img/karbit_enjoyer.png",
        },
        {
          title: "Abandoned (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["HTML", "CSS", "JS", "Windows", "Active Directory"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/abandoned",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/abandoned",
          img: "/img/abandoned.png",
        },
        {
          title: "Peak (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["ReactJS", "ReactRouter", "Go", "Windows Standalone"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/peak",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/peak",
          img: "/img/peak.png",
        },
        {
          title: "Cave (OFF)",
          description: "Vulnerable lab, boot2root machine",
          techStack: ["ReactJS", "Go", "Pivoting"],
          link: "https://github.com/zams-putra/my-boot2root/tree/main/cave",
          repo: "https://github.com/zams-putra/my-boot2root/tree/main/cave",
          img: "/img/cave.png",
        },
        {
          title: "Other CTF Lab",
          description: "My simple Docker CTF lab, small version CTF lab with so many vuln",
          techStack: ["Docker", "Etc"],
          link: "https://github.com/zams-putra/ctf-vuln-lab",
          repo: "https://github.com/zams-putra/ctf-vuln-lab",
          img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5zGYbY_1DqXWcEb1wHD4Yg.png",
        },
        {
          title: "RahasiaSidi",
          description: "Android pentest lab for security research and CTF challenges",
          techStack: ["Kotlin", "XML"],
          link: "https://github.com/zams-putra/android-lab/tree/main/RahasiaSidi",
          repo: "https://github.com/zams-putra/android-lab/tree/main/RahasiaSidi",
          img: "/img/project/androlab1.png",
        },
        {
          title: "DarkMemories",
          description: "Android pentest lab for security research and CTF challenges",
          techStack: ["Kotlin", "Go", "XML"],
          link: "https://github.com/zams-putra/android-lab/tree/main/DarkMemories",
          repo: "https://github.com/zams-putra/android-lab/tree/main/DarkMemories",
          img: "/img/project/androlab2.png",
        },
      ]
    }
  ];

    const [ref, shouldRender] = UseLazyMount();
  

   return (
    <section className="min-h-screen px-6 md:px-16 py-20 flex flex-col justify-center items-center">

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
                    Projects
                  </motion.span>
                  
                  <motion.span 
                    initial={{ scale: 4, opacity: 0, x: 0, y: 0 }}
                    whileInView={{ scale: 1, opacity: 1, x: '-1rem', y: '1rem' }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.15 }}
                    className="text-[#B1FC0A]" 
                    style={{ zIndex: 10 }}
                  >
                    Projects
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
      

      <div className="mt-16 space-y-16">
        {projectCategories.map((categoryData, categoryIndex) => (
          <motion.div
            key={categoryData.category}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Category Header */}
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap  min-h-[1.2em] w-full text-center flex justify-center items-center"
                >
                <span 
                    className=" text-transparent select-none"
                    style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
                >
                    {categoryData.category}
                </span>
                </motion.h1>

            {/* Projects Grid */}
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {categoryData.projects.map((p, i) => (
                <motion.article
                  key={i}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group rounded-xl border border-[#484BB1] bg-transparent overflow-hidden shadow-lg hover:shadow-xl duration-300"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs mt-2">
                      {p.techStack.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded bg-slate-800 text-slate-300"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex gap-3">
                      <a
                        href={p.link}
                        target="_blank"
                        className="text-xs px-3 py-1.5 rounded bg-slate-100 text-black hover:bg-white duration-300"
                      >
                        Live
                      </a>
                      <a
                        href={p.repo}
                        target="_blank"
                        className="text-xs px-3 py-1.5 rounded border border-slate-500 text-slate-300 hover:bg-slate-800 duration-300"
                      >
                        Repo
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

