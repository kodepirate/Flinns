import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const Hero = ({ onConnectClick }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rectRef = useRef(null);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseEnter = (e) => {
        rectRef.current = e.currentTarget.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
        if (!rectRef.current) return;
        const rect = rectRef.current;

        // Normalize coordinates from -0.5 to 0.5 to easily map them to rotation angles
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        rectRef.current = null;
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            className="relative min-h-screen pt-24 px-6 flex flex-col items-center justify-center overflow-hidden [perspective:1000px] bg-[#0a192f]"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ backgroundImage: 'linear-gradient(180deg, #112240 0%, #0a192f 100%)' }}
        >
            {/* Animated Ambient Background Glows */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-flinns-orange/20 blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-flinns-accent/10 blur-[150px] pointer-events-none"
            />

            {/* Floating 3D Orbs background elements */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{
                        duration: 15 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.5
                    }}
                    className={`absolute rounded-full pointer-events-none ${i === 0 ? 'w-32 h-32 top-[15%] left-[10%] bg-gradient-to-tr from-flinns-orange/20 to-transparent blur-md border border-white/5' :
                        i === 1 ? 'w-48 h-48 bottom-[20%] right-[15%] bg-gradient-to-bl from-flinns-accent/20 to-transparent blur-lg border border-white/5' :
                            i === 2 ? 'w-20 h-20 top-[40%] right-[25%] bg-gradient-to-t from-flinns-purple/20 to-transparent blur-sm border border-white/10' :
                                i === 3 ? 'w-24 h-24 bottom-[30%] left-[20%] bg-gradient-to-br from-white/10 to-transparent blur-md' :
                                    'w-16 h-16 top-[60%] left-[40%] bg-gradient-to-r from-flinns-orange/10 to-transparent blur-sm'
                        }`}
                    style={{
                        boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05)',
                        transformStyle: 'preserve-3d',
                        translateZ: `${(i + 1) * -50}px`
                    }}
                />
            ))}

            {/* 3D Interactive Card Container */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative z-10 w-full max-w-4xl rounded-[2rem] p-6 md:px-12 md:py-10 border-t border-t-white/20 border-l border-l-white/10 border-b border-b-black/40 border-r border-r-black/40 bg-white/[0.03] backdrop-blur-md shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.2)] flex flex-col items-center overflow-hidden"
            >
                {/* Subtle internal shine/noise effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>

                {/* 3D SVG Logo Large */}
                <motion.div
                    initial={{ y: -50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    style={{ translateZ: "100px" }} // Pushes element out in 3D space
                    className="mb-8 relative"
                >
                    <div className="absolute inset-0 bg-flinns-orange/30 blur-xl rounded-full scale-150"></div>
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-[1.5rem] bg-gradient-to-br from-[#112240] to-[#0a192f] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 relative z-10">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_10px_15px_rgba(244,140,37,0.6)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="heroLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#f48c25" />
                                    <stop offset="50%" stopColor="#ffb067" />
                                    <stop offset="100%" stopColor="#64ffda" />
                                </linearGradient>
                            </defs>
                            <path d="M12 2L2 19H22L12 2Z" fill="url(#heroLogoGradient)" />
                            <path d="M12 2L12 19L22 19L12 2Z" fill="black" fillOpacity="0.2" />
                        </svg>
                    </div>
                </motion.div>

                {/* Typography with 3D Pop */}
                <motion.div
                    style={{ translateZ: "60px" }}
                    className="text-center relative z-10"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight tracking-tighter drop-shadow-xl">
                        Welcome to the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-flinns-orange via-yellow-400 to-flinns-accent filter drop-shadow-[0_0_15px_rgba(244,140,37,0.3)] inline-block">
                            Flinns club
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-200/80 mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md px-4">
                        A tropical getaway bridging the gap between luxury architecture and deep sea exploration in Web3.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                        <motion.button
                            whileHover={{ scale: 1.05, translateZ: "20px" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-flinns-orange to-yellow-500 text-[#0a192f] font-bold text-base md:text-lg py-3 px-8 rounded-full shadow-[0_0_20px_rgba(244,140,37,0.3)] hover:shadow-[0_0_30px_rgba(244,140,37,0.6)] transition-shadow w-full sm:w-auto"
                        >
                            Buy on OpenSea
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, translateZ: "20px" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onConnectClick}
                            className="bg-white/5 border border-white/20 text-white font-bold text-base md:text-lg py-3 px-8 rounded-full hover:bg-white/15 hover:border-white/50 transition-all backdrop-blur-md shadow-[0_4px_10px_rgba(0,0,0,0.3)] w-full sm:w-auto"
                        >
                            Connect Wallet
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Fade out gradient */}
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0a192f] to-transparent pointer-events-none z-20"></div>
        </section>
    );
};

export default Hero;
