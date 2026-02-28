import { motion, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Shield, Scroll, Trophy, Gift } from 'lucide-react';
import { useRef } from 'react';

const benefits = [
    {
        title: "Exclusive Club Access",
        desc: "Hold a Flinn to gain entry into our private, token-gated community channels and access tools.",
        icon: <Shield className="w-12 h-12 text-[#f48c25]" />,
        glowColor: "rgba(244, 140, 37, 0.5)"
    },
    {
        title: "Voting Rights",
        desc: "Shape the future of the Flinns ecosystem. Your vote directs the community DAO treasury.",
        icon: <Scroll className="w-12 h-12 text-[#64ffda]" />,
        glowColor: "rgba(100, 255, 218, 0.5)"
    },
    {
        title: "Premium Airdrops",
        desc: "Receive rare underwater artifacts and companion NFTs directly airdropped to your wallet.",
        icon: <Trophy className="w-12 h-12 text-[#facc15]" />,
        glowColor: "rgba(250, 204, 21, 0.5)"
    },
    {
        title: "Real-World Events",
        desc: "VIP access to our annual deep-sea diving expeditions and coastal yacht holder parties.",
        icon: <Gift className="w-12 h-12 text-[#c084fc]" />,
        glowColor: "rgba(192, 132, 252, 0.5)"
    }
];

const BenefitCard = ({ benefit, index }) => {
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
            className="w-full relative group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 50, damping: 12, delay: index * 0.1 }}
        >
            <div
                className="p-8 rounded-[2rem] glass-card border-white/5 shadow-2xl backdrop-blur-xl transition-all duration-500 overflow-hidden h-full flex flex-col justify-between bg-gradient-to-br from-white/[0.04] to-transparent hover:from-white/[0.08] hover:to-white/[0.02]"
                style={{
                    boxShadow: `0 20px 40px -10px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.05)`
                }}
            >
                {/* 3D Content Container */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col gap-6 items-start">

                    {/* Icon Container with glowing aura */}
                    <div className="relative">
                        <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: benefit.glowColor }}></div>
                        <div className="bg-[#050b14] border border-white/10 p-5 rounded-2xl relative z-10 shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
                            {benefit.icon}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                            {benefit.title}
                        </h3>
                        <p className="text-blue-100/70 leading-relaxed font-medium text-lg">
                            {benefit.desc}
                        </p>
                    </div>
                </div>

                {/* Subtle bottom border glow specific to the card type */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${benefit.glowColor}, transparent)` }}
                ></div>
            </div>
        </motion.div>
    );
};

const Benefits = () => {
    return (
        <section id="benefits" className="relative py-32 px-6 min-h-screen bg-[#020617] flex flex-col items-center justify-center overflow-hidden">

            <div className="z-10 text-center max-w-7xl mx-auto w-full">

                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-[2px] bg-[#64ffda] shadow-[0_0_8px_rgba(100,255,218,0.8)]"></div>
                        <h2 className="text-sm font-bold tracking-[0.4em] text-[#64ffda] uppercase drop-shadow-md">The Vault</h2>
                        <div className="w-12 h-[2px] bg-[#64ffda] shadow-[0_0_8px_rgba(100,255,218,0.8)]"></div>
                    </motion.div>

                    <motion.h3
                        className="text-5xl md:text-7xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-[#64ffda]/50 mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,1)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Member Benefits
                    </motion.h3>
                </div>

                {/* 3D Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} benefit={benefit} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Benefits;
