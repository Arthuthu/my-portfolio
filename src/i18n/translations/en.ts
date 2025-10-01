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
        stack1: "My main backend language is C#, although I have some experience with Visual Basic and Delphi.",
        stack2: "On the frontend, I have worked with React, Angular, and Blazor, using Tailwind CSS, MudBlazor, and sometimes Bootstrap.",
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