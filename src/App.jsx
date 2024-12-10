import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import axios from "axios";
import Social from "./components/Social";

function App() {
  const [notSplash, setNotSplash] = useState(false);
  const { scrollYProgress } = useScroll();
  const [lagu, setLagu] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getLagu = async () => {
      try {
        const res = await axios.get(
          "https://quizmaker-app-api.vercel.app/api/lagu_spotify"
        );

        const data = await res.data;
        setLagu(data);
      } catch (err) {
        console.log(err);
      }
    };

    getLagu();
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-slate-100 min-h-screen flex flex-col items-center gap-20 overflow-hidden">
      <AnimatePresence>{!notSplash && <SplashScreen />}</AnimatePresence>

      {notSplash && (
        <>
          <Hero />
          <AboutMe />
          <TechStack />
          <Projects />
          <Experience />
          <Social />

          <section className="w-full h-screen flex  flex-col justify-center items-center">
            <motion.div
              style={{
                scaleX: scrollYProgress,
              }}
              className="fixed top-0 w-full h-1 bg-green-400"
            ></motion.div>

            {lagu.artist ? (
              <motion.div
                initial={{ x: 300 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-full h-1/2 p-4 flex flex-col items-center gap-4"
              >
                <p className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
                  Putro sedang mendengarkan ini sekarang
                </p>
                <p className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
                  {lagu.judul} - {lagu.artist}
                </p>
                <img
                  className="w-32 h-32 rounded-md border-green-400 border-2"
                  src={lagu.imgLagu}
                  alt={lagu.judul}
                />
              </motion.div>
            ) : (
              <motion.p
                className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
                initial={{ x: 300 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                {lagu.message}
              </motion.p>
            )}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl h-1/2 md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
              Thank you :)
            </motion.h1>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
