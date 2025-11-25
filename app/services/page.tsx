'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Smartphone, Monitor, Database, Cloud, Lock, Palette, ShoppingCart } from 'lucide-react';

const services = [
    {
        title: 'Custom Software Development',
        description: 'Tailored solutions built from the ground up to address your unique business challenges. We analyze your workflow, design custom features, and deliver software that fits like a glove.',
        icon: Code,
        color: 'from-blue-500 to-cyan-500',
        features: ['Requirements Analysis', 'Custom Architecture', 'Scalable Solutions', 'Ongoing Support'],
    },
    {
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications that captivate users and drive conversions. From landing pages to complex web platforms.',
        icon: Monitor,
        color: 'from-purple-500 to-pink-500',
        features: ['Responsive Design', 'SEO Optimization', 'CMS Integration', 'Performance Tuning'],
    },
    {
        title: 'Mobile App Development',
        description: 'Native iOS and Android apps, or cross-platform solutions using React Native and Flutter. Beautiful interfaces, smooth performance.',
        icon: Smartphone,
        color: 'from-orange-500 to-red-500',
        features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications'],
    },
    {
        title: 'Desktop Applications',
        description: 'Powerful desktop software for Windows, macOS, and Linux. Perfect for enterprise tools, productivity apps, and specialized workflows.',
        icon: Database,
        color: 'from-green-500 to-emerald-500',
        features: ['Multi-Platform', 'Offline Capability', 'High Performance', 'System Integration'],
    },
    {
        title: 'Cloud Solutions',
        description: 'Migrate to the cloud or build cloud-native applications. We work with AWS, Azure, and Google Cloud to deliver scalable infrastructure.',
        icon: Cloud,
        color: 'from-cyan-500 to-blue-500',
        features: ['Cloud Migration', 'DevOps Setup', 'Auto-Scaling', 'Cost Optimization'],
    },
    {
        title: 'Cybersecurity Services',
        description: 'Protect your digital assets with comprehensive security audits, penetration testing, and implementation of best security practices.',
        icon: Lock,
        color: 'from-red-500 to-rose-500',
        features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
    },
    {
        title: 'UI/UX Design',
        description: 'User-centered design that delights. We create intuitive interfaces backed by research, testing, and design thinking principles.',
        icon: Palette,
        color: 'from-pink-500 to-purple-500',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
        title: 'E-Commerce Solutions',
        description: 'Complete online stores with payment integration, inventory management, and marketing tools to grow your business.',
        icon: ShoppingCart,
        color: 'from-yellow-500 to-orange-500',
        features: ['Payment Gateway', 'Inventory System', 'Analytics', 'Marketing Tools'],
    },
];

export default function Services() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Comprehensive software solutions tailored to your business needs. From concept to deployment and beyond.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 overflow-hidden"
                            >
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${service.color}`} />

                                <div className="relative">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 text-white shadow-lg`}>
                                        <service.icon className="w-full h-full" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="space-y-2">
                                        {service.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how we can help transform your business with cutting-edge technology.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block bg-primary hover:bg-accent text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg shadow-primary/25"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
