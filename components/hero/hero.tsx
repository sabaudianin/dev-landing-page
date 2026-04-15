"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Phone, ArrowDown, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Variants } from "framer-motion";

const WA_LINK = "https://wa.me/48793386445?text=Hej%20Rafał%2C%20chciałbym%20zlecić%20stronę%20internetową.";
const TYPED_WORDS = ["firmowa", "sprzedażowa", "wizytówka", "landing page"];

export default function Hero() {
    const typedRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;
        let timeout: NodeJS.Timeout;

        const type = () => {
            const word = TYPED_WORDS[wordIndex];
            const el = typedRef.current;
            if (!el) return;

            if (deleting) {
                el.textContent = word.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    deleting = false;
                    wordIndex = (wordIndex + 1) % TYPED_WORDS.length;
                    timeout = setTimeout(type, 500);
                    return;
                }
            } else {
                el.textContent = word.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === word.length) {
                    deleting = true;
                    timeout = setTimeout(type, 2000);
                    return;
                }
            }
            timeout = setTimeout(type, deleting ? 50 : 100);
        };

        timeout = setTimeout(type, 800);
        return () => clearTimeout(timeout);
    }, []);

    // Warianty animacji dla Framer Motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-[#030303] selection:bg-purple-500/30"
        >
            {/* Background Artifacts z delikatnym pływaniem */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b227a_0%,transparent_50%)] opacity-40" />
                <div
                    className="absolute inset-0 opacity-[0.1] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
                />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative z-10 max-w-6xl mx-auto px-6 pt-20 w-full"
            >
                {/* Availability Badge */}
                <motion.div variants={itemVariants}>
                    <Badge variant="outline" className="mb-8 py-1.5 px-4 bg-white/5 border-white/10 backdrop-blur-md text-zinc-400 font-medium tracking-wide">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Dostępny na nowe projekty
                    </Badge>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={itemVariants} className="text-left mb-8 tracking-tighter">
                    <span className="block text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
                        Twoja strona
                    </span>
                    <span className="block text-4xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent leading-[1.1]">
                        <span ref={typedRef}></span>
                        <span className="ml-1 inline-block w-[3px] h-[0.8em] bg-purple-500 animate-pulse" />
                    </span>
                    <span className="block text-4xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
                        gotowa w 5 dni.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-10"
                >
                    Tworzę nowoczesne strony, które <span className="text-white font-semibold">zarabiają</span>.
                    Zoptymalizowane pod SEO, błyskawiczne i dopracowane pod kątem UX.
                    Zmień odwiedzających w klientów.
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-black hover:bg-zinc-200 h-14 px-8 text-base font-bold rounded-xl transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-5 w-5" /> Napisz na WhatsApp
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-colors"
                            asChild
                        >
                            <a href="tel:+48793386445">
                                <Phone className="mr-2 h-4 w-4" /> +48 793 386 445
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Stats / Social Proof */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-10 border-t border-white/10 max-w-3xl"
                >
                    {[
                        { title: "od 800 zł", desc: "za Landing Page", icon: <Sparkles className="w-4 h-4 text-purple-400" /> },
                        { title: "3–5 dni", desc: "Czas realizacji", icon: <CheckCircle2 className="w-4 h-4 text-purple-400" /> },
                        { title: "Lifetime", desc: "Wsparcie techniczne", icon: <CheckCircle2 className="w-4 h-4 text-purple-400" /> },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-1"
                        >
                            <div className="flex items-center gap-2">
                                {stat.icon}
                                <span className="text-xl font-bold text-white tracking-tight leading-none">{stat.title}</span>
                            </div>
                            <p className="text-sm text-zinc-500 font-medium">{stat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Scroll</span>
                <ArrowDown className="w-4 h-4 text-zinc-500" />
            </motion.div>
        </section>
    );
}