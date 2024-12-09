import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  const [notSplash, setNotSplash] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 5000);
    return () => clearTimeout(timer);
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

          <section className="w-full h-screen flex justify-center items-center">
            <motion.div
              style={{
                scaleX: scrollYProgress,
              }}
              className="fixed top-0 w-full h-1 bg-green-400"
            ></motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-2xl md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
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
