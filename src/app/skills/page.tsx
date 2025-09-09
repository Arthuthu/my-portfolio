"use client"; // 👈 required in App Router

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
    return (
        <motion.div
            className="flex flex-col items-center justify-center h-screen text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Heading */}
            <motion.h1
                className="text-4xl font-bold"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                Skills Page
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="mt-4 max-w-md text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                I’m a developer passionate about clean UIs and smooth transitions.
            </motion.p>

            {/* Link */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <Link href="/" className="mt-6 inline-block underline">
                    ← Back Home
                </Link>
            </motion.div>
        </motion.div>
    );
}
