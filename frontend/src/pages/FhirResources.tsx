import { motion } from "framer-motion";
import { FileText, Code2, Copy, Check, Terminal, ExternalLink, ShieldCheck } from "lucide-react";
import { useState } from "react";

export const FhirResources = () => {
    const [copied, setCopied] = useState(false);

    const sampleFhir = {
        resourceType: "CodeSystem",
        id: "namaste-ayush",
        url: "http://terminology.hl7.org/CodeSystem/namaste-ayush",
        version: "1.0.0",
        name: "NAMASTEAyush",
        title: "NAMASTE Ayush Terminology",
        status: "active",
        concept: [
            {
                code: "NAM:123",
                display: "Jwara (Fever)",
                definition: "Traditional Ayurvedic term for fever"
            }
        ]
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(JSON.stringify(sampleFhir, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 md:space-y-10 max-w-6xl mx-auto px-2">
            <header className="flex flex-col gap-1 md:gap-2 px-2">
                <div className="flex items-center gap-2 text-primary text-[9px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Interoperability Standard: HL7 FHIR R4
                </div>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight">FHIR Resources</h1>
                <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">
                    Manage and validate Ayush-specific healthcare terminology resources in standard FHIR format.
                </p>
            </header>

            {/* Resource Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                    { type: "CodeSystem", count: 12, icon: Terminal },
                    { type: "ConceptMap", count: 45, icon: ExternalLink },
                    { type: "ValueSet", count: 89, icon: FileText },
                    { type: "Condition", count: 230, icon: ShieldCheck }
                ].map((item, idx) => (
                    <motion.div
                        key={item.type}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-2xl hover:border-primary/40 transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className="absolute -right-2 -bottom-2 opacity-[0.03] scale-150 transition-transform group-hover:scale-[1.7] group-hover:rotate-12">
                            <item.icon className="w-16 h-16 md:w-24 md:h-24 text-primary" />
                        </div>

                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary transition-colors">
                                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div className="text-[10px] md:text-xs px-2 md:px-3 py-1 md:py-1.5 bg-muted rounded-full font-bold">
                                {item.count} Active
                            </div>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold italic tracking-tight mb-0.5">{item.type}</h3>
                        <p className="text-[11px] md:text-sm text-muted-foreground font-medium italic">Standard R4 Spec</p>
                    </motion.div>
                ))}
            </div>

            {/* Sample FHIR JSON */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-between px-5 py-5 md:px-10 md:py-8 border-b border-border bg-muted/20 backdrop-blur-sm gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                            <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight italic">Resource Preview</h3>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="w-full md:w-auto flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-xl md:rounded-2xl hover:scale-105 active:scale-95 transition-all font-bold shadow-lg shadow-primary/20 text-sm md:text-base justify-center"
                    >
                        {copied ? (
                            <>
                                <Check className="w-4 h-4 md:w-5 md:h-5 bg-emerald-500 rounded-full p-0.5 shrink-0" />
                                Synchronized!
                            </>
                        ) : (
                            <>
                                <Copy className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                                Copy JSON
                            </>
                        )}
                    </button>
                </div>
                <div className="p-3 md:p-10 bg-muted/10">
                    <pre className="overflow-x-auto text-[9px] sm:text-xs md:text-base font-mono leading-relaxed p-4 md:p-8 bg-zinc-950 rounded-xl md:rounded-3xl border border-white/5 shadow-inner">
                        <code className="text-emerald-400">
                            {JSON.stringify(sampleFhir, null, 4)}
                        </code>
                    </pre>
                </div>
            </motion.div>
        </div>
    );
};
