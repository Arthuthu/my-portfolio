"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocaleProvider } from "@/contexts/LocaleContext";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const [dark, setDark] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		try {
			const stored = localStorage.getItem("theme");
			if (stored === "dark") setDark(true);
			else if (stored === "light") setDark(false);
			else {
				setDark(false);
			}
		} catch (e) {
			setDark(false);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", dark ? "dark" : "light");
	}, [dark]);

	return (
		<html lang="en" className={dark ? "dark" : ""}>
			<body className="bg-gray-200 dark:bg-[#0D0B0B] text-gray-900 dark:text-white">
				<LocaleProvider>
					<nav className="p-5">
						<div className="max-w-7xl mx-auto">
							<div className="flex justify-between items-center">
								<div className="flex items-center gap-4">
									<Link href="/" className="text-4xl text-red-500 font-bold">Arthur</Link>
									<LanguageSwitcher />
									<div
										onClick={() => setDark((d) => !d)}
										className="flex items-center gap-2 cursor-pointer select-none p-2 rounded-full transition-all duration-300 hover:scale-105"
									>
										<div className="relative w-14 h-7 rounded-full bg-gray-50 dark:bg-stone-800 transition-colors duration-300">
											<div className={`absolute top-1 left-1 w-5 h-5 rounded-full transform transition-transform duration-300 ${dark ? 'translate-x-7 bg-stone-800' : 'translate-x-0 bg-red-500'}`}>
												{dark ? (
													<svg className="w-5 h-5 text-stone-200" fill="currentColor" viewBox="0 0 20 20">
														<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
													</svg>
												) : (
													<svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
													</svg>
												)}
											</div>
										</div>
									</div>
								</div>

								<div className="hidden md:flex space-x-8 font-semibold text-2xl">
									{[
										{ href: "/", label: "Home" },
										{ href: "/experience", label: "Experience" },
										{ href: "/services", label: "Services" },
										{ href: "/skills", label: "Skills" },
										{ href: "/education", label: "Education" },
										{ href: "/contact", label: "Contact" },
									].map(({ href, label }) => {
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

								<div className="md:hidden">
									<button
										onClick={() => setIsMenuOpen(!isMenuOpen)}
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
											{isMenuOpen ? (
												<path d="M6 18L18 6M6 6l12 12" />
											) : (
												<path d="M4 6h16M4 12h16M4 18h16" />
											)}
										</svg>
									</button>
								</div>
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
											{[
												{ href: "/", label: "Home" },
												{ href: "/services", label: "Services" },
												{ href: "/skills", label: "Skills" },
												{ href: "/education", label: "Education" },
												{ href: "/experience", label: "Experience" },
												{ href: "/contact", label: "Contact" },
											].map(({ href, label }) => {
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
						</div>
					</nav>
					{children}
				</LocaleProvider>
			</body>
		</html>
	);
}
