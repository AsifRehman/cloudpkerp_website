'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Zap, Calendar, TrendingUp } from 'lucide-react';

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CloudPK ERP</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        From textile manufacturing to cutting-edge software solutions – a journey of innovation spanning over two decades.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed">
                                <p>
                                    CloudPK ERP began its journey in <span className="text-primary font-semibold">2000</span> as a textile manufacturing company in Faisalabad, Pakistan's industrial heartland. For years, we specialized in producing high-quality textiles, serving both domestic and international markets.
                                </p>
                                <p>
                                    As we grew, we recognized the transformative power of technology in modern business. The challenges we faced in managing our own manufacturing operations inspired us to develop custom software solutions. What started as internal tools soon evolved into a full-fledged software development division.
                                </p>
                                <p>
                                    Today, we leverage our deep understanding of business operations, gained through decades in manufacturing, to create software that truly addresses real-world challenges. Our unique perspective allows us to build solutions that are not just technically sound, but also practically valuable.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Calendar className="w-10 h-10 text-primary mb-4" />
                                <div className="text-3xl font-bold mb-2">2000</div>
                                <div className="text-sm text-gray-400">Founded in Faisalabad</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                                <div className="text-3xl font-bold mb-2">25+</div>
                                <div className="text-sm text-gray-400">Years of Experience</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Users className="w-10 h-10 text-accent mb-4" />
                                <div className="text-3xl font-bold mb-2">200+</div>
                                <div className="text-sm text-gray-400">Happy Clients</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Award className="w-10 h-10 text-primary mb-4" />
                                <div className="text-3xl font-bold mb-2">500+</div>
                                <div className="text-sm text-gray-400">Projects Delivered</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-black/20 border border-white/10"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To empower organizations with robust, scalable, and intuitive software solutions that drive growth and efficiency. We believe in technology that works for people, not the other way around. Drawing from our manufacturing roots, we understand the importance of reliability, precision, and practical value.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-black/20 border border-white/10"
                        >
                            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-secondary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-400 leading-relaxed">
                                To be the global leader in digital transformation, setting new standards for quality, innovation, and user experience in the software industry. We envision a future where businesses of all sizes can harness the power of custom technology to achieve their goals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                        <p className="text-gray-400">Excellence is not just an act, but a habit forged over 25 years.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Industry Experience',
                                description: 'Over 25 years of business experience gives us unique insights into operational challenges.',
                                icon: Award,
                            },
                            {
                                title: 'Client-Centric Approach',
                                description: 'We listen, understand, and deliver solutions that truly address your needs.',
                                icon: Users,
                            },
                            {
                                title: 'Quality Assurance',
                                description: 'Manufacturing taught us precision. Every line of code meets our rigorous standards.',
                                icon: Target,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
                            >
                                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-20 bg-white/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Let's discuss how our experience and expertise can help you achieve your goals.
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
