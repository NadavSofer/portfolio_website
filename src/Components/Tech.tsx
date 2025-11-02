const Tech = () => {
    const techStack = {
        frontend: [
            "React",
            "React Native",
            "JS Vanilla",
            "HTML",
            "CSS",
            "Tailwind",
            "Ant Design",
            "Material UI",
            "Dev Tools",
            "Prettier",
            "Sass",
            "Redux",
            "Zustand",
            "Vite",
            "Axios",
        ],
        backend: [
            "Node.js",
            "JS",
            "Typescript",
            "Django",
            "Python",
            "npm",
            "bash",
            "firebase",
            "Next.js",
            ".net",
            "Express",
            "Postman",
            "Firebase cloud functions",
        ],
        database: ["MongoDB", "MySQL", "PostgresSQL", "Neon.tech"],
        workMethodologies: ["Jira", "Monday", "Trello"],
        more: [
            "Git",
            "Github",
            "expo",
            "zoom",
            "http protocols",
            "miro",
            "monday",
            "figma",
            "Inkscape",
            "Apple Developer",
            "Android Developer",
            "Vercel",
            "Netlify",
        ],
    };

    return (
        <div>
            <div>
                {Object.entries(techStack).map(([category, technologies]) => (
                    <div key={category} style={{ marginBottom: "20px" }}>
                        <h2>{category}</h2>
                        <ul>
                            {technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tech;
