"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://wa.me/48793386445?text=Hej%20Rafał%2C%20chciałbym%20zlecić%20stronę%20internetową.";

const NAV_LINKS = [
    { name: "Usługi", href: "#usługi" },
    { name: "O mnie", href: "#dlaczego-ja" },
    { name: "Cennik", href: "#cennik" },
    { name: "FAQ", href: "#faq" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-3 bg-[#030303]/70 backdrop-blur-xl border-b border-white/5"
                : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-1 font-bold text-xl text-white tracking-tighter">
                    <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        RafBob
                    </span>
                    <span className="text-white group-hover:text-purple-400 transition-colors">.dev</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Section */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        variant="ghost"
                        className="hidden sm:flex text-zinc-400 hover:text-white hover:bg-white/5 rounded-full"
                    >
                        <a href="tel:+48793386445">+48 793 386 445</a>
                    </Button>

                    <Button
                        asChild
                        className="hidden md:flex bg-white text-black hover:bg-zinc-200 rounded-full font-bold px-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4" /> Kontakt
                        </a>
                    </Button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030303] border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-zinc-400 hover:text-purple-400 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4">
                                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                                    Napisz na WhatsApp
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}