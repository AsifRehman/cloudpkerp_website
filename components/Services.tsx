'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Monitor, Database, Cloud, Lock } from 'lucide-react';

const services = [
    {
        title: 'Custom Development',
        description: 'Tailored software solutions designed to meet your specific business needs and challenges.',
        icon: Code,
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Web Development',
        description: 'Stunning, responsive websites and web applications built with modern technologies.',
        icon: Monitor,
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
        icon: Smartphone,
        color: 'from-orange-500 to-red-500',
    },
    {
        title: 'Desktop Development',
        description: 'Powerful desktop applications for Windows, macOS, and Linux environments.',
        icon: Database,
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services for modern businesses.',
        icon: Cloud,
        color: 'from-cyan-500 to-blue-500',
    },
    {
        title: 'Cybersecurity',
        description: 'Robust security measures to protect your digital assets and data.',
        icon: Lock,
        color: 'from-red-500 to-rose-500',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        We deliver comprehensive software solutions across all platforms.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden"
                        >
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${service.color}`} />

                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 text-white shadow-lg`}>
                                <service.icon className="w-full h-full" />
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
