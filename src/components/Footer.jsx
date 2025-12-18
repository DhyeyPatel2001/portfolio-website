import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://www.linkedin.com/in/dhyey-patel-98a863238/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:dhyeypatel1205@gmail.com" className="text-muted hover:text-accent transition-colors">
                        <FaEnvelope size={24} />
                    </a>
                </div>
                <p className="text-muted text-sm">
                    &copy; {new Date().getFullYear()} Dhyey Patel. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
