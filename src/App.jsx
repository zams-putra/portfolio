/* eslint-disable react/prop-types */
import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Social from "./pages/Social";
import End from "./pages/End";
import Terminal from "./components/Terminal";
import Chatbot from "./components/Chatbot";

import { SiGnometerminal } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import FooterNav from "./components/FooterNav";
import ScrollUp from "./helper/ScrollUp";
import ScrollDown from "./helper/ScrollDown";
import StarBackground from "./components/design/StarBackground";
import FloatingMusic from "./helper/FloatingMusix";
import { UseLazyMount } from "./helper/UseLazyMount";


const sesi = [Hero, AboutMe, TechStack, Projects, Experience, Social, End]
// kudu sama urutannya kek di components/FooterNav.jsx


// biar ga berat kalau close terminal
// - soalnya kan 1 kali load di main menu ngeload semua yak
function LazySection({ children }) {
  const [ref, shouldRender] = UseLazyMount(0.05);
  return (
    <div ref={ref}>
      {shouldRender ? children : <div className="min-h-screen" />}
    </div>
  );
}

function Home() {
  const [page, setPage] = useState(0)
  const { scrollYProgress } = useScroll()

  const handleDown = () => setPage((bef) => bef + 1)
  const handleUp = () => setPage((bef) => bef - 1)
  const handleJump = (i) => setPage(i) // dipake footernav buat direct jump antar section page

  const tengahWoiRef = useRef(null)
  const Curr = sesi[page]

  const [notSplash, setNotSplash] = useState(false);


  const [overlay, setOverlay] = useState(null)
  const [showBtnTerminal, setShowBtnTerminal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowBtnTerminal(true), 6000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setNotSplash(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tengahWoiRef.current) {
      tengahWoiRef.current.scrollIntoView({ behavior: 'smooth', top: '0' })
    }
  })

  return (
    <>
      <StarBackground/> {/*  awalnya ini di dalem njir reload tiap close terminal, alhasil lag parah*/}

      <div className="fixed inset-0 bg-gradient-to-r from-slate-900 via-black to-slate-900 -z-10" />
      <AnimatePresence mode="wait">

        {overlay === null ? (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.2 }}
            className="relative text-slate-100 min-h-screen flex flex-col items-center gap-20 overflow-hidden"
          >
            <AnimatePresence>{!notSplash && <SplashScreen />}</AnimatePresence>

            {notSplash && (
              <>

                <main className="md:hidden pb-20">
          
                  <AnimatePresence
                    mode="wait"
                    key={page}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.7 }}
                  >
                    <section ref={tengahWoiRef} className="py-2 w-full gap-4 justify-between items-center flex flex-col">
                      {page > 0 && <ScrollUp onUp={handleUp} />}
                      <Curr />
                      {page < sesi.length - 1 && <ScrollDown onDown={handleDown} />}
                    </section>
                  </AnimatePresence>
                  <motion.div
                    style={{ scaleX: (page + 1) / sesi.length }}
                    className="fixed md:hidden top-0 w-full h-1 bg-[#B1FC0A]"
                  />

                  <FooterNav
                    page={page}
                    onNavigate={handleJump}
                    onLaunchTerminal={() => setOverlay("terminal")}
                    onLaunchChatbot={() => setOverlay("chatbot")}
                    musicSlot={<FloatingMusic compact />}
                  />
                </main>


                <main className="flex-col gap-2 hidden md:flex">
                  <Hero />
                  <LazySection><AboutMe /></LazySection>
                  <LazySection><TechStack /></LazySection>
                  <LazySection><Projects /></LazySection>
                  <LazySection><Experience /></LazySection>
                  <LazySection><Social /></LazySection>
                  <LazySection><End /></LazySection>

                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="fixed hidden md:block top-0 w-full h-1 bg-[#B1FC0A]"
                  />
                </main>
              </>
            )}

            {showBtnTerminal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hidden md:flex flex-col gap-3 items-end"
              >
      
                <FloatingMusic />
                <motion.button
                  onClick={() => setOverlay("chatbot")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="z-30 md:right-3 md:bottom-20 fixed self-end bg-transparent border-2 border-[#B1FC0A] hover:bg-[#B1FC0A]/10 text-[#B1FC0A] px-4 py-2 rounded-lg font-semibold flex gap-1 justify-center items-center"
                >
                  <span><FiMessageSquare /></span>
                  <span>SidiBot</span>
                </motion.button>
                <motion.button
                  onClick={() => setOverlay("terminal")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ boxShadow: "0 0 0px #B1FC0A" }}
                  animate={{
                    boxShadow: [
                      "0 0 0px #B1FC0A",
                      "0 0 16px #B1FC0A",
                      "0 0 32px #B1FC0A",
                      "0 0 16px #B1FC0A",
                      "0 0 0px #B1FC0A"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mb-4 mr-4 z-30 md:right-3 md:bottom-3 fixed right-2 bottom-2 self-end bg-[#B1FC0A] hover:bg-[#484BB1] text-black px-4 py-2 rounded-lg font-semibold flex gap-1 justify-center items-center"
                >
                  <span><SiGnometerminal /></span>
                  <span>Launch Terminal</span>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        ) : overlay === "terminal" ? (

          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >

            <Terminal setIsTerminal={() => setOverlay(null)} />
          </motion.div>
        ) : (

          <motion.div
            key="chatbot"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          >

            <Chatbot setIsChatbot={() => setOverlay(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;