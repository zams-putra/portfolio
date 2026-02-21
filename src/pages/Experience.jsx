import { motion } from "motion/react";

const experienceData = [
  {
    company: "Medium",
    position: "Blogger",
    duration: "Oct 2024 - Now",
    description: "Writing articles about ..... and sharing knowledge, sometimes i write this for myself to remember technical things that i forgot."
  },
  {
    company: "Hacktrace Ranges",
    position: "CTF Player",
    duration: "Feb 2025 - Now",
    description: "Recon to Exploit CVE / Bug and PrivEsc for a root flag (offensive) | Analyze log, file, and answering their questions (defensive)"
  },
  {
    company: "TryHackMe",
    position: "CTF Player",
    duration: "Jan 2025 - Now",
    description: "Completing some challenges in here, learned and hands on Pentest, SOC, Etc"
  },
  {
    company: "LeetCode",
    position: "Competitive Programming Player",
    duration: "Jul 2024 - Now",
    description: "Being problem solver and completing some challenges in here"
  },

];


export default function Experience() {



  return (
    <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 p-4 md:p-16">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        My Experience

      </motion.h1>

      <motion.section className="grid grid-cols-1 p-8 my-4 gap-20 rounded-md justify-center items-center border-l-2 border-b-2 border-green-400" initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeInOut' }}>
        {experienceData.map((exp, index) => (
          <motion.div key={index} initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: index * 0.5, ease: 'easeInOut' }} className="flex flex-col gap-4  p-4 border-l-2 border-green-400 relative">
            <span className="w-4 h-4 rounded-full bg-green-400 absolute -top-3 -left-2"></span>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.position} on {exp.company}</h2>
            <p className="text-sm bg-gradient-to-l from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.duration}</p>
            <p className="text-xs  border-b-2 border-slate-600 py-4 bg-gradient-to-tr from-slate-500 to-slate-100 bg-clip-text text-transparent">{exp.description}</p>
            <span className="w-4 h-4 rounded-full bg-green-400 absolute -bottom-3 -left-2"></span>

          </motion.div>
        ))}
      </motion.section>



    </section>
  );
}
