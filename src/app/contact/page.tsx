"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useLocale } from "@/hooks/useLocale";

export default function Contact() {
    const { t } = useLocale();
    const homePage = t.homePage;
    const contactPage = t.contactPage;

    const contactCards = [
        {
            icon: <FaLinkedin className="text-4xl" />,
            title: "LinkedIn",
            description: contactPage.linkedInDescription,
            link: "https://www.linkedin.com/in/arthur-geromello-ab44a8159/",
            ariaLabel: homePage.socialLinks.linkedin
        },
        {
            icon: <FaGithub className="text-4xl" />,
            title: "GitHub",
            description: contactPage.githubDescription,
            link: "https://github.com/Arthuthu",
            ariaLabel: homePage.socialLinks.github
        },
        {
            icon: <FaWhatsapp className="text-4xl" />,
            title: "WhatsApp",
            description: contactPage.whatsappDescription,
            link: "https://wa.me/+5517997824891/",
            ariaLabel: homePage.socialLinks.whatsapp
        },
        {
            icon: <FaEnvelope className="text-4xl" />,
            title: "Email",
            description: contactPage.emailDescription,
            link: "mailto:arthurgeromello@gmail.com",
            ariaLabel: "Send email"
        },
        {
            icon: <FaMapMarkerAlt className="text-4xl" />,
            title: contactPage.locationTitle,
            description: contactPage.locationDescription,
            link: "https://www.google.com/maps?q=Cosmorama,+Brazil",
            ariaLabel: "View on map"
        }
    ];

    return (
        <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-center mb-6"
            >
                <h1 className="text-4xl font-bold mb-4">{ contactPage.title }</h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {contactCards.map((card, index) => (
                    <motion.a
                        key={card.title}
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={card.ariaLabel}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        className="flex flex-col items-center p-6 rounded-xl bg-gray-100 dark:bg-[var(--background-gray)] 
                                 hover:bg-red-50 dark:hover:bg-red-900/20 transform hover:-translate-y-1 
                                 transition-all duration-300 cursor-pointer"
                    >
                        <div className="text-red-500 group-hover:text-red-600 transition-colors duration-300">
                            {card.icon}
                        </div>
                        <h2 className="text-xl font-semibold mt-4 mb-2">{card.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-center">
                            {card.description}
                        </p>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
