import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

const RarityCard = ({ title, chance, color, description, delay }) => {
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
            className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer group"
        >
            {/* Hover Glow Background */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none ${color.bg}`} />

            <div style={{ transform: "translateZ(30px)" }}>
                <div className="flex justify-between items-start mb-4">
                    <h4 className={`text-2xl font-bold ${color.text} drop-shadow-md uppercase tracking-wide`}>{title}</h4>
                    <span className="text-xl font-black text-white bg-white/10 px-3 py-1 rounded-full border border-white/10 shadow-inner">{chance}</span>
                </div>
                <p className="text-blue-100/70 text-base leading-relaxed">{description}</p>
            </div>

            {/* Bottom Glow Line */}
            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl ${color.bgLine}`} />
        </motion.div>
    );
};

const Specs = () => {
    const rarities = [
        { title: "Common", chance: "50%", description: "The foundation of the Flinns society. Essential, vibrant, and full of life, forming the backbone of the reef.", color: { text: "text-flinns-accent", bg: "bg-flinns-accent", bgLine: "bg-flinns-accent" } },
        { title: "Rare", chance: "30%", description: "Distinct mutations and unique bioluminescence make these Flinns stand out in the dark abyssal zones.", color: { text: "text-blue-400", bg: "bg-blue-400", bgLine: "bg-blue-400" } },
        { title: "Epic", chance: "15%", description: "Elite hunters of the deep possessing ancient traits and mesmerizing patterns rarely seen by surface dwellers.", color: { text: "text-purple-400", bg: "bg-purple-400", bgLine: "bg-purple-400" } },
        { title: "Legendary", chance: "5%", description: "Mythical beings of the trench. Wielding cosmic energies and glowing with the intensity of a sunken star.", color: { text: "text-flinns-orange", bg: "bg-flinns-orange", bgLine: "bg-gradient-to-r from-flinns-orange to-yellow-400" } }
    ];

    return (
        <section id="specs" className="relative py-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050b14]">

            {/* Background Gradient connecting to About section */}
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, #112240 0%, #0a192f 40%, #050b14 100%)' }}></div>

            <div className="max-w-7xl mx-auto w-full z-10 relative">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-8 h-[2px] bg-flinns-accent shadow-[0_0_8px_rgba(100,255,218,0.8)]"></div>
                        <h2 className="text-sm font-bold tracking-[0.3em] text-flinns-accent uppercase drop-shadow-md">Trait Rarity</h2>
                        <div className="w-8 h-[2px] bg-flinns-accent shadow-[0_0_8px_rgba(100,255,218,0.8)]"></div>
                    </motion.div>

                    <motion.h3
                        className="text-4xl md:text-6xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6 drop-shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        The Flinns Specs
                    </motion.h3>
                    <motion.p
                        className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Over 150 unique traits generated algorithmically. Only the luckiest will mint the legendary anomalies.
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Rarities (2 in a column) */}
                    <div className="lg:col-span-4 space-y-6">
                        <RarityCard {...rarities[0]} delay={0.2} />
                        <RarityCard {...rarities[1]} delay={0.3} />
                    </div>

                    {/* Center Column: The CSS 3D Artifact Object */}
                    <div className="lg:col-span-4 flex justify-center perspective-[1200px] h-[400px] items-center my-8 lg:my-0">
                        <motion.div
                            className="relative w-64 h-64 flex items-center justify-center cursor-pointer group"
                            animate={{ rotateY: 360, rotateX: [0, 10, -10, 0] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Core glowing sphere */}
                            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-flinns-orange/30 to-purple-600/30 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

                            {/* Glass Shell */}
                            <div className="absolute w-32 h-32 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl shadow-[inset_0_0_40px_rgba(244,140,37,0.4),0_0_60px_rgba(138,43,226,0.3)] flex items-center justify-center transform-style-3d group-hover:border-white/40 transition-colors duration-500">
                                <div className="text-white/70 text-5xl mb-2 font-serif italic drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" style={{ transform: "translateZ(20px)" }}>?</div>
                            </div>

                            {/* Orbital Rings */}
                            <div className="absolute w-[240px] h-[240px] border border-flinns-accent/30 rounded-full [transform:rotateX(70deg)_rotateY(20deg)] shadow-[0_0_15px_rgba(100,255,218,0.2)]"></div>
                            <div className="absolute w-[280px] h-[280px] border border-flinns-orange/30 rounded-full [transform:rotateX(60deg)_rotateY(-30deg)] shadow-[0_0_15px_rgba(244,140,37,0.2)]"></div>
                            <div className="absolute w-[320px] h-[320px] border-dashed border-2 border-purple-500/20 rounded-full [transform:rotateX(75deg)]"></div>
                        </motion.div>
                    </div>

                    {/* Right Column: Rarities (2 in a column) */}
                    <div className="lg:col-span-4 space-y-6">
                        <RarityCard {...rarities[2]} delay={0.4} />
                        <RarityCard {...rarities[3]} delay={0.5} />
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Specs;
