import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    BarChart3,
    Upload,
    Search as SearchIcon,
    Globe,
    Shield,
    FileText,
    Zap,
    Sparkles,
    ArrowRight
} from "lucide-react";

const features = [
    {
        icon: Upload,
        title: "CSV Data Ingestion",
        description: "Upload and process NAMASTE medical coding data",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        link: "/ingestion"
    },
    {
        icon: SearchIcon,
        title: "AI-Powered Search",
        description: "Intelligent search with autocomplete suggestions",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        link: "/search"
    },
    {
        icon: Zap,
        title: "Code Translation",
        description: "Seamless translation between coding systems",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        link: "/search"
    },
    {
        icon: Shield,
        title: "ABHA Authentication",
        description: "Secure OAuth integration with ABHA",
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        link: "/settings"
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Real-time insights and reporting",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
        link: "/"
    },
    {
        icon: Globe,
        title: "Global Standards",
        description: "WHO ICD-11, SNOMED CT, LOINC integration",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        link: "/fhir"
    },
    {
        icon: FileText,
        title: "FHIR Compliance",
        description: "Full FHIR R4 compliant problem lists",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        link: "/fhir"
    },
    {
        icon: Sparkles,
        title: "Translation",
        description: "Translate between terminology systems",
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        link: "/search"
    }
];

export const Landing = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
                {/* Decorative SVGs */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <circle cx="10" cy="10" r="20" fill="currentColor" stroke="none" />
                        <circle cx="90" cy="90" r="30" fill="currentColor" stroke="none" />
                        <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center justify-center gap-6 mb-8 text-primary-foreground/80">
                            <Sparkles className="w-12 h-12" />
                            <Zap className="w-12 h-12" />
                            <Globe className="w-12 h-12" />
                            <Shield className="w-12 h-12" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                            Ayush Intelligence & FHIR
                        </h1>
                        <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                            Advanced Healthcare Interoperability Platform for seamless medical data exchange,
                            coding system translation, and FHIR compliance
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                            {["Core Features", "Coding Systems", "FHIR Compliant"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link
                            to="/dashboard"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-primary-foreground transition-all transform hover:scale-105 shadow-2xl mt-8"
                        >
                            Explore Platform
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </section>

            {/* Welcome Section */}
            <section className="py-24 bg-background relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="text-primary italic">Welcome to the Future</span>
                            <br />
                            <span className="text-foreground">of Healthcare Interoperability</span>
                        </h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                            Experience the next generation of medical data exchange with our comprehensive platform
                            that seamlessly connects different healthcare coding systems, ensuring interoperability and
                            compliance across the healthcare ecosystem.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {features.slice(0, 4).map((feature, idx) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    to={feature.link}
                                    className="block h-full p-8 bg-card border border-border rounded-3xl hover:border-primary/50 transition-all hover:-translate-y-2 group shadow-sm hover:shadow-xl"
                                >
                                    <div className={`w-12 h-12 md:w-14 md:h-14 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                                        <feature.icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.color}`} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">{feature.description}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Explore Features */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Features</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Navigate through our comprehensive healthcare interoperability platform using
                        the sidebar or the quick access cards below.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <Link
                                to={feature.link}
                                className="block p-8 bg-card rounded-3xl border border-border hover:border-primary hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground mb-6 italic">{feature.description}</p>
                                <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Get started
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Link
                        to="/dashboard"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-xl hover:shadow-primary/20"
                    >
                        <BarChart3 className="w-6 h-6" />
                        Go to Dashboard
                    </Link>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary opacity-[0.03]" />
                <div className="max-w-7xl mx-auto px-8 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="p-4 bg-primary/10 rounded-2xl">
                            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                        </div>
                        <h2 className="text-3xl font-bold">Ready to Transform Your Healthcare Data?</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Join the next generation of interoperable healthcare platforms today.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Zap className="w-4 h-4 text-primary" />
                                Instant Deployment
                            </span>
                            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                <Shield className="w-4 h-4 text-primary" />
                                Enterprise Security
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="py-10 md:py-12 border-t border-border bg-card">
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex items-center gap-3">
                        <img src="/favicon.svg" alt="Ayush Intelligence Logo" className="w-10 h-10 rounded-xl" />
                        <span className="font-bold text-xl">Ayush Intelligence</span>
                    </div>
                    <div className="text-muted-foreground text-sm italic">
                        © 2026 Ayush Intelligence Platform
                    </div>
                    <div className="flex gap-6">
                        <Link to="/settings" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
                        <Link to="/settings" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};
