import { motion } from "motion/react";
import { FaBug, FaShield } from "react-icons/fa6";
import { SiInstagram, SiGithub, SiLeetcode, SiTryhackme, SiMedium, SiCodewars, SiHackerrank, SiLinkedin, SiHackthebox, SiYoutube } from "react-icons/si";


const socialCategories = [
  {
    category: 'Social Media',
    color: 'from-blue-400 to-cyan-400',
    items: [
      {
        id: 1,
        link: 'https://instagram.com/username.gw.itu.jir',
        name: 'Instagram',
        icon: <SiInstagram />
      },
      {
        id: 2,
        link: 'https://linkedin.com/in/zams-putro-49466527a/',
        name: 'LinkedIn',
        icon: <SiLinkedin />
      },
      {
        id: 3,
        link: 'https://youtube.com/@hiukuhibiniu',
        name: 'Youtube',
        icon: <SiYoutube/>
      },
       {
        id: 4,
        link: 'https://github.com/zams-putra',
        name: 'Github',
        icon: <SiGithub />
      },
      {
        id: 5,
        link: 'https://medium.com/@sirsebasers',
        name: 'Medium',
        icon: <SiMedium />
      }
    ]
  },
  {
    category: 'Programming',
    color: 'from-purple-400 to-pink-400',
    items: [
      {
        id: 6,
        link: 'https://leetcode.com/u/Sebasers',
        name: 'Leetcode',
        icon: <SiLeetcode />
      },
      {
        id: 7,
        link: 'https://www.codewars.com/users/AwikwokBas',
        name: 'CodeWars',
        icon: <SiCodewars />
      },
      {
        id: 8,
        link: 'https://hackerrank.com/profile/AwikwokBas',
        name: 'HackerRank',
        icon: <SiHackerrank />
      },

    ]
  },
  {
    category: 'CyberSec',
    color: 'from-red-400 to-orange-400',
    items: [
      {
        id: 9,
        link: 'https://tryhackme.com/r/p/TombaHK',
        name: 'Tryhackme',
        icon: <SiTryhackme />
      },
      {
        id: 10,
        link: 'https://app.hackthebox.com/public/users/1629597',
        name: 'HackTheBox',
        icon: <SiHackthebox />
      },
      {
        id: 11,
        link: 'https://app.letsdefend.io/user/zsmith',
        name: 'LetsDefend',
        icon: <FaShield />
      },
      {
        id: 12,
        link: 'https://blueteamlabs.online/public/user/27e77cbb06a8d0cd903e56',
        name: 'BTLO',
        icon: <FaShield />
      },
      {
        id: 13,
        link: 'https://pwn.college/hacker/150556',
        name: 'Pwn.College',
        icon: <FaBug/>
      }
    ]
  }
]

export default function Social() {
  return (
    <section className="w-full min-h-screen justify-center overflow-y-hidden flex flex-col items-center gap-12 py-16 px-4">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="text-2xl md:text-5xl text-center bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent font-bold"
      >
        Let{"'"}s connect with me
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col gap-12">
        {socialCategories.map((categoryData, categoryIndex) => (
          <motion.div 
            key={categoryData.category}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
         
            <div className="flex items-center gap-3">
              <div className={`h-1 w-12 bg-gradient-to-r ${categoryData.color}`}></div>
              <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${categoryData.color} bg-clip-text text-transparent`}>
                {categoryData.category}
              </h2>
            </div>

     
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categoryData.items.map((social, itemIndex) => (
                <motion.a 
                  key={social.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 px-6 duration-300 hover:shadow-lg hover:scale-105 hover:bg-slate-800 hover:text-slate-100 rounded-lg flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-medium border-2 border-transparent hover:border-slate-600"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{social.icon}</span> 
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
