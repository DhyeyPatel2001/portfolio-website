import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-text mb-8"
                >
                    <span className="text-accent">04.</span> Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-muted text-lg max-w-2xl mx-auto mb-12"
                >
                    I am currently looking for full-time opportunities as a Data Scientist or Machine Learning Engineer.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-12"
                >
                    <div className="flex items-center space-x-3 text-muted">
                        <FaEnvelope className="text-accent" size={20} />
                        <a href="mailto:dhyeypatel1205@gmail.com" className="hover:text-accent transition-colors">
                            dhyeypatel1205@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-3 text-muted">
                        <FaMapMarkerAlt className="text-accent" size={20} />
                        <span>Austin, TX</span>
                    </div>
                </motion.div>

                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    href="mailto:dhyeypatel1205@gmail.com"
                    className="inline-block px-8 py-4 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 font-medium"
                >
                    Say Hello
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;
