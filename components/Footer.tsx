import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="h-8 w-8 text-primary" />
                            <span className="font-bold text-xl tracking-tight text-white">CloudPK ERP</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-4">
                            Empowering businesses with cutting-edge software solutions since 2000.
                            From textile manufacturing to digital transformation.
                        </p>
                        <div className="text-gray-400 text-sm space-y-1">
                            <p>📧 asif.prox@gmail.com</p>
                            <p>📞 0333-9933886</p>
                            <p>📍 Office 43, Palestine Plaza, Faisalabad</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {['Custom Development', 'Web Development', 'Mobile Apps', 'Cloud Solutions'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} CloudPK ERP. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {[Github, Twitter, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
