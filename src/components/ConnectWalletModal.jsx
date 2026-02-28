import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ConnectWalletModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Blur Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                            className="bg-[#0a192f] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-md pointer-events-auto relative overflow-hidden"
                        >
                            {/* Decorative top gradient */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-flinns-orange to-flinns-purple"></div>

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-bold text-white tracking-wide">Connect Wallet</h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Wallet Options */}
                            <div className="space-y-4">
                                {/* MetaMask */}
                                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-flinns-orange/50 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#F6851B]/20 rounded-full flex items-center justify-center text-[#F6851B]">
                                            🦊
                                        </div>
                                        <span className="text-white font-semibold group-hover:text-flinns-orange transition-colors">MetaMask</span>
                                    </div>
                                    <span className="text-xs bg-flinns-orange/20 text-flinns-orange px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Popular</span>
                                </button>

                                {/* Coinbase Wallet */}
                                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#0052FF]/50 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#0052FF]/20 rounded-full flex items-center justify-center text-[#0052FF]">
                                            🔵
                                        </div>
                                        <span className="text-white font-semibold group-hover:text-[#0052FF] transition-colors">Coinbase Wallet</span>
                                    </div>
                                </button>

                                {/* WalletConnect */}
                                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#3B99FC]/50 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-[#3B99FC]/20 rounded-full flex items-center justify-center text-[#3B99FC]">
                                            🔗
                                        </div>
                                        <span className="text-white font-semibold group-hover:text-[#3B99FC] transition-colors">WalletConnect</span>
                                    </div>
                                </button>
                            </div>

                            {/* Footer text */}
                            <p className="text-xs text-center text-gray-500 mt-8">
                                By connecting, you agree to the Flinns <br /> <a href="#" className="text-flinns-orange hover:underline">Terms of Service</a> & <a href="#" className="text-flinns-orange hover:underline">Privacy Policy</a>
                            </p>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ConnectWalletModal;
