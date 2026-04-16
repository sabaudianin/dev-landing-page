"use client";

import { motion } from "framer-motion";
import { Monitor, Home, Code2, Check, ArrowRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { containerVariants, cardVariants } from "@/lib/variants/variants";

const services = [
    {
        icon: <Monitor className="w-6 h-6" />,
        tag: "Najpopularniejsze",
        title: "Landing page",
        desc: "Strona sprzedażowa zaprojektowana pod konkretny cel - pozyskanie klienta lub sprzedaż produktu. Szybka i skuteczna.",
        price: "od 600 zł",
        time: "3-5 dni roboczych",
        features: ["1 strona ", "Formularz kontaktowy", "SEO on-page", "Mobile first", "Hosting setup"],
        gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
        icon: <Home className="w-6 h-6" />,
        tag: null,
        title: "Wizytówka firmowa",
        desc: "Kompleksowa strona dla firmy usługowej, gabinetu lub lokalnego biznesu. Pełne SEO lokalne i Google Maps.",
        price: "od 1 000 zł",
        time: "5-7 dni roboczych",
        features: ["Do 5 podstron", "SEO lokalne", "Google Analytics", "Google Maps", "Plus pakiet podstawowy"],
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: <Code2 className="w-6 h-6" />,
        tag: null,
        title: "Strona z CMS",
        desc: "Blog lub strona firmowa z panelem zarządzania treścią. Samodzielnie dodajesz posty i edytujesz ofertę.",
        price: "od 1 500 zł",
        time: "7-14 dni roboczych",
        features: ["Panel CMS", "Blog / aktualności", "Animacje", "Nieograniczone treści", "Plus oba pakiety"],
        gradient: "from-fuchsia-500/20 to-amber-300/30",
    },
];


export default function Services() {
    return (
        <section id="usługi" className="relative overflow-hidden">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <Zap className="w-4 h-4 text-purple-400 fill-purple-400" />
                        <span className="font-bold tracking-[0.3em] uppercase text-purple-400">
                            Oferta
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6"
                    >
                        Strony, które <span className="text-zinc-500">pracują</span> <br />
                        na Twój sukces.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg max-w-xl leading-relaxed"
                    >
                        Wybierz ofertę dopasowaną do Twoich potrzeb.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((s) => (
                        <motion.div
                            key={s.title}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >

                            <div className="relative h-full bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-colors group-hover:border-purple-500/30 overflow-hidden">


                                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                {s.tag && (
                                    <Badge className="absolute top-6 right-8 bg-purple-500 text-white border-none font-bold uppercase text-[10px] tracking-wider px-3">
                                        {s.tag}
                                    </Badge>
                                )}

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-400 mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {s.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-[60px]">{s.desc}</p>

                                    <ul className="space-y-4 mb-10">
                                        {s.features.map((f) => (
                                            <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                                    <Check className="w-3 h-3 text-emerald-500" />
                                                </div>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1 font-bold">Inwestycja</p>
                                            <p className="text-2xl font-bold text-white tracking-tight">{s.price}</p>
                                            <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                                                <Zap className="w-3 h-3" /> {s.time}
                                            </p>
                                        </div>

                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="rounded-full border-white/10 bg-white/5 hover:bg-purple-500 hover:text-white transition-all group-hover:translate-x-1"
                                            asChild
                                        >
                                            <a href={`https://wa.me/48793386445?text=Hej%20Rafał%2C%20pytam%20o%20${s.title}`}>
                                                <ArrowRight className="w-4 h-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}