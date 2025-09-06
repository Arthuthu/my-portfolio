import Link from "next/link";

export default function Home() {

    function getCurrentExperience() {
        const startDate = new Date('2023-10-01');
        const currentDate = new Date();
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (months === 0) {
            return `${years} year${years !== 1 ? 's' : ''}`;
        }
        return `${years} year${years !== 1 ? 's' : ''} and ${months} month${months !== 1 ? 's' : ''}`;
    }

    return (
        <div className="flex mt-10">
            <div className="flex-1 flex items-center justify-center">
                <img src="/images/arthur.png" alt="Arthur Geromello"className="w-[calc(100%-2rem)] max-w-[600px] h-auto rounded-full" />
            </div>
            <div className="flex flex-1 flex-col justify-center items-start">
                <h1 className="text-6xl font-bold">Hello, It's <span className="text-red-500">Arthur Geromello</span></h1>
                <p className="text-5xl font-semibold mt-2">I'm a <span className="text-red-500">FullStack Developer</span></p>
                <div className="flex flex-col mt-2 text-xl">
                    <p>I'm a developer from Brazil, I currently have {getCurrentExperience()} of experience.</p>
                    <p>My main backend language is C#, altough I have some experience with Visual Basic and Delphi.</p>
                    <p>On the frontend, I have worked with React and Angular, both using Tailwind CSS and sometimes Bootstrap.</p>
                </div>  
            </div>
        </div>
    );
}
