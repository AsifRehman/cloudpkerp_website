'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, Globe } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 backdrop-blur-sm">
                        Innovating the Future of Software
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        Build Your Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                            Legacy With Us
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
                        We craft world-class digital experiences. From custom software to mobile apps,
                        we bring your vision to life with precision and passion.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group bg-primary hover:bg-accent text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 rounded-full text-lg font-bold text-white border border-white/10 hover:bg-white/5 transition-all backdrop-blur-sm">
                            View Portfolio
                        </button>
                    </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[10%] hidden lg:block text-gray-600/50"
                >
                    <Monitor size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-[10%] hidden lg:block text-gray-600/50"
                >
                    <Smartphone size={48} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 right-[20%] hidden lg:block text-gray-600/50"
                >
                    <Globe size={48} />
                </motion.div>
            </div>
        </div>
    );
}
