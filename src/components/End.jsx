import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import BarDurationSong from "../helper/BarDurationSong";
import FakeVisualizer from "../helper/Visualizer";


export default function End() {

    
    
    // not play spotify
    const audioRef = useRef(null)
    const musics = [
        {
            title: '10C',
            artist: 'Sharou',
            link: "/music/sharou-10c.mp3",
        },
        {
            title: 'You and Me',
            artist: 'Sharou',
            link:   "/music/sharou-you_and_me.mp3",
        },
        {
            title: 'Turirip ip ip',
            artist: 'NCS Symbolism',
            link:  "/music/turipip.mp3",
        },
    ]

    const [currTrack, setCurrTrack] = useState(0)
    const [isPLaying, setIsPlaying] = useState(false)

    const play = () => {
        audioRef.current.play()
        setIsPlaying(true)
    }
    const pause = () => {
        audioRef.current.pause()
        setIsPlaying(false)
    }

    const next = () => {
        const nextTrack = (currTrack + 1) % musics.length
        setCurrTrack(nextTrack)
        setTimeout(play, 100)
    }

    const prev = () => {
        const prevTrack = (currTrack - 1 + musics.length) % musics.length
        setCurrTrack(prevTrack)
        setTimeout(play, 100)
    }

    const currMusic = musics[currTrack]
    
    
    // play spotify
    const [lagu, setLagu] = useState({});
    const [duration, setDuration] = useState(0);
    const [progress, setProgress] = useState(0);
    const intervalRef = useRef(null)



    const getLagu = async () => {
        try {
            const res = await axios.get(
                "https://quizmaker-app-api.vercel.app/api/lagu_spotify"
            );

            const data = await res.data;
            setLagu(data);
            setDuration(data.duration_ms || 0);
            setProgress(data.progress_ms || 0);



            // clear interval kalo ada
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            if (data.is_playing) {
                const start = Date.now()


                intervalRef.current = setInterval(() => {
                    // update progress dari waktu yg berlalu
                    const elapsed = Date.now() - start;
                    setProgress(data.progress_ms + elapsed);
                }, 1000)
            }


        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        getLagu();

        // tiap 30 detik fetch ini
        const interval = setInterval(getLagu, 30000)
        return () => {
            clearInterval(interval)
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    }, []);


    return (
        <section className="w-full h-screen flex p-16 flex-col justify-center items-center">

            {lagu.artist ? (
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
                        className="w-32 h-32 rounded-md border-green-400 border-2"
                        src={lagu.imgLagu}
                        alt={lagu.judul}
                    />


                    <BarDurationSong progress={progress} duration={duration} />




                </motion.div>
            ) :(
                <div className="flex flex-col items-center gap-4">
                <FakeVisualizer isPlaying={isPLaying}/>

                    <motion.p
                        className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
                        initial={{ x: 300 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 2 }}
                    >
                        Putro tidak sedang memutar spotifynya 🗣️, nih setel sendiri kalau mau
                    </motion.p>

       
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-sm md:text-lg bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
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

                        {isPLaying ? (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={pause}
                                className="px-6 py-2 border border-green-400 rounded-md hover:bg-slate-800"
                            >
                                ⏸ Pause
                            </motion.button>
                        ) : (
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={play}
                                className="px-6 py-2 border border-green-400 rounded-md hover:bg-slate-800"
                            >
                                ▶ Play
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
                )}

            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-2xl mt-20 h-1/2 md:text-4xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
            >
                Thank you :)
            </motion.h1>
        </section>
    )
}