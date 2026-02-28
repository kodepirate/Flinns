import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const HoverCard = ({ children, delay, arrow }) => {
    const ref = useRef(null);
    const rectRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -15deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 15deg)`;

    const handleMouseEnter = () => {
        if (!ref.current) return;
        rectRef.current = ref.current.getBoundingClientRect();
    };

    const handleMouseMove = (e) => {
        if (!rectRef.current) return;
        const rect = rectRef.current;
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        rectRef.current = null;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] cursor-pointer group z-10"
        >
            {/* Inner Glow */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-flinns-orange via-transparent to-purple-600`} />

            <div style={{ transform: "translateZ(30px)" }}>
                {children}
            </div>

            {/* Connecting Arrows hidden strictly on mobile */}
            {arrow === 'right' && (
                <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 text-flinns-orange/70 drop-shadow-[0_0_10px_rgba(244,140,37,0.5)] z-0" style={{ transform: "translateZ(-10px)" }}>
                    <motion.svg
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                    </motion.svg>
                </div>
            )}
            {arrow === 'left' && (
                <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 text-flinns-orange/70 drop-shadow-[0_0_10px_rgba(244,140,37,0.5)] z-0" style={{ transform: "translateZ(-10px)" }}>
                    <motion.svg
                        animate={{ x: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>
                    </motion.svg>
                </div>
            )}
        </motion.div>
    );
};

const Mentorship = () => {
    return (
        <section id="mentorship" className="relative py-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">

            {/* Seamless Trench Floor Background Gradient - Blending from Specs Section */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050b14] to-[#020617]"></div>

            <div className="z-10 text-center max-w-7xl mx-auto w-full relative">

                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-[2px] bg-purple-500 shadow-[0_0_8px_rgba(138,43,226,0.8)]"></div>
                        <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 uppercase drop-shadow-md">Baby Flinns</h2>
                        <div className="w-12 h-[2px] bg-purple-500 shadow-[0_0_8px_rgba(138,43,226,0.8)]"></div>
                    </motion.div>

                    <motion.h3
                        className="text-4xl md:text-6xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-purple-200 mb-6 drop-shadow-[0_0_20px_rgba(138,43,226,0.3)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Mentorship
                    </motion.h3>
                    <motion.p
                        className="text-lg md:text-xl text-blue-200/70 mb-8 mx-auto max-w-3xl leading-relaxed font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Any Flinn holder is eligible to grow a new generation.
                        The Mentorship program introduces a new layer of utility and community building to the deepest ocean trench.
                    </motion.p>
                </div>

                {/* 3D Interaction Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center relative">

                    {/* Left Card */}
                    <HoverCard delay={0.3} arrow="right">
                        <div className="w-12 h-12 rounded-full bg-flinns-orange/20 border border-flinns-orange/40 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(244,140,37,0.3)]">
                            <span className="text-flinns-orange font-bold text-xl">1</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Secure & Nurture</h4>
                        <p className="text-blue-100/80 leading-relaxed">
                            Once you secure a Flinn, you become a mentor. Nurture your Baby Flinn through exclusive challenges and community events to unlock its true bioluminescent potential.
                        </p>
                    </HoverCard>

                    {/* Center 3D Biosphere / Incubator */}
                    <div className="flex justify-center relative perspective-[1200px] h-[350px] items-center my-10 lg:my-0">
                        <motion.div
                            className="relative w-64 h-64 flex items-center justify-center cursor-pointer group"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Deep sea ambient glow behind incubator */}
                            <div className="absolute inset-0 bg-flinns-accent/20 blur-[60px] rounded-full mix-blend-screen scale-150"></div>

                            {/* Outer Glass Incubator Body */}
                            <div className="absolute w-[220px] h-[280px] rounded-[5rem] border border-white/20 bg-black/30 backdrop-blur-md shadow-[inset_0_0_30px_rgba(100,255,218,0.2),0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-end overflow-hidden pb-4 [transform:rotateX(10deg)] group-hover:border-flinns-accent/50 transition-colors duration-500">

                                {/* Water/Liquid effect inside incubator */}
                                <motion.div
                                    className="absolute bottom-0 w-[400px] h-[400px] bg-gradient-to-t from-flinns-accent/40 via-blue-500/20 to-transparent rounded-[45%_55%_40%_60%] opacity-50"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    style={{ transformOrigin: 'center 40%' }}
                                />

                                {/* Floating Bio-Egg */}
                                <motion.div
                                    className="relative z-20 w-32 h-40 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-gradient-to-tr from-purple-800 via-[#112240] to-flinns-orange/80 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.8),0_0_40px_rgba(244,140,37,0.4)] border border-white/10 flex items-center justify-center mb-8"
                                    animate={{
                                        y: [0, -10, 0],
                                        boxShadow: ['inset 0 -10px 20px rgba(0,0,0,0.8), 0 0 40px rgba(244,140,37,0.4)', 'inset 0 -10px 20px rgba(0,0,0,0.8), 0 0 60px rgba(100,255,218,0.6)', 'inset 0 -10px 20px rgba(0,0,0,0.8), 0 0 40px rgba(244,140,37,0.4)']
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Egg core pulse */}
                                    <div className="absolute w-12 h-16 rounded-[inherit] bg-white/30 blur-md animate-pulse"></div>
                                    <div className="absolute top-4 right-6 w-4 h-8 rounded-full bg-white/20 blur-[2px] rotate-45"></div>
                                </motion.div>

                                {/* Base pedestal inside incubator */}
                                <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center">
                                    <div className="w-3/4 h-2 rounded-t-full bg-flinns-accent/50 shadow-[0_0_10px_rgba(100,255,218,0.8)]"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Card */}
                    <HoverCard delay={0.5} arrow="left">
                        <div className="w-12 h-12 rounded-full bg-flinns-accent/20 border border-flinns-accent/40 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(100,255,218,0.3)]">
                            <span className="text-flinns-accent font-bold text-xl">2</span>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-4">Evolve & Reign</h4>
                        <p className="text-blue-100/80 leading-relaxed">
                            Mentored Flinns evolve into powerful trench companions. They grant access to secondary tiers of benefits, exclusive airdrops, and commanding roles in the DAO.
                        </p>
                    </HoverCard>

                </div>
            </div>
        </section>
    );
};

export default Mentorship;
