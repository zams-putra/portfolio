import { motion } from "motion/react";


const socials = [
  {
    id: 1,
    link: 'https://github.com/zams-putra',
    lay: 0.5,
    name: 'Github'
  },
  {
    id: 2,
    link: 'https://leetcode.com/u/Sebasers',
    lay: 0.7,
    name: 'Leetcode'
  },
  {
    id: 3,
    link: 'https://www.codewars.com/users/AwikwokBas',
    lay: 0.9,
    name: 'CodeWars'
  },
  {
    id: 4,
    link: 'https://tryhackme.com/r/p/TombaHK',
    lay: 1.1,
    name: 'Tryhackme'
  },
  {
    id: 5,
    link: 'https://medium.com/@sirsebasers',
    lay: 1.3,
    name: 'Medium'
  },
  {
    id: 6,
    link: 'https://instagram.com/username.gw.itu.jir',
    lay: 1.5,
    name: 'Instagram'
  },
]

export default function Social() {
  return (
    <section className="w-full min-h-screen justify-center overflow-y-hidden flex flex-col items-center gap-8 py-16">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        We can be friends
      </motion.h1>
      <div className="w-full gap-8 items-center md:items-start min-h-screen flex p-8 flex-col md:flex-row flex-wrap">

        {socials.map((social) => (

          <motion.a key={social.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
            transition={{ duration: 1, delay: social.lay }}
            viewport={{ once: true }}
            className="p-4 px-8 w-48 duration-300 hover:bg-slate-900 hover:text-slate-200 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
            href={social.link}
            target="_blank"
          >
            {social.name}
          </motion.a>

        ))}


      </div>
    </section>
  );
}
