"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Jak szybko mogę mieć gotową stronę?",
        a: "Landing page: 3-5 dni roboczych od akceptacji briefu. Wizytówka firmowa: 5-7 dni. Strona z CMS: 7-14 dni. Projekt startuje następnego dnia roboczego od wpłaty zaliczki (50%).",
    },
    {
        q: "Czy muszę umieć cokolwiek technicznego?",
        a: "Zero. Potrzebuję od Ciebie tylko: logo (lub preferencje kolorystyczne), treści (teksty, zdjęcia) lub zgodę na to, żebym napisał teksty za Ciebie przy pomocy copywritingu wspieranego AI (+300 zł). Resztą zajmuję się sam.",
    },
    {
        q: "Ile kosztuje utrzymanie strony po uruchomieniu?",
        a: "Hosting na Vercel jest darmowy dla większości małych stron. Domena to koszt ok. 50-100 zł rocznie. Jeśli wolisz, żebym to ja zarządzał infrastrukturą i aktualizacjami, oferuję pełne wsparcie w abonamencie 100 zł/mies.",
    },
    {
        q: "Czy strona będzie wyświetlać się wysoko w Google?",
        a: "Każda strona wychodzi z pełnym SEO on-page: zoptymalizowane meta tagi, nagłówki H1-H3, świetne wyniki Core Web Vitals, sitemap.xml oraz konfiguracja w Google Search Console. Budujesz na solidnych fundamentach.",
    },
    {
        q: "Co jeśli nie będę zadowolony ze strony?",
        a: "W cenie masz gwarantowaną rundę poprawek po prezentacji projektu. Pracuję tak długo, aż efekt będzie zgodny z naszymi ustaleniami – zależy mi na Twojej rekomendacji tak samo mocno, jak Tobie na stronie.",
    },
    {
        q: "Jakie są warunki płatności?",
        a: "Model 50/50: połowa zaliczki przed startem, pozostała część po akceptacji projektu, a przed finalnym przekazaniem kodów i wdrożeniem. Wystawiam fakturę VAT.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Subtelny blask tła */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <HelpCircle className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-bold text-[10px] tracking-[0.4em] uppercase">Baza wiedzy</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                    >
                        Najczęstsze <span className="text-zinc-500">pytania</span>
                    </motion.h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = open === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className={`group border rounded-2xl transition-all duration-300 ${isOpen
                                    ? "bg-zinc-900/50 border-purple-500/30"
                                    : "bg-zinc-900/20 border-white/5 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    className="w-full text-left px-6 py-6 flex items-center justify-between gap-4"
                                    onClick={() => setOpen(isOpen ? null : i)}
                                >
                                    <span className={`font-medium text-sm md:text-base transition-colors ${isOpen ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen ? "bg-purple-500 border-purple-400 rotate-180" : "bg-white/5 border-white/10"
                                        }`}>
                                        <ChevronDown className={`w-4 h-4 ${isOpen ? "text-white" : "text-purple-400"}`} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 pt-0">
                                                <div className="h-px bg-white/5 w-full mb-4" />
                                                <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}