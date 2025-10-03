"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";

export default function Skills() {
    const { t } = useLocale();
    const skillsPage = t.skillsPage;

    const categories = [
        {
            title: skillsPage.programmingLanguages,
            items: [
                "C# (APIs, .NET Core, Blazor, Entity Framework, Dapper, Hangfire)",
                "Delphi (Horse)",
                "Visual Basic (.NET Framework)",
                "JavaScript",
                "TypeScript",
                "SQL (SQL Server, Firebird)",
            ],
        },
        {
            title: skillsPage.frameworksAndLibraries,
            items: [
                ".NET Core",
                "Blazor / MudBlazor",
                "Angular (19+)",
                "React",
                "Bootstrap",
                "TailwindCSS",
                "DevExpress",
                "Fuse (layouts)",
            ],
        },
        {
            title: skillsPage.databases,
            items: [
                "SQL Server",
                "Firebird",
            ],
        },
        {
            title: skillsPage.toolsAndTechnologies,
            items: [
                "Entity Framework",
                "Dapper",
                "RabbitMQ",
                "REST APIs",
                "DDD (Domain-Driven Design)",
                "SVN, GitHub",
            ],
        },
    ];

    return (
        <main className="min-h-[calc(100vh-6rem)] px-6">
            <title>{ skillsPage.title }</title>
            <div className="max-w-6xl mx-auto">
                <motion.header
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-5"
                >
                    <h1 className="text-4xl font-bold mb-3">{ skillsPage.title }</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        { skillsPage.description }
                    </p>
                </motion.header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className="bg-gray-100 dark:bg-[var(--background-gray)] rounded-xl py-3 px-5 shadow-sm"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{cat.title}</h2>
                            <ul className="flex flex-col gap-3">
                                {cat.items.map((item) => (
                                    <li key={item} className="flex items-center flex gap-3">
                                        <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-red-500 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </section>
            </div>
        </main>
    );
}
