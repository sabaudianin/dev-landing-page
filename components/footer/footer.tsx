"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../githubIcon/githubIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-50 bg-[#030303] border-t border-white/5 pt-20 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">

                    <div className="max-w-xs">
                        <Link href="/" className="group flex items-center gap-1 font-bold text-xl text-white tracking-tighter mb-4">
                            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                                RafBob
                            </span>
                            <span>.dev</span>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Tworzę wysokiej jakości strony sprzedażowe i systemy CMS dla ambitnych biznesów. Szybka realizacja, nowoczesny stos technologiczny.
                        </p>
                    </div>


                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24">
                        <div className="flex flex-col gap-4">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Nawigacja</span>
                            <nav className="flex flex-col gap-3">
                                {["Usługi", "Cennik", "FAQ"].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-zinc-500 hover:text-purple-400 text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Linki</span>
                            <nav className="flex flex-col gap-3">
                                <a
                                    href="https://portfoliodev-hazel.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center gap-1"
                                >
                                    Portfolio <ExternalLink className="w-3 h-3" />
                                </a>
                                <a
                                    href="https://github.com/sabaudianin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 hover:text-white text-sm transition-colors flex items-center gap-1"
                                >
                                    GitHub <GithubIcon className="w-3 h-3" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>


                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">


                    <p className="text-zinc-600 text-[11px] font-medium tracking-wide">
                        © {currentYear} <span className="text-zinc-400">Rafał Bobko</span>. Wszystkie prawa zastrzeżone.
                    </p>

                    <div className="flex items-center gap-4 text-zinc-600 text-[11px]">
                        Built with <span className="text-white">Next.js</span> & <span className="text-white">Framer Motion</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}