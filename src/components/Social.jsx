import { motion } from "motion/react";

export default function Social() {
  return (
    <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 pt-8">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        We can be friends
      </motion.h1>
      <div className="w-full gap-8 items-center md:items-start min-h-screen flex p-8 flex-col md:flex-row flex-wrap">
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://github.com/zams-putra"
          target="_blank"
        >
          Github
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://leetcode.com/u/Sebasers/"
          target="_blank"
        >
          LeetCode
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://www.codewars.com/users/AwikwokBas"
          target="_blank"
        >
          CodeWars
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://tryhackme.com/r/p/TombaHK"
          target="_blank"
        >
          TryHackMe
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://medium.com/@sirsebasers"
          target="_blank"
        >
          Medium
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: [30, -30, 0] }}
          transition={{ duration: 1, delay: 1.1 }}
          viewport={{ once: true }}
          className="p-4 w-1/2 rounded-sm flex items-center justify-center md:w-32 h-10 bg-slate-100 text-slate-900"
          href="https://instagram.com/username.gw.itu.jir"
          target="_blank"
        >
          Instagram
        </motion.a>
      </div>
    </section>
  );
}
