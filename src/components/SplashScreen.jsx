import { motion } from "motion/react";

export default function SplashScreen() {
  const days = [
    "Minggu Turu 😪",
    "Senin Malas😔",
    "Selasa Yoi 😁",
    "Rabu Lagi ☠️",
    "Kamis Manis 👍",
    "Jumat Sekedar Mengingatkan 🤖",
    "Sabtu Santuy 🦖",
  ];
  return (
    <>
      <motion.main className="w-full flex h-screen absolute flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ y: -500 }}
          className="w-full border-b border-b-green-400 bg-black h-1/2 flex flex-col items-center justify-end p-4"
        >
          <motion.p
            initial={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
            className="text-white absolute p-4 flex w-full justify-between top-0 text-xs md:xl"
          >
            <span>{new Date().toLocaleTimeString()}</span>
            <span>{days[new Date().getDay()]}</span>
            <span>{new Date().getFullYear()}</span>
          </motion.p>
          <p className="bg-gradient-to-r from-slate-600 to-white bg-clip-text text-transparent text-xl md:text-2xl">
            Welcome to my portfolio
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          exit={{ y: 500 }}
          className="w-full border-t border-t-green4border-b-green-400 bg-black h-1/2 flex flex-col items-center justify-start p-4"
        >
          <p className="bg-gradient-to-r from-slate-600 to-white bg-clip-text text-transparent text-xl md:text-2xl">
            Wait.....
          </p>
        </motion.div>
      </motion.main>
    </>
  );
}
