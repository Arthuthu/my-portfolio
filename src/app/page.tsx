import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Hi, I’m Arthur 👋</h1>
            <p className="mt-4">Welcome to my portfolio</p>
            <Link href="/about" className="mt-6 underline">
                Go to About →
            </Link>
        </div>
    );
}
