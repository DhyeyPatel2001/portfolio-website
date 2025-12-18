import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-text mb-12 text-center"
                >
                    <span className="text-accent">01.</span> Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                        <motion.div
                            key={category}
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-accent mb-4 capitalize">
                                {category.replace('_', ' / ')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={item}
                                        className="bg-primary/50 text-text px-3 py-1 rounded-full text-sm border border-accent/20"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
