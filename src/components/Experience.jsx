import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { education } from '../data/education';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-text mb-12 text-center"
                >
                    <span className="text-accent">03.</span> Experience & Education
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {/* Experience Section */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-text mb-6 border-b border-accent/20 pb-2">Work Experience</h3>
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-8 pl-4 border-l-2 border-accent"
                            >
                                <h4 className="text-xl font-bold text-text">{job.role}</h4>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-accent font-medium">{job.company}</span>
                                    <span className="text-muted text-sm">{job.period}</span>
                                </div>
                                <p className="text-muted text-sm mb-2 italic">{job.location}</p>
                                <ul className="list-disc list-inside text-muted space-y-1">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <div>
                        <h3 className="text-2xl font-bold text-text mb-6 border-b border-accent/20 pb-2">Education</h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-8 pl-4 border-l-2 border-accent"
                            >
                                <h4 className="text-xl font-bold text-text">{edu.school}</h4>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-accent font-medium">{edu.degree}</span>
                                    <span className="text-muted text-sm">{edu.period}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-muted text-sm italic">{edu.location}</span>
                                    <span className="text-muted text-sm">GPA: {edu.gpa}</span>
                                </div>
                                {edu.coursework && (
                                    <p className="text-muted text-sm">
                                        <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
