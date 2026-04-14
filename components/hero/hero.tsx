import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-background"
        >

            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
                style={{
                    backgroundImage:
                        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="container mx-auto px-6 lg:px-8 py-32 relative z-10">
                <div className="max-w-4xl">
                    <Badge variant="outline" className="mb-6 text-sm font-normal">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        Available for new projects
                    </Badge>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
                        Rafał Bobko
                        <br />
                        <span className="text-muted-foreground font-normal">
                            Fullstack Developer
                        </span>
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                        I build fast, scalable web applications using{" "}
                        <strong className="text-foreground">React & Next.js</strong> on the
                        frontend and growing into{" "}
                        <strong className="text-foreground">C# / .NET</strong> on the
                        backend. Available for B2B projects and freelance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <Link href="#contact">
                                Lets work together <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <a
                                href="https://sabaudianin.github.io/CV/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </a>
                        </Button>
                    </div>


                    <div className="mt-16 flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <span>2+ years building</span>
                        <span className="text-border">·</span>
                        <span>CodersLab certified</span>
                        <span className="text-border">·</span>
                        <span>PostGrad .NET/C#</span>
                        <span className="text-border">·</span>
                        <span>Poland · Remote worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    );
}