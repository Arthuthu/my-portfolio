"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

export default function About() {
    const { t } = useLocale();
    const educationPage = t.educationPage;

    return (
        <div className="flex flex-col gap-5 items-center mx-auto w-[95%] md:max-w-[55%]">
            <motion.h1
                className="text-4xl font-bold mb-5 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                {educationPage.title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex items-center flex-col text-center text-xl mt-4 p-5 gap-3 bg-gray-100 mt-10 rounded-md
                dark:bg-[var(--background-gray)] md:mt-0 md:text-start lg:flex-row lg:items-start"
            >
                <img src="/images/unifev.jpg" alt="UNIFEV" className="w-[calc(100%-2rem)] max-w-[300px] h-auto rounded-md" />
                <div className="flex flex-col gap-5">
                    <p>{educationPage.university}</p>
                    <p>{educationPage.universityKnowledge}</p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col text-center text-xl mt-4 p-5 gap-5 bg-gray-100 mt-5 rounded-md
                dark:bg-[var(--background-gray)] md:mt-0 md:text-start"
            >
                <div>{educationPage.selfTaught}</div>
                <div className="flex flex-col items-center">
                    <div>{educationPage.youtubers}</div>
                    <div className="flex pt-2">
                        <a href="https://www.youtube.com/@IAmTimCorey" target="_blank" rel="noopener noreferrer">
                            <img src="/images/timcorey.jpg" alt="Tim Corey" className="w-[calc(100%-2rem)] max-w-[100px] h-auto hover:opacity-80 transition-opacity" />
                        </a>
                        <a href="https://www.youtube.com/@nickchapsas" target="_blank" rel="noopener noreferrer">
                            <img src="/images/nickchapsas.jpg" alt="Nick Chapsas" className="w-[calc(100%-2rem)] max-w-[100px] h-auto hover:opacity-80 transition-opacity" />
                        </a>
                        <a href="https://www.youtube.com/@MilanJovanovicTech" target="_blank" rel="noopener noreferrer">
                            <img src="/images/milan.jpg" alt="Milan Jovanović" className="w-[calc(100%-2rem)] max-w-[100px] h-auto hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                </div>
                <div>{educationPage.disclaimer}</div>
            </motion.div>
        </div>

    );
}
