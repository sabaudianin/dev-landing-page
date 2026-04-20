"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle, MessageSquare, ChevronDown } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        service: "landing",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Coś poszło nie tak.");
            }

            setStatus("success");
            setFormData({ name: "", phone: "", service: "landing", message: "" });
        } catch (error: unknown) {
            setStatus("error");
            if (error instanceof Error) setErrorMessage(error.message);
        }
    };

    return (
        <section id="kontakt" className="relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-2 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <MessageSquare className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 font-bold text-xs tracking-[0.4em] uppercase">Rozpocznij projekt</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
                    >
                        Porozmawiajmy o <span className="text-zinc-500">Twojej wizji</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-foreground border border-white/50 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    <AnimatePresence mode="wait">
                        {status === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center py-16"
                            >
                                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Wiadomość wysłana!</h3>
                                <p className="text-zinc-400 max-w-sm">
                                    Dziękuję za kontakt. Odezwię się do Ciebie najszybciej jak to możliwe.
                                </p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-8 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Wyślij kolejną wiadomość
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="name" className="text-sm font-medium text-zinc-400">
                                            Imię / Firma
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            required
                                            minLength={2}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jan Kowalski"
                                            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-600"
                                        />
                                    </div>


                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-zinc-400">
                                            Numer telefonu
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            minLength={9}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+48 123 456 789"
                                            className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder:text-zinc-600"
                                        />
                                    </div>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label htmlFor="service" className="text-sm font-medium text-zinc-400">
                                        Czego potrzebujesz?
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="landing" className="bg-black">Landing Page</option>
                                            <option value="business" className="bg-black">Wizytówka Firmowa</option>
                                            <option value="pro" className="bg-black">Strona Pro</option>
                                            <option value="other" className="bg-black">Inne / Wycena Indywidualna</option>
                                        </select>

                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />


                                    </div>
                                </div>


                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-zinc-400">
                                        Krótki opis projektu (opcjonalnie)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        minLength={5}
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Opisz krótko swój biznes i cel strony..."
                                        className="bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none placeholder:text-zinc-600"
                                    />
                                </div>

                                {status === "error" && (
                                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl text-sm">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <p>{errorMessage}</p>
                                    </motion.div>
                                )}


                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="mt-4 bg-purple-500 hover:bg-purple-600 text-white h-14 rounded-xl font-bold flex items-center justify-center transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Wysyłanie...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" /> Wyślij wiadomość
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}