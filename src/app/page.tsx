"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useLocale } from "@/hooks/useLocale";

export default function Home() {
    const { t } = useLocale();
    const homePage = t.homePage;

    function getCurrentExperience() {
        const startDate = new Date('2023-10-01');
        const currentDate = new Date();
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        const exp = homePage.description.experience;

        if (months === 0) {
            return `${years} ${years === 1 ? exp.year : exp.years}`;
        }
        return `${years} ${years === 1 ? exp.year : exp.years} ${exp.and} ${months} ${months === 1 ? exp.month : exp.months}`;
    }

    return (
        <div className="flex mt-10 flex-col md:flex-row gap-10 mx-auto max-w-[70%]">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col items-center rounded-md p-5 gap-5 bg-gray-100 dark:bg-[#1E1E1F]">

                <img src="/images/arthur.png" alt="Arthur Geromello" className="w-[calc(100%-2rem)] max-w-[800px] h-auto rounded-md" />
                <motion.div className="text-2xl font-semibold text-center">Arthur Geromello</motion.div>

                <div className="flex gap-4 mt-4 justify-center md:justify-start pb-3">
                    <a title={homePage.socialLinks.linkedin} href="https://www.linkedin.com/in/arthur-geromello-ab44a8159/" target="_blank" rel="noopener noreferrer"
                        className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                        <FaLinkedin />
                    </a>
                    <a title={homePage.socialLinks.github} href="https://github.com/Arthuthu" target="_blank" rel="noopener noreferrer"
                        className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                        <FaGithub />
                    </a>
                    <a title={homePage.socialLinks.whatsapp} href="https://wa.me/+5517997824891/" target="_blank" rel="noopener noreferrer"
                        className="text-3xl text-red-500 border border-red-500 p-2 rounded-full
                            hover:text-gray-900 hover:bg-red-500 transition-colors duration-500">
                        <FaWhatsapp />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="flex flex-col text-center text-xl mt-4 p-5 gap-3 bg-gray-100 dark:bg-[#1E1E1F] md:mt-0 md:text-start "
            >
                <p>{homePage.description.base} {getCurrentExperience()} {homePage.description.experience2}</p>
                <p>{homePage.description.stack1}</p>
                <p>{homePage.description.stack2}</p>
            </motion.div>
        </div>
    );
}
