"use client";

import { useLocale } from "@/hooks/useLocale";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
    const { t } = useLocale();
    const layoutPage = t.layoutPage;

    const links = [
        { href: "/", label: layoutPage.home },
        { href: "/experience", label: layoutPage.experience },
        { href: "/skills", label: layoutPage.skills },
        { href: "/education", label: layoutPage.education },
        { href: "/contact", label: layoutPage.contact },
    ];

    return (
        <>
            <div className="hidden md:flex space-x-8 font-semibold text-2xl">
                {links.map(({ href, label }) => {
                    const pathname = usePathname();
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`cursor-pointer 
                            hover:text-red-400 hover:border-b-2 hover:border-red-500 transition-all duration-200 
                            ${isActive ? "text-red-500 border-b-2 border-red-600" : ""}`
                            }
                        >
                            {label}
                        </Link>
                    );
                })}
            </div>

            <div className={`
            fixed inset-0 z-50 md:hidden
            ${isMenuOpen ? 'visible' : 'invisible'}
            `}>
                <div
                    className={`
                    absolute inset-0 bg-black/50 backdrop-blur-sm
                    transition-opacity duration-300
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0'}
                    `}
                    onClick={() => setIsMenuOpen(false)}
                />

                <div className={`
                absolute top-0 right-0 h-full w-64
                bg-gray-100 dark:bg-[#0D0B0B] shadow-xl
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}>
                    <div className="flex flex-col p-6">
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 dark:text-white hover:text-red-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4 font-semibold text-xl">
                            {links.map(({ href, label }) => {
                                const pathname = usePathname();
                                const isActive = pathname === href;
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`cursor-pointer block px-4 py-2 rounded-md
                                        hover:text-red-400 hover:bg-gray-200 dark:hover:bg-stone-800 transition-all duration-200
                                        ${isActive ? "text-red-500 bg-gray-200 dark:bg-stone-800" : ""}`
                                        }
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}