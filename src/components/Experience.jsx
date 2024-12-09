import { motion } from "motion/react";

export default function Experience() {
  return (
    <section className="w-full min-h-screen overflow-y-hidden flex flex-col items-center gap-8 pt-8">
      <motion.h1
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
      >
        My Experience
      </motion.h1>
      <p>Zero experience 😔</p>
    </section>
  );
}
