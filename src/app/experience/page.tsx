"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";

const experiences = [
    {
        company: "Fiorilli Software",
        period: "May 2024 - Present",   
        description: [
            "Visual Basic / Delphi / Angular / React",
            "Maintained a legacy Visual Basic application on older versions of the .NET Framework.",
            "Built and extended REST APIs in Delphi using the Horse framework.",
            "Developed new features in a large-scale Angular application with TypeScript.",
            "Designed responsive layouts with Tailwind CSS, integrating Fuse and DevExpress components for improved UI/UX.",
            "Refactored a React application to improve performance and maintainability.",
        ],
    },
    {
        company: "UPPER Softwares",
        period: "Oct 2023 - Mar 2024",
        description: [
            "C# / Blazor",
            "Designed and maintained C# APIs with the latest .NET versions, using Entity Framework Code First.",
            "Modeled and implemented databases in PostgreSQL.",
            "Built modern web pages with MudBlazor.",
            "Applied Domain-Driven Design (DDD) principles to backend development.",
            "Structured projects in microservices using Docker.",
        ],
    },
];

export default function Experience() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
        >
            <motion.h1
                className="text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                Professional Experience
            </motion.h1>

            <motion.p
                className="mt-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                A summary of the companies where I’ve contributed as a developer
            </motion.p>

            <div className="w-full mt-10 space-y-4">
                {experiences.map((exp, idx) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <div className="border border-gray-400 shadow-sm">
                                <DisclosureButton
                                    className="flex w-full justify-between bg-gray-100 px-4 py-3 text-left text-lg
                                    font-medium hover:bg-gray-200 dark:bg-stone-900 dark:hover:bg-stone-800 transition"
                                >
                                    <span>
                                        {exp.company} - ({exp.period})
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-500`}
                                    />
                                </DisclosureButton>

                                <AnimatePresence initial={false}>
                                    {open && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        >
                                            <DisclosurePanel className="pl-3" static>
                                                <motion.ul
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.08 }}
                                                    className="px-6 pt-2 pb-4 text-md text-semibold text-gray-800 dark:text-white text-left list-disc space-y-2"
                                                >
                                                    {exp.description.map((point, i) => (
                                                        <li key={i}>{point}</li>
                                                    ))}
                                                </motion.ul>
                                            </DisclosurePanel>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </motion.div>
    );
}
