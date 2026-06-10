
import { motion } from "motion/react";
// import BarDurationSong from "../helper/BarDurationSong";
import FakeVisualizer from "../helper/Visualizer";
import { useMusic } from "../context/MusicContext";
import Lamp from "../components/design/Lamp";
import { useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";


export default function End() {

    
    
    // not play spotify


    const { currMusic, isPlaying, play, pause, next, prev } = useMusic();
    const audioRef = useRef(null)

    
    // play spotify
    // const [lagu, setLagu] = useState({});
    // const [duration, setDuration] = useState(0);
    // const [progress, setProgress] = useState(0);
    // const intervalRef = useRef(null)



    // const getLagu = async () => {
    //     try {
    //         const res = await axios.get(
    //             "https://quizmaker-app-api.vercel.app/api/lagu_spotify"
    //         );

    //         const data = await res.data;
    //         setLagu(data);
    //         setDuration(data.duration_ms || 0);
    //         setProgress(data.progress_ms || 0);



    //         // clear interval kalo ada
    //         if (intervalRef.current) {
    //             clearInterval(intervalRef.current);
    //         }

    //         if (data.is_playing) {
    //             const start = Date.now()


    //             intervalRef.current = setInterval(() => {
    //                 // update progress dari waktu yg berlalu
    //                 const elapsed = Date.now() - start;
    //                 setProgress(data.progress_ms + elapsed);
    //             }, 1000)
    //         }


    //     } catch (err) {
    //         console.log(err);
    //     }
    // };


    // useEffect(() => {
    //     getLagu();

    //     // tiap 30 detik fetch ini
    //     const interval = setInterval(getLagu, 30000)
    //     return () => {
    //         clearInterval(interval)
    //         if (intervalRef.current) {
    //             clearInterval(intervalRef.current);
    //         }
    //     }
    // }, []);


    return (
        <section className="w-full h-screen flex p-16 flex-col justify-center items-center">

            {/* {lagu.artist ? (
                <motion.div
                    initial={{ x: 300 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.9 }}
                    className="w-full h-1/2 p-4 flex flex-col items-center gap-4"
                >
                    <p className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent">
                        Putro sedang mendengarkan ini
                    </p>
                    <p className="text-xs md:text-xl bg-gradient-to-r text-center from-slate-500 to-slate-200 bg-clip-text text-transparent">
                        {lagu.judul} - {lagu.artist}
                    </p>
                    <img
                        className="w-32 h-32 rounded-md border-[#B1FC0A] border-2"
                        src={lagu.imgLagu}
                        alt={lagu.judul}
                    />


                    <BarDurationSong progress={progress} duration={duration} />




                </motion.div>
            ) :(
              
                )} */}

                  <div className="flex flex-col items-center gap-4">
                <FakeVisualizer isPlaying={isPlaying}/>

                    <motion.p
                        className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
                        initial={{ x: 300 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        Dulu ada fitur API spotify dah gada noh 🗣️
                    </motion.p>

       
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-sm md:text-lg bg-gradient-to-r from-[#B1FC0A] to-green-200 bg-clip-text text-transparent">
                            {currMusic.title}
                        </p>
                        <p className="text-xs md:text-sm text-slate-400">
                            {currMusic.artist}
                        </p>
                    </motion.div>

            
                    <audio
                        ref={audioRef}
                        src={currMusic.link}
                        onEnded={next}
                    />

          
                    <div className="flex gap-4 mt-2">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="px-4 py-2 border border-slate-500 rounded-md hover:bg-slate-800"
                        >
                            ⏮
                        </motion.button>

                        {isPlaying ? (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={pause}
                                className="px-6 py-2 border border-[#B1FC0A] rounded-md hover:bg-slate-800 flex gap-1 justify-center items-center"
                            >
                                <FaPause/> Pause
                            </motion.button>
                        ) : (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={play}
                                className="px-6 py-2 border border-[#B1FC0A] rounded-md hover:bg-slate-800 flex gap-1 justify-center items-center"
                            >
                               <FaPlay/> Play
                            </motion.button>
                        )}



                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="px-4 py-2 border border-slate-500 rounded-md hover:bg-slate-800"
                        >
                            ⏭
                        </motion.button>

                    </div>
                </div>

        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
             <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="text-4xl md:text-7xl font-black tracking-tighter whitespace-nowrap  min-h-[1.2em] w-full text-center flex justify-center items-center"
                >
                <span 
                    className=" text-transparent select-none"
                    style={{ WebkitTextStroke: '1px #B1FC0A', zIndex: 0 }}
                >
                    Thankyou
                </span>
                </motion.h1>
            <div className="flex flex-col justify-center items-center">
                <Lamp classname="w-32 h-32 md:w-[420px] md:h-[420px]"/>
                <p className="text-slate-500">{`// Turn on the lamp`}</p>
            </div>
        </div>
        </section>
    )
}