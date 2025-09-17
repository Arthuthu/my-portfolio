"use client"; 

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Home() {

    function getCurrentExperience() {
        const startDate = new Date('2023-10-01');
        const currentDate = new Date();
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (months === 0) {
            return `${years} year${years !== 1 ? 's' : ''}`;
        }
        return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
    }

    return (
        <div className="flex mt-10 flex-col md:flex-row">
            <div className="flex-1 flex items-center justify-center">
                <img src="/images/arthur.png" alt="Arthur Geromello"className="w-[calc(100%-2rem)] max-w-[600px] h-auto rounded-full" />
            </div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-1 flex-col justify-center items-start text-center mt-4 md:mt-0 md:text-start"
            >
                <h1 className="text-6xl font-bold">Hello, It's <span className="text-red-500">Arthur Geromello</span></h1>
                <p className="text-5xl font-semibold mt-2 justify-center md:justify-start w-full">I'm a <span className="text-red-500">FullStack Developer</span></p>
                <div className="flex flex-col mt-2 text-xl">
                    <p>I'm a developer from Brazil, I currently have {getCurrentExperience()} of experience.</p>
                    <p>My main backend language is C#, altough I have some experience with Visual Basic and Delphi.</p>
                    <p>On the frontend, I have worked with React and Angular, both using Tailwind CSS and sometimes Bootstrap.</p>
                    <div className="flex gap-4 mt-4 justify-center md:justify-start pb-3">
                        <a href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" target="_blank" rel="noopener noreferrer"
                           className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Arthuthu" target="_blank" rel="noopener noreferrer"
                           className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                            <FaGithub />
                        </a>
                        <a href="https://wa.me/+5517997824891/" target="_blank" rel="noopener noreferrer"
                           className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>  
            </motion.div>
        </div>
    );
}
