import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import BarDurationSong from "../helper/BarDurationSong";


export default function End() {

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
            ) : (
                <motion.p
                    className="text-xs md:text-xl bg-gradient-to-r from-slate-500 to-slate-200 bg-clip-text text-transparent"
                    initial={{ x: 300 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 2 }}
                >
                    {lagu.message}
                </motion.p>
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