import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = ({ onConnectClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Specs', href: '#specs' },
        { name: 'Mentorship', href: '#mentorship' },
        { name: 'Roadmap', href: '#roadmap' },
    ];

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu if open
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Giving the fixed navbar some breathing room
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'py-4 bg-[#0a192f]/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#112240] to-[#0a192f] flex items-center justify-center shadow-xl border border-white/10 group-hover:border-flinns-orange/50 transition-all overflow-hidden">
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-flinns-orange/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            {/* 3D SVG Logo */}
                            <svg className="w-7 h-7 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_4px_8px_rgba(244,140,37,0.5)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f48c25" />
                                        <stop offset="50%" stopColor="#ffb067" />
                                        <stop offset="100%" stopColor="#64ffda" />
                                    </linearGradient>
                                </defs>
                                <path d="M12 2L2 19H22L12 2Z" fill="url(#logoGradient)" />
                                {/* Overlay shape for 3D depth */}
                                <path d="M12 2L12 19L22 19L12 2Z" fill="black" fillOpacity="0.2" />
                            </svg>
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-md group-hover:to-white transition-colors">
                            FLINNS
                        </span>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="text-sm font-semibold text-white/80 hover:text-flinns-orange transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-flinns-orange transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onConnectClick}
                            className="hidden sm:flex btn-primary py-2.5 px-6 text-sm items-center gap-2 group border border-flinns-orange/50"
                        >
                            <span>Connect</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>

                        <button
                            className="lg:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-[#0a192f] flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-2xl font-black italic tracking-tighter text-white">FLINNS</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white/70 hover:text-white p-2 bg-white/5 rounded-full"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-2xl font-bold">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-white hover:text-flinns-orange transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-auto pb-8">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onConnectClick();
                                }}
                                className="w-full btn-primary py-4 text-lg flex justify-center border border-flinns-orange/50"
                            >
                                Connect Wallet
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
