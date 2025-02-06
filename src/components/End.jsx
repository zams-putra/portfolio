import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "motion/react";


export default function End() {

    const [lagu, setLagu] = useState({});


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
        <section className="w-full h-screen flex p-16 flex-col justify-center items-center">


            {lagu.artist ? (
                <motion.div
                    initial={{ x: 300 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 1.9 }}
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