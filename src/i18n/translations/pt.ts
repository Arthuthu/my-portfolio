export const layoutPage = {
    home: 'Início',
    experience: 'Experiência',
    skills: 'Habilidades',
    education: 'Educação',
    contact: 'Contato',
}

export const homePage = {
    greeting: "Olá, eu sou",
    role: "Sou",
    roleTitle: "Desenvolvedor FullStack",
    description: {
        base: "Sou um desenvolvedor do Brasil, atualmente tenho",
        experience: {
            year: "ano",
            years: "anos",
            month: "mês",
            months: "meses",
            and: "e",
        },
        experience2: "de experiência.",
        stack1: "Minha principal linguagem backend é C#, embora eu tenha experiência com Visual Basic e Delphi.",
        stack2: "No frontend, trabalhei com React, Angular e Blazor, usando Tailwind CSS, Mudblazor e às vezes Bootstrap.",
    },
    socialLinks: {
        linkedin: "Linkedin",
        github: "Github",
        whatsapp: "Whatsapp",
    }
};

export const experiencePage = {
    title: 'Experiência Profissional',
    subtitle: 'Um resumo das empresas onde contribuí como desenvolvedor',
    experiences: [
        {
            company: 'Fiorilli Software',
            period: 'Maio 2024 - Presente',
            description: [
                'Visual Basic / Delphi / Angular / React',
                'Manutenção de aplicação legada em Visual Basic em versões antigas do .NET Framework.',
                'Construção e extensão de APIs REST em Delphi utilizando o framework Horse.',
                'Desenvolvimento de novas funcionalidades em uma aplicação Angular de grande escala com TypeScript.',
                'Design de layouts responsivos com Tailwind CSS, integrando componentes Fuse e DevExpress para melhor UI/UX.',
                'Refatoração de aplicação React para melhorar performance e manutenibilidade.',
            ],
        },
        {
            company: 'UPPER Softwares',
            period: 'Out 2023 - Mar 2024',
            description: [
                'C# / Blazor',
                'Design e manutenção de APIs C# com as últimas versões do .NET, utilizando Entity Framework Code First.',
                'Modelagem e implementação de bancos de dados em PostgreSQL.',
                'Construção de páginas web modernas com MudBlazor.',
                'Aplicação de princípios de Domain-Driven Design (DDD) no desenvolvimento backend.',
                'Estruturação de projetos em microsserviços utilizando Docker.',
            ],
        },
    ],
}