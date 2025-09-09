"use client";
import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const [dark, setDark] = useState(false);

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
				<nav className="flex p-5">
					<div className="flex flex-1 gap-2">
						<div className="text-4xl text-red-500 font-bold">Arthur</div>
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
					
					<div className="flex flex-1 gap-[50px] font-semibold text-2xl">
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
									className={`cursor-pointer 
										hover:text-red-400 hover:border-b-2 hover:border-red-500 transition-all duration-200 
										${isActive ? " text-red-500 border-b-2 border-red-600" : ""}`
									}
								>
									{label}
								</Link>
							);
						})}
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
