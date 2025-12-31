import ScrollAnimation from "./ScrollAnimation";

function Projects() {
    // Placeholder projects data
    // const projects = [
    //     {
    //         id: 1,
    //         title: "Project Title 1",
    //         description: "A brief description of your project goes here. This showcases what the project does and its key features.",
    //         tags: ["React", "TypeScript", "Next.js"],
    //     },
    //     {
    //         id: 2,
    //         title: "Project Title 2",
    //         description: "Another project description. Highlight the technologies used and the problem it solves.",
    //         tags: ["Python", "Data Science", "Machine Learning"],
    //     },
    //     {
    //         id: 3,
    //         title: "Project Title 3",
    //         description: "Description of your third project. Keep it concise and impactful.",
    //         tags: ["JavaScript", "Node.js", "API"],
    //     },
    // ];

    return (
        <section id="projects" className="py-20 container mx-auto px-4">
            <ScrollAnimation direction="up">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="text-teal-400">Projects</span>
                    </h2>
                    <p className="text-gray-300 font-light max-w-2xl">
                        coming soon...
                    </p>
                </div>
            </ScrollAnimation>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="glass-panel p-6 hover:border-teal-400/50 transition-all duration-300 hover:translate-y-[-4px]"
                    >
                        <h3 className="text-xl font-semibold mb-3 text-white">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 font-light leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-teal-400/10 text-teal-400 border border-teal-400/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}
        </section>
    );
}

export default Projects;

