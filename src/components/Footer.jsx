import { motion } from 'framer-motion';

const Footer = () => {
    // Dropping in randomized bubbles to make the ocean floor feel alive
    const bubbles = Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        size: Math.random() * 8 + 3,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5
    }));

    return (
        <footer className="relative pt-24 pb-12 px-6 bg-[#020617] overflow-hidden">

            {/* Animated Rising Bubbles */}
            {bubbles.map(bubble => (
                <motion.div
                    key={bubble.id}
                    className="absolute bottom-0 rounded-full border border-white/20 bg-white/5 pointer-events-none"
                    style={{
                        width: bubble.size,
                        height: bubble.size,
                        left: bubble.left,
                    }}
                    animate={{
                        y: ["10vh", "-100vh"],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0, 0.4, 0]
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        delay: bubble.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Glowing Ocean Floor Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-0"></div>
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-3/4 h-[100px] bg-[#64ffda] opacity-[0.03] blur-[100px] rounded-[100%] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Logo & Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <motion.div
                        className="relative group cursor-pointer mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        {/* Glow Behind Logo */}
                        <div className="absolute inset-0 bg-[#f48c25] opacity-0 group-hover:opacity-40 blur-[20px] rounded-full transition-opacity duration-500"></div>

                        {/* 3D SVG Logo from Navbar */}
                        <svg className="w-16 h-16 relative z-10 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(244,140,37,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(244,140,37,0.8)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#f48c25" />
                                    <stop offset="50%" stopColor="#ffb067" />
                                    <stop offset="100%" stopColor="#64ffda" />
                                </linearGradient>
                            </defs>
                            <path d="M12 2L2 19H22L12 2Z" fill="url(#footerLogoGradient)" />
                            <path d="M12 2L12 19L22 19L12 2Z" fill="black" fillOpacity="0.2" />
                        </svg>
                    </motion.div>

                    <h4 className="text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-2">
                        FLINNS
                    </h4>
                    <p className="text-blue-100/50 text-sm font-medium">
                        © {new Date().getFullYear()} Flinns NFT Club.<br /> All rights reserved in the deep blue.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-bold tracking-widest uppercase text-white/50">
                    <a href="#" className="hover:text-[#f48c25] transition-colors relative group">
                        Terms
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#f48c25] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="hover:text-[#64ffda] transition-colors relative group">
                        Smart Contract
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="#" className="hover:text-[#c084fc] transition-colors relative group">
                        Privacy
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#c084fc] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>

                {/* Socials */}
                <div className="flex gap-6">
                    {/* Twitter / X */}
                    <a href="#" className="relative group">
                        <div className="absolute inset-0 bg-white/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <motion.div
                            className="w-14 h-14 rounded-full glass-card border border-white/10 flex items-center justify-center text-white/60 group-hover:text-black group-hover:bg-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-10 relative"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Twitter</span>
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </motion.div>
                    </a>

                    {/* Discord */}
                    <a href="#" className="relative group">
                        <div className="absolute inset-0 bg-[#5865F2]/40 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <motion.div
                            className="w-14 h-14 rounded-full glass-card border border-[#5865F2]/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#5865F2] group-hover:border-[#5865F2] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-10 relative"
                            whileHover={{ y: -5, scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="sr-only">Discord</span>
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
                        </motion.div>
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
