const steps = [
    {
        num: "01",
        title: "Brief na WhatsApp",
        desc: "Piszesz do mnie co potrzebujesz. Odpowiadam z pytaniami, wycenę dostajesz w ciągu kilku godzin.",
        time: "Dzień 0",
    },
    {
        num: "02",
        title: "Projekt i akceptacja",
        desc: "Pokazuję Ci mockup strony. Jeden round poprawek w cenie. Akceptujesz i startujemy z kodem.",
        time: "Dzień 1-2",
    },
    {
        num: "03",
        title: "Budowa i SEO",
        desc: "Piszę kod, optymalizuję pod Google, testuję na wszystkich urządzeniach.",
        time: "Dzień 2-4",
    },
    {
        num: "04",
        title: "Wdrożenie i przekazanie",
        desc: "Deploy na Vercel lub Twój hosting. Konfiguruję Google Search Console, przekazuję pełne dostępy.",
        time: "Dzień 5",
    },
];

export default function Process() {
    return (
        <section className="py-28 max-w-6xl mx-auto px-6">
            <div className="mb-14">
                <p className="font-dm text-[11px] tracking-[4px] uppercase text-[#a78bfa] mb-4">Jak pracuję</p>
                <h2 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-white tracking-tight leading-tight">
                    Od pomysłu do strony<br />w 5 kroków.
                </h2>
            </div>

            <div className="relative">
                <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/30 to-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div key={step.num} className="relative">
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#130f1e] border border-[#a78bfa]/30 flex items-center justify-center mb-6">
                                <span className="font-display font-bold text-[#a78bfa] text-lg">{step.num}</span>
                            </div>
                            <p className="font-dm text-xs text-[#a78bfa] mb-2">{step.time}</p>
                            <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                            <p className="font-dm text-[#666] text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}