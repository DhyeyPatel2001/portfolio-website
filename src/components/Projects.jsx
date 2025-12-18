import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-text mb-12 text-center"
                >
                    <span className="text-accent">02.</span> Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-text hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Links removed as per user request */}
                                </div>
                                <p className="text-muted mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="px-6 pb-6">
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-accent">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
