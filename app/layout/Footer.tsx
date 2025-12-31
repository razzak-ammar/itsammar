import { BookText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Footer() {
    return (
        <footer className="relative z-10 border-t border-gray-800 bg-gray-950/80 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-12">
                <ScrollAnimation direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-3">
                                it&apos;s <span className="text-teal-400">Ammar</span>
                            </h3>
                            <p className="text-gray-400 text-sm font-light leading-relaxed">
                                Building tools and systems at the intersection of biology, data science, and engineering.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center">
                            {/* <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                Quick Links
                            </h4>
                            <nav className="flex flex-col gap-2">
                                <Link
                                    href="#"
                                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#projects"
                                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="#blog"
                                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="#"
                                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300"
                                >
                                    Research
                                </Link>
                            </nav> */}
                        </div>

                        {/* Connect Section */}
                        <div className="text-center md:text-right">
                            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
                                Connect
                            </h4>
                            <div className="flex justify-center md:justify-end gap-4 mb-4">
                                <Link
                                    href="https://github.com/itsammar-dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/ammar-razzak/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </Link>
                                <Link
                                    href="https://medium.com/@itsammar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                                    aria-label="Medium"
                                >
                                    <BookText size={20} />
                                </Link>
                            </div>
                            <a
                                href="mailto:contact@example.com"
                                className="text-gray-400 text-sm hover:text-teal-400 transition-colors duration-300 inline-flex items-center gap-2"
                            >
                                <Mail size={16} />
                                Get in touch
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Bottom Bar */}
                <ScrollAnimation direction="up" delay={200}>
                    <div className="pt-6 border-t border-gray-800/50">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} Ammar. All rights reserved.
                            </p>
                            <div className="flex gap-6 text-xs text-gray-500">
                                <Link href="#" className="hover:text-teal-400 transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="#" className="hover:text-teal-400 transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </footer>
    );
}
