import ScrollAnimation from "./ScrollAnimation";
import ComingSoonGraphic from "./ComingSoonGraphic";

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
        <section id="projects" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-24 md:py-32">
            <ScrollAnimation direction="up">
                <div className="mb-12 md:flex md:items-end md:justify-between">
                    <div>
                      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#b99a5e]">02 / Projects</p>
                      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Selected work</h2>
                    </div>
                    <p className="mt-5 max-w-md text-gray-400 font-light md:mt-0">
                        Experiments, research tools, and technical builds are being documented now.
                    </p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={120}>
              <ComingSoonGraphic
                index="001—NOW"
                label="The project archive is taking shape."
                note="A considered collection of work, process, and lessons learned will live here soon."
              />
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
