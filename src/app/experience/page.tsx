"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";


export default function Experience() {
    const { t } = useLocale();
    const experiencePage = t.experiencePage;

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
                {experiencePage.title}
            </motion.h1>

            <motion.p
                className="mt-4 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                {experiencePage.subtitle}
            </motion.p>

            <div className="w-full mt-10 space-y-4">
                {experiencePage.experiences.map((exp: { company: string; period: string; description: string[] }, idx: number) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <div className="border border-gray-400 shadow-sm">
                                <DisclosureButton
                                    className="flex w-full justify-between bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-gray-200 dark:bg-stone-900 dark:hover:bg-stone-800 transition"
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
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <DisclosurePanel className="pl-3" static>
                                                <motion.ul
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.08 }}
                                                    className="px-6 pt-2 pb-4 text-md text-semibold text-gray-800 dark:text-white text-left list-disc space-y-2"
                                                >
                                                    {exp.description.map((point: string, i: number) => (
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