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
      color: "from-blue-400 to-cyan-400",
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
      ]
    },
    {
      category: "CyberSec",
      color: "from-red-400 to-orange-400",
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
      ]
    }
  ];

    const [ref, shouldRender] = UseLazyMount();
  

   return (
    <section className="min-h-screen px-6 md:px-16 py-20">

      <div ref={ref} className="flex flex-col md:flex-row gap-2 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-slate-400 to-white bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>

          {shouldRender && (
            <Suspense fallback={<div className="w-32 h-32 rounded-full bg-slate-800 animate-pulse"/>}>
              <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>
            </Suspense>
          )}
        
        {/* <GlobeTemplate textureURL={planetGambar} classname="w-32 h-32 md:w-[420px] md:h-[420px]"/> */}
        {/* <p className="text-slate-600 text-xs">{`// planet rusak: too many active webgl contexts`}</p> */}
    
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
            <div className="flex items-center gap-3">
              <div className={`h-1 w-12 bg-gradient-to-r ${categoryData.color}`}></div>
              <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${categoryData.color} bg-clip-text text-transparent`}>
                {categoryData.category}
              </h2>
            </div>

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
                  className="group rounded-xl border border-slate-700 bg-slate-900/40 backdrop-blur overflow-hidden shadow-lg hover:shadow-xl duration-300"
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

