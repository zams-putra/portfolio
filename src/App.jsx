import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import SplashScreen from "./components/SplashScreen";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

import Social from "./components/Social";
import End from "./components/End";


const sesi = [Hero, AboutMe, TechStack, Projects, Experience, Social, End]

function App() {

  const [page, setPage] = useState(0)
  const [isScroll, setIsScroll] = useState(false)

  const handleScroll = (e) => {
    if (isScroll) return
    setIsScroll(true)

    if (e.deltaY > 0 && page < sesi.length - 1) {
      setPage((bef) => bef + 1)
    } else if (e.deltaY < 0 && page > 0) {
      setPage((bef) => bef - 1)
    }

    setTimeout(() => {
      setIsScroll(false)
    }, 800)

  }



  useEffect(() => {
    window.addEventListener("wheel", handleScroll)
    return () => {
      window.removeEventListener("wheel", handleScroll)
    }
  })

  const Curr = sesi[page]




  const [notSplash, setNotSplash] = useState(false);




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

          <AnimatePresence mode="wait" key={page}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 2 }}

          >

            <Curr />
          </AnimatePresence>



          <motion.div
            style={{
              scaleX: `${(page + 1) / sesi.length * 100}%`,
            }}
            className="fixed top-0 w-full h-1 bg-green-400"
          ></motion.div>

        </>
      )}
    </div>
  );
}

export default App;
