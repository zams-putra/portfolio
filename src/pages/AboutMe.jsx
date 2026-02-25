import { motion } from "motion/react";
import TypewriterComponent from "typewriter-effect";
import { useState } from "react";
import { FaDumbbell, FaGamepad, FaMusic} from 'react-icons/fa'
import { GiFriedEggs } from 'react-icons/gi'

const stats = [
  { label: "CTF Labs Built", value: "5+", color: "#4ade80" },
  { label: "LeetCode Solved", value: "500+", color: "#facc15" },
  { label: "TryHackMe Rooms", value: "100+", color: "#f87171" },
  { label: "HTB Machines", value: "5+", color: "#60a5fa" },
];

const funFacts = [
  { icon: <FaGamepad className="text-red-400"/>, label: "Game", desc: "Mostly game stories, MOBALOG, etc" },
  { icon: <FaMusic className="text-purple-500"/>, label: "Music", desc: "Nu Metal, EDM, Classic, etc" },
  { icon: <FaDumbbell className="text-gray-400"/>, label: "Gym", desc: "Weight training, martial arts" },
  { icon: <GiFriedEggs className="text-yellow-300"/>, label: "Nasgor Enjoyer", desc: "Long live nasgor your majesty" },
];

export default function AboutMe() {
  const [hoveredFact, setHoveredFact] = useState(null);

  return (
    <section className="min-h-screen w-full flex flex-col items-center gap-16 p-8 md:p-16 py-24">

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-slate-300 text-xs md:text-sm font-mono mb-2">
          {`[user@portfolio ~]$ cat about_me.txt`}
        </p>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-slate-200 to-slate-400 bg-clip-text text-transparent">
          About Me
        </h1>
      </motion.div>

   
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">

  
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
  
          <div className="bg-[#0d0d0d] border border-green-400/40 rounded-xl overflow-hidden shadow-lg shadow-green-400/5">
        
            <div className="flex items-center gap-2 px-4 py-3 border-b border-green-400/20 bg-[#111]">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-slate-500 text-xs font-mono">me.json</span>
            </div>
          
            <div className="p-5 font-mono text-xs md:text-sm">
              <p className="text-slate-500 mb-3">{`// who am i`}</p>
              <pre className="text-white whitespace-pre-wrap leading-relaxed">
                <TypewriterComponent
                  options={{
                    strings: [
`{
  "name": "Putra Putro",
  "alias": "nasgor-enjoyer",
  "age": "< 25",
  "role": [
    "Web Developer",
    "CTF Lab Builder",
    "CySec Enthusiast"
  ],
  "status": "open to collab"
}`
                    ],
                    autoStart: true,
                    cursor: "_",
                    loop: true,
                    delay: 30,
                    deleteSpeed: 10,
                  }}
                />
              </pre>
            </div>
          </div>

       
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0d0d0d] border border-slate-700 rounded-xl p-5 text-sm text-slate-400 leading-relaxed"
          >
            <span className="text-green-400 font-mono text-xs">{`>`} bio.txt</span>
            <p className="mt-3">
              Hi! I am putra putro — I like to solve problems .
              Thats why i played
              <span className="text-green-400"> CTF</span> and {" "}
              <span className="text-sky-400">Competitive Programming</span>, etc.
            </p>
            <p className="mt-2">
              Furthermore, i loved sports, game, music, and explore the new positive things
            </p>
          </motion.div>
        </motion.div>

       
        <div className="flex flex-col gap-4">


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-[#0d0d0d] border border-slate-700 rounded-xl p-5"
          >
            <p className="text-slate-500 font-mono text-xs mb-4">{`[user@portfolio]$ ./stats --all`}</p>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-lg p-3 border border-slate-800 bg-slate-900/50 cursor-default"
                  style={{ borderTopColor: stat.color, borderTopWidth: 2 }}
                >
                  <p className="text-xl font-bold" style={{ color: stat.color }}>{stat.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0d0d0d] border border-slate-700 rounded-xl p-5"
          >
            <p className="text-slate-500 font-mono text-xs mb-4">{`[user@portfolio]$ cat /etc/hobbies`}</p>
            <div className="grid grid-cols-2 gap-3">
              {funFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, borderColor: "rgba(74,222,128,0.4)" }}
                  onHoverStart={() => setHoveredFact(i)}
                  onHoverEnd={() => setHoveredFact(null)}
                  className="flex flex-col gap-1 p-3 rounded-lg border border-slate-800 bg-slate-900/50 cursor-default transition-colors"
                >
                  <span className="text-2xl">{fact.icon}</span>
                  <p className="text-white text-sm font-medium">{fact.label}</p>
                  <p className={`text-xs transition-all duration-300 ${hoveredFact === i ? "text-green-400" : "text-slate-500"}`}>
                    {fact.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

     
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-slate-500 font-mono text-xs mb-4 text-center">{`[user@portfolio]$ ls /interests`}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Competitive Programming", color: "border-yellow-400 text-yellow-400" },
            { label: "Web Development", color: "border-sky-400 text-sky-400" },
            { label: "Penetration Testing", color: "border-red-400 text-red-400" },
            { label: "CTF Labs Building", color: "border-green-400 text-green-400" },
            { label: "SOC / Blue Team", color: "border-blue-400 text-blue-400" },
   
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full border text-xs font-mono cursor-default ${item.color} bg-transparent hover:bg-white/5 transition-all`}
            >
              {`> ${item.label}`}
            </motion.div>
          ))}
        </div>
      </motion.div>


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
          className="flex-1 flex flex-col gap-2 p-5 rounded-xl border border-red-500/40 bg-[#0d0d0d] hover:border-yellow-400 hover:bg-red-500/5 transition-all group"
        >
          <span className="text-yellow-400 text-xs font-mono">{`> read my blog`}</span>
          <p className="text-white font-medium group-hover:text-yellow-300 transition-colors">Medium Blog</p>
          <p className="text-slate-500 text-xs">Tips · Writeup · Dev Notes</p>
        </a>
        <a
        href="/blog"
        className="flex-1 flex flex-col gap-2 p-5 rounded-xl border border-red-500/40 bg-[#0d0d0d] hover:border-red-400 hover:bg-red-500/5 transition-all group"
      >
        <span className="text-red-400 text-xs font-mono">{`> read my blog`}</span>
        <p className="text-white font-medium group-hover:text-red-300 transition-colors">Personal Blog</p>
        <p className="text-slate-500 text-xs">HTB Writeups, Boot2root develop docs, etc</p>
      </a>

        <a
          href="https://github.com/zams-putra"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col gap-2 p-5 rounded-xl border border-sky-400/40 bg-[#0d0d0d] hover:border-sky-400 hover:bg-sky-400/5 transition-all group"
        >
          <span className="text-sky-400 text-xs font-mono">{`> see my code`}</span>
          <p className="text-white font-medium group-hover:text-sky-300 transition-colors">GitHub</p>
          <p className="text-slate-500 text-xs">CTF Labs · Web Projects · Vulnerable Machines</p>
        </a>
      </motion.div>
    </section>
  );
}