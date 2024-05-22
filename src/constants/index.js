import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Oasis Infobyte",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "August 2022 - November 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Edunet",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "June 2023 - August 2023",
        points: [
            "(Hyper Text Markup Language) is the most basic building block of the web",
            "CSS is the coding language used to turn that boring HTML into the beautiful websites that you know and love, but it does so in a very important way without cluttering up your HTML!",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "JavaScript is the only programming language that is used on the front end of websites",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Byte Royalty",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "February 2024 - April 2024",
        points: [
            "Combining frontend and backend skills to create end-to-end web solutions.",
            "Managing project architecture and database design for seamless integration.",
            "Optimizing performance and scalability of web applications.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/arunkumar204',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/arunkumar-s-25b335235/',
    }
];

export const projects = [
    {
        iconUrl: linkedin,
        theme: 'btn-back-blue',
        name: 'Linkedin Clone',
        description: 'A web application built using Tailwind CSS, a utility-first CSS framework. Tailwind CSS simplifies the styling process by providing pre-designed classes that can be easily applied to elements.',
        link: 'https://arunkumarlinkedin2-o-l8l4.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: '3D Portfolio',
        description: 'They create still and moving images and visual effects using computers. These images could be anything from characters to environments to special effects. 3D animations can be created for things like film, TV, or video games.',
        link: 'https://3d-update.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: '3D Game',
        description: '3D gaming refers to interactive computer entertainment games with characteristics of three-dimensional graphics: height, width, and depth. 3D gaming is believed to create immersive experience in a virtual worlds with realistic representations.',
        link: 'https://master--lighthearted-beijinho-6ee493.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Chat',
        description: 'Developed a Gemini clone using React.js that interacts with the Gemini cryptocurrency exchange API. This project showcases my ability to integrate third-party APIs into a modern frontend framework to build a dynamic, data-driven application.',
        link: 'https://arun-chat.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Yoom Website',
        description: 'Developed a Zoom clone application using Next.js. The primary goal was to build a real-time video conferencing application that emulates the core functionalities of Zoom, leveraging modern web technologies. This project showcases my skills in Next.js, WebRTC, and real-time data synchronization with Socket.io.',
        link: 'https://arun-zoom.vercel.app/',
    }
];
