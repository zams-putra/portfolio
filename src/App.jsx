import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import Social from "./components/Social";
import End from "./components/End";
import Terminal from "./components/Terminal";





const sesi = [Hero, AboutMe, TechStack, Projects, Experience, Social, End]

function App() {

  const [page, setPage] = useState(0)
  const { scrollYProgress } = useScroll()

  const handleDown = () => {
    if (page < sesi.length - 1) {
      setPage((bef) => bef + 1)
    }
  }
  const handleUp = () => {
    if (page > 0) {
      setPage((bef) => bef - 1)
    }
  }


  const Curr = sesi[page]

  const [notSplash, setNotSplash] = useState(false);
  const [isTerminal, setIsTerminal] = useState(false)




  useEffect(() => {
    const timer = setTimeout(() => {
      setNotSplash(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <AnimatePresence mode="wait">
        {!isTerminal ? (
          <motion.div key="main" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.2 }} className="bg-gradient-to-r from-slate-900 via-black to-slate-900 text-slate-100 min-h-screen flex flex-col items-center gap-20 overflow-hidden">
            <AnimatePresence>{!notSplash && <SplashScreen />}</AnimatePresence>

            {notSplash && (
              <>
                <main className="md:hidden">
                  <AnimatePresence mode="wait" key={page}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 2 }}

                  >
                    <section className="py-8 justify-center w-full items-center flex flex-col">
                      <motion.div
                        initial={{ y: -200 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:hidden p-4 gap-4 flex">
                        {page > 0 && (
                          <button onClick={handleUp} className="px-5 bg-slate-700 text-slate-100 rounded-md">Up</button>
                        )}
                        {page < sesi.length - 1 && (
                          <button onClick={handleDown} className="px-5 bg-slate-700 text-slate-100 rounded-md">Down</button>
                        )}
                      </motion.div>
                      <Curr />
                    </section>
                  </AnimatePresence>
                  <motion.div
                    style={{
                      scaleX: `${(page + 1) / sesi.length * 100}%`,
                    }}
                    className="fixed md:hidden top-0 w-full h-1 bg-green-400"
                  ></motion.div>
                </main>
                <main className="flex-col gap-2 hidden lg:flex">
                  <Hero />
                  <AboutMe />
                  <TechStack />
                  <Projects />
                  <Experience />
                  <Social />
                  <End />
                  <motion.div
                    style={{
                      scaleX: scrollYProgress,
                    }}
                    className="fixed hidden md:block top-0 w-full h-1 bg-green-400"
                  ></motion.div>
                </main>

              </>
            )}



            <motion.button
              onClick={() => setIsTerminal(true)}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(34,197,94)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 mr-4 self-end bg-green-400 hover:bg-green-500 text-black px-4 py-2 rounded-lg font-semibold shadow-md"
            >
              Launch Terminal
            </motion.button>

          </motion.div>
        ) : (
          <motion.div key="terminal" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }}>
            <Terminal setIsTerminal={setIsTerminal} />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
