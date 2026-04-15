"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Coins,
    Search,
    Smartphone,
    Code,
    UserCheck,
    X,
    CheckCircle2
} from "lucide-react";
import { itemVariants, containerVariants } from "@/lib/variants/variants";

const reasons = [
    {
        icon: <Zap className="w-6 h-6 text-yellow-400" />,
        title: "Ekspresowa realizacja",
        desc: "Landing page gotowy w 3–5 dni. Bez biurokracji. Projekt startuje natychmiast po akceptacji briefu.",
    },
    {
        icon: <Coins className="w-6 h-6 text-emerald-400" />,
        title: "Uczciwe ceny",
        desc: "Pracuję bezpośrednio z Tobą. Płacisz za realną pracę i doświadczenie, a nie za biuro agencji w centrum.",
    },
    {
        icon: <Search className="w-6 h-6 text-blue-400" />,
        title: "SEO od pierwszego dnia",
        desc: "Google Search Console, sitemap i meta tagi w standardzie. Twoi klienci znajdą Cię tam, gdzie Cię szukają.",
    },
    {
        icon: <Smartphone className="w-6 h-6 text-purple-400" />,
        title: "Mobile First",
        desc: "Ponad 70% ruchu to telefony. Twoja strona będzie wyglądać obłędnie na każdym urządzeniu.",
    },
    {
        icon: <Code className="w-6 h-6 text-orange-400" />,
        title: "Kod na własność",
        desc: "Dostęp do repozytorium GitHub. Żadnego lock-in na kreatory. Twoja strona, Twoja pełna wolność.",
    },
    {
        icon: <UserCheck className="w-6 h-6 text-pink-400" />,
        title: "Bezpośredni kontakt",
        desc: "Masz mój WhatsApp. Odpowiadam osobiście, bez pośredników i bez czekania na odpowiedź z ticketu.",
    },
];



export default function WhyMe() {
    return (
        <section id="dlaczego-ja" className="py-32 bg-[#030303] relative">
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-purple-400 font-bold text-[11px] tracking-[0.4em] uppercase mb-4"
                    >
                        Filozofia pracy
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none"
                    >
                        Szybciej. Taniej. <br />
                        <span className="text-zinc-500 font-light italic">Bez kompromisów.</span>
                    </motion.h2>
                </div>

                {/* Bento-ish Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {reasons.map((r) => (
                        <motion.div
                            key={r.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-zinc-900/30 border border-white/5 p-8 rounded-[2rem] hover:bg-zinc-900/50 transition-all group"
                        >
                            <div className="mb-6 p-3 bg-white/5 w-fit rounded-2xl group-hover:bg-purple-500/10 transition-colors">
                                {r.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{r.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">{r.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Comparison Card - The "WOW" Factor */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 md:p-12 shadow-2xl"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] -z-10" />

                    <div className="text-center mb-12 text-zinc-400 text-sm font-bold tracking-[0.2em] uppercase">
                        Szybki rachunek zysków
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 relative">

                        {/* Agency Column */}
                        <div className="space-y-6 opacity-40 grayscale">
                            <div className="text-center font-bold text-zinc-500 uppercase tracking-widest text-xs">Typowa Agencja</div>
                            <ul className="space-y-4">
                                {["6-12 tygodni czekania", "5 000 - 30 000 zł", "Support przez tickety", "Marże za biuro i PM-ów"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm">
                                        <X className="w-4 h-4 text-red-500" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* VS Divider */}
                        <div className="hidden md:flex flex-col items-center justify-center">
                            <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
                            <div className="my-4 font-black text-4xl text-zinc-800 italic tracking-tighter uppercase">VS</div>
                            <div className="h-20 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
                        </div>

                        {/* My Solution Column */}
                        <div className="p-8 rounded-3xl bg-purple-500/5 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] relative overflow-hidden">
                            <div className="absolute top-2 right-2 opacity-10">
                                <Zap className="w-16 h-16 text-purple-400" />
                            </div>
                            <div className="text-center font-bold text-purple-400 uppercase tracking-widest text-xs mb-6">RafBob.dev</div>
                            <ul className="space-y-4">
                                {["3-14 dni realizacji", "500 - 1 500 zł", "WhatsApp direct", "Zero ukrytych kosztów"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-sm text-white font-semibold">
                                        <CheckCircle2 className="w-4 h-4 text-purple-400" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}