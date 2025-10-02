import { link } from "fs";

export const layoutPage = {
    home: 'Home',
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
}

export const homePage = {
    greeting: "Hello, It's",
    role: "I'm a",
    roleTitle: "FullStack Developer",
    description: {
        base: "I'm a developer from Brazil, I currently have",
        experience: {
            year: "year",
            years: "years",
            month: "month",
            months: "months",
            and: "and",
        },
        experience2: "of experience.",
        stack1: "I am a Full-Stack Developer specializing in backend development with C# and frontend development with React, Angular, and Blazor. I have worked on building scalable APIs and modern web applications, applying clean architecture principles such as DDD and leveraging frameworks like .NET Core, MudBlazor, and Tailwind CSS.",
        stack2: "My background includes maintaining legacy systems in Visual Basic, as well as developing modern solutions with Angular 19+ and component libraries such as DevExpress and Fuse. I value writing clean, maintainable code, collaborating effectively in teams, and continuously learning new technologies.",
    },
    socialLinks: {
        linkedin: "Linkedin",
        github: "Github",
        whatsapp: "Whatsapp",
    }
};

export const experiencePage = {
    title: 'Professional Experience',
    subtitle: 'A summary of the companies where I\'ve contributed as a developer',
    experiences: [
        {
            company: 'Fiorilli Software',
            period: 'May 2024 - Present',
            description: [
                'Visual Basic / Delphi / Angular / React',
                'Maintained a legacy Visual Basic application on older versions of the .NET Framework.',
                'Built and extended REST APIs in Delphi using the Horse framework.',
                'Developed new features in a large-scale Angular application with TypeScript.',
                'Designed responsive layouts with Tailwind CSS, integrating Fuse and DevExpress components for improved UI/UX.',
                'Refactored a React application to improve performance and maintainability.',
            ],
        },
        {
            company: 'UPPER Softwares',
            period: 'Oct 2023 - Mar 2024',
            description: [
                'C# / Blazor',
                'Designed and maintained C# APIs with the latest .NET versions, using Entity Framework Code First.',
                'Modeled and implemented databases in PostgreSQL.',
                'Built modern web pages with MudBlazor.',
                'Applied Domain-Driven Design (DDD) principles to backend development.',
                'Structured projects in microservices using Docker.',
            ],
        },
    ],
}

export const educationPage = {
    title: "University and Self-Taught Learning",
    university: "I studied Computer Engineering at UNIFEV (Votuporanga, São Paulo).",
    universityKnowledge: "During my time I learn about data structures, algorithms, databases, computer architecture, networks, operating systems, software engineering, and project management.",
    selfTaught: "Beyond formal education, I’ve gained most of my knowledge through self-study, online courses, and hands-on projects.",
    youtubers: "Some of my most impactful mentors have been content creators like IAmTimCorey, Nick Chapsas, and Milan Jovanović, they helped me build a great foundation of knowledge in C# and programming in general.",
    disclaimer: "I’m committed to continuously improving by learning best practices, staying up to date with the latest technologies, and filling knowledge gaps to become the best developer I can be.",
};

export const contactPage = {
    title: "Get in Touch",
    linkedInDescription: "Let's connect via LinkedIn",
    githubDescription: "Check out my projects on GitHub",
    whatsappDescription: "Let's chat on WhatsApp",
    emailDescription: "Drop me a message via Email",
    locationTitle: "Location",
    locationDescription: "View my location on Google Maps"
};