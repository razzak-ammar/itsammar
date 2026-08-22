import ScrollAnimation from "./ScrollAnimation";
import ComingSoonGraphic from "./ComingSoonGraphic";

function BlogPosts() {
    // Placeholder blog posts data
    // const blogPosts = [
    //     {
    //         id: 1,
    //         title: "Blog Post Title 1",
    //         excerpt: "A preview excerpt of your blog post. This gives readers a taste of what the full article contains.",
    //         date: "January 2024",
    //         readTime: "5 min read",
    //     },
    //     {
    //         id: 2,
    //         title: "Blog Post Title 2",
    //         excerpt: "Another blog post preview. Share insights about your research, thoughts, or experiences.",
    //         date: "December 2023",
    //         readTime: "8 min read",
    //     },
    //     {
    //         id: 3,
    //         title: "Blog Post Title 3",
    //         excerpt: "Your third blog post excerpt. Keep it engaging and informative to draw readers in.",
    //         date: "November 2023",
    //         readTime: "6 min read",
    //     },
    // ];

    return (
        <section id="blog" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-24 md:py-32">
            <ScrollAnimation direction="up">
                <div className="mb-12 md:flex md:items-end md:justify-between">
                    <div>
                      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal-300">03 / Notes</p>
                      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Writing & ideas</h2>
                    </div>
                    <p className="mt-5 max-w-md text-gray-400 font-light md:mt-0">
                        Thoughts, research findings, and insights on quantitative biomedical research, data science, and engineering.
                    </p>
                </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={150}>
                <ComingSoonGraphic
                  index="002—NEXT"
                  label="Notes are on the way."
                  note="Short essays on research, systems, and the questions I keep returning to."
                />
            </ScrollAnimation>

            {/* <div className="space-y-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="glass-panel p-6 hover:border-teal-400/50 transition-all duration-300 hover:translate-x-2 cursor-pointer"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                            <h3 className="text-2xl font-semibold text-white mb-2 md:mb-0">
                                {post.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                        <p className="text-gray-300 font-light leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>
                ))}
            </div> */}
        </section>
    );
}

export default BlogPosts;
