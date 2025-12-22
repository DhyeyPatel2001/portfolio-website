import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-accent font-medium mb-2"
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-text mb-4"
                    >
                        Dhyey Patel
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-muted text-lg max-w-lg mb-8 mx-auto md:mx-0"
                    >
                        Data Scientist & ML Engineer specializing in NLP, Predictive Modeling, and AI Safety.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
                    >
                        <a
                            href="Dhyey Patel Resume.pdf"
                            download
                            className="px-8 py-3 border-2 border-accent text-accent rounded hover:bg-accent/10 transition-colors duration-300 flex items-center gap-2"
                        >
                            <FaFileDownload /> Resume
                        </a>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/dhyey-patel-98a863238/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="mailto:dhyeypatel1205@gmail.com" className="text-text hover:text-accent transition-colors">
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent/20 overflow-hidden relative"
                    >
                        <img
                            src={profileImg}
                            alt="Dhyey Patel"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
