import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

    return (
        <section
            id="about"
            ref={ref}
            className="relative py-32 px-6 min-h-screen flex items-center justify-center overflow-hidden bg-[#0a192f]"
        >
            {/* Seamless Gradient Background from Hero */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent 0%, #0a192f 20%, #112240 100%)' }}></div>

            {/* Deep-Sea Animated Glowing Orbs (Replaces simple bubbles) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 0 }}
                        animate={{
                            y: "-10vh",
                            opacity: [0, 0.4, 0],
                            scale: [1, 1.5, 0.8]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        className="absolute bottom-0 rounded-full bg-flinns-accent/10 blur-[8px]"
                        style={{
                            width: Math.random() * 80 + 20 + "px",
                            height: Math.random() * 80 + 20 + "px",
                            boxShadow: '0 0 40px rgba(100, 255, 218, 0.2)'
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-16 z-10 relative">

                {/* Content Block */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-1 rounded bg-gradient-to-r from-flinns-orange to-yellow-400 shadow-[0_0_10px_rgba(244,140,37,0.5)]"></div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                            About Flinns
                        </h2>
                    </div>

                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-flinns-accent to-blue-400 mb-8 font-serif italic drop-shadow-lg">
                        Welcome to this exclusive club
                    </h3>

                    <div className="space-y-6 text-xl leading-relaxed text-blue-100/90 font-medium">
                        <p className="drop-shadow-sm">
                            Dive into the depths of the ocean where the most elusive and vibrant creatures dwell.
                            The <span className="text-white font-bold inline-block border-b-2 border-flinns-orange pb-0.5">Flinns</span> are a collection of unique aquatic beings, each with their own distinct traits and personalities.
                        </p>
                        <p className="drop-shadow-sm">
                            Owning a Flinn grants you unparalleled access to the deepest trenches of our community,
                            exclusive events, and a treasury of underwater wealth. Bridging the gap between the surface luxury and deep-sea utility.
                        </p>
                    </div>
                </motion.div>

                {/* 3D Glassmorphic Visuals Block */}
                <div className="w-full md:w-1/2 flex justify-center relative perspective-[1000px] h-[500px] items-center">

                    {/* Primary Glass Orb containing a 3D Glowing Crystal */}
                    <motion.div
                        style={{ y: y1, rotateZ: rotate1, transformStyle: 'preserve-3d' }}
                        className="w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] border-t border-t-white/30 border-l border-l-white/20 border-b border-b-black/50 border-r border-r-black/50 bg-white/[0.03] backdrop-blur-xl shadow-[0_25px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative z-20 group"
                    >
                        {/* Internal Edge Glow */}
                        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-flinns-orange/10 via-transparent to-flinns-accent/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Custom CSS 3D Crystal */}
                        <div className="relative w-32 h-40 animate-[spin_10s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-flinns-orange to-yellow-400 blur-2xl opacity-60 mix-blend-screen -z-10"></div>
                            {/* Crystal Faces */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-flinns-orange/40 [clip-path:polygon(50%_0%,100%_25%,50%_100%,0%_25%)] [transform:translateZ(20px)] backdrop-blur-sm border border-white/40"></div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-white/90 to-yellow-500/50 [clip-path:polygon(50%_0%,100%_25%,50%_100%,0%_25%)] [transform:rotateY(90deg)_translateZ(20px)] backdrop-blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-tl from-white/60 to-flinns-orange/30 [clip-path:polygon(50%_0%,100%_25%,50%_100%,0%_25%)] [transform:rotateY(180deg)_translateZ(20px)] backdrop-blur-sm"></div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/70 to-yellow-400/40 [clip-path:polygon(50%_0%,100%_25%,50%_100%,0%_25%)] [transform:rotateY(-90deg)_translateZ(20px)] backdrop-blur-sm"></div>
                        </div>
                    </motion.div>

                    {/* Secondary Glass Orb containing a Bioluminescent Pearl */}
                    <motion.div
                        style={{ y: y2, rotateZ: rotate2, transformStyle: 'preserve-3d' }}
                        className="absolute top-10 -right-4 md:-right-12 w-48 h-48 rounded-full border-t border-t-white/30 border-l border-l-white/20 border-b border-b-black/60 bg-[#0a192f]/40 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex items-center justify-center z-10 hover:bg-[#112240]/60 transition-colors duration-500"
                    >
                        {/* Custom CSS Bioluminescent Pearl */}
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-[#112240] via-flinns-accent to-white shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.6),0_0_30px_rgba(100,255,218,0.6)] animate-pulse">
                            <div className="absolute inset-0 rounded-full border border-white/20"></div>
                            <div className="absolute top-2 left-3 w-6 h-4 rounded-[50%] bg-white/60 blur-[2px] -rotate-45"></div>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default About;
