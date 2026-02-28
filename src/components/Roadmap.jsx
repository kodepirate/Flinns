import { motion, useScroll, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
    { percent: 20, title: "The Journey Begins", desc: "First 20% minted! We're stocking the treasury and starting community grants.", align: "right" },
    { percent: 40, title: "Utility Unlocked", desc: "Exclusive holder-only Discord channels open with alpha and early access.", align: "left" },
    { percent: 60, title: "Merch Drop", desc: "High-quality physical merch store opens. Holders get exclusive deep-sea gear.", align: "right" },
    { percent: 80, title: "The Deep Dive", desc: "Airdrops of rare aquatic companions begin for early supporters.", align: "left" },
    { percent: 100, title: "Ocean Ecosystem", desc: "Full roadmap realization. 3D avatars, Metaverse integration, and the DAO treasury activated.", align: "right" },
];

const MilestoneCard = ({ item }) => {
    const cardRef = useRef(null);
    const rectRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -15deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 15deg)`;

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        rectRef.current = cardRef.current.getBoundingClientRect();
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
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`w-full md:w-5/12 mt-12 md:mt-0 relative group z-20 cursor-pointer ${item.align === 'left' ? 'md:text-right md:ml-auto md:mr-16' : 'md:text-left md:ml-16'}`}
            initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50, rotateY: item.align === 'left' ? -10 : 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 50, damping: 12, delay: 0.2 }}
        >
            <div className={`p-8 rounded-2xl glass-card border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors duration-500 overflow-hidden text-left relative
                ${item.align === 'left' ? 'border-r-[#f48c25]/50 group-hover:border-r-white' : 'border-l-[#f48c25]/50 group-hover:border-l-white'}
                bg-gradient-to-br from-white/[0.03] to-white/[0.01] group-hover:from-white/[0.08] group-hover:to-white/[0.02]
            `}>
                {/* Milestone Connecting Dash */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r ${item.align === 'left' ? 'from-transparent to-[#f48c25]/50 -right-16' : 'from-[#f48c25]/50 to-transparent -left-16'} z-0`}></div>

                {/* Content translated in 3D */}
                <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
                    <div className="flex items-center gap-4 mb-3 justify-start">
                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#f48c25] to-[#f48c25]/50 drop-shadow-lg">{item.percent}%</span>
                        <h3 className="text-2xl font-bold text-white tracking-wide">{item.title}</h3>
                    </div>
                    <p className="text-blue-100/70 leading-relaxed font-medium">{item.desc}</p>
                </div>

                {/* Ambient glow behind text */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f48c25]/0 via-transparent to-[#f48c25]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"></div>
            </div>
        </motion.div>
    );
};

const Roadmap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="roadmap" className="relative py-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617]">

            <div className="z-10 text-center max-w-6xl mx-auto w-full">

                {/* Header */}
                <div className="mb-24">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-[2px] bg-[#f48c25] shadow-[0_0_8px_rgba(244,140,37,0.8)]"></div>
                        <h2 className="text-sm font-bold tracking-[0.4em] text-[#f48c25] uppercase drop-shadow-md">The Journey</h2>
                        <div className="w-12 h-[2px] bg-[#f48c25] shadow-[0_0_8px_rgba(244,140,37,0.8)]"></div>
                    </motion.div>

                    <motion.h3
                        className="text-5xl md:text-7xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,1)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Roadmap
                    </motion.h3>
                </div>

                <div className="relative mx-auto" ref={containerRef}>

                    {/* Background faint line */}
                    <div className="absolute left-1/2 top-0 bottom-10 -ml-[2px] w-1 bg-white/5 rounded-full h-full z-0 hidden md:block"></div>

                    {/* Scroll-Linked Fill Line */}
                    <motion.div
                        className="absolute left-1/2 top-0 bottom-10 w-1 bg-gradient-to-b from-[#f48c25] via-[#64ffda] to-[#8a2be2] rounded-full z-0 hidden md:block origin-top shadow-[0_0_15px_rgba(244,140,37,0.8)]"
                        style={{ scaleY, translateX: "-50%" }}
                    ></motion.div>

                    <div className="flex flex-col gap-16 md:gap-32 relative z-10 w-full py-10">
                        {milestones.map((item, index) => (
                            <div
                                key={index}
                                className={`flex w-full items-center justify-between flex-col md:flex-row relative`}
                            >
                                {/* Left Spacer (or Card if flipped) */}
                                {item.align === 'left' && <MilestoneCard item={item} />}
                                {item.align === 'right' && <div className="hidden md:block w-5/12"></div>}

                                {/* Center Animated Waypoint Node */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center pointer-events-none">
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-[#020617] border-[3px] border-[#f48c25] shadow-[0_0_20px_rgba(244,140,37,0.9)] relative"
                                        initial={{ scale: 0, rotate: -90 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        {/* Spinning inner core */}
                                        <div className="absolute inset-1 rounded-full border border-[#64ffda] border-t-transparent animate-spin"></div>
                                        {/* Core light */}
                                        <div className="absolute inset-2 bg-[#f48c25] rounded-full shadow-[0_0_10px_#f48c25]"></div>
                                    </motion.div>
                                </div>

                                {/* Right Spacer (or Card if flipped) */}
                                {item.align === 'right' && <MilestoneCard item={item} />}
                                {item.align === 'left' && <div className="hidden md:block w-5/12"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
