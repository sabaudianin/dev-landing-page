"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://wa.me/48793386445?text=Hej%20Rafał%2C%20chciałbym%20zlecić%20stronę%20internetową.";

export default function CTA() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-[#030303]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative group rounded-[3rem] p-px overflow-hidden bg-gradient-to-b from-white/20 to-transparent"
                >
                    {/* Inner Content */}
                    <div className="relative z-10 bg-[#080808] rounded-[3rem] p-12 md:p-20 text-center">

                        {/* Background Glows */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 blur-[100px] pointer-events-none group-hover:bg-purple-600/30 transition-colors duration-700" />
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/10 blur-[100px] pointer-events-none group-hover:bg-indigo-600/20 transition-colors duration-700" />

                        <div className="relative z-20">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center justify-center gap-2 mb-8"
                            >
                                <div className="h-px w-8 bg-purple-500/50" />
                                <Sparkles className="w-5 h-5 text-purple-400" />
                                <span className="text-purple-400 font-bold text-xs uppercase tracking-[0.4em]">Zacznijmy projekt</span>
                                <div className="h-px w-8 bg-purple-500/50" />
                            </motion.div>

                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">
                                Gotowy na stronę, <br />
                                <span className="text-zinc-500">która zarabia?</span>
                            </h2>

                            <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed font-medium">
                                Napisz teraz. Wycenę i wstępny plan działania otrzymasz w ciągu kilku godzin. <span className="text-white font-bold italic">Bez żadnych zobowiązań.</span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-white text-black hover:bg-zinc-200 h-16 px-10 text-lg font-bold rounded-2xl shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                                    >
                                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-5 w-5 fill-black" /> Napisz na WhatsApp
                                        </a>
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-16 px-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 text-lg font-medium backdrop-blur-sm"
                                        asChild
                                    >
                                        <a href="mailto:rafbobbob@gmail.com">
                                            <Mail className="mr-2 h-5 w-5" /> Napisz e-mail
                                        </a>
                                    </Button>
                                </motion.div>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-widest text-zinc-600">
                                <div className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-purple-500" /> Bezpłatna konsultacja
                                </div>
                                <div className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-purple-500" /> Start w 24h
                                </div>
                                <div className="flex items-center gap-2">
                                    <ArrowRight className="w-3 h-3 text-purple-500" /> Gwarancja jakości
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}