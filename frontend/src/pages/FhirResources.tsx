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
        <div className="space-y-10 max-w-6xl mx-auto">
            <header className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary text-[10px] md:text-sm font-bold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    Interoperability Standard: HL7 FHIR R4
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">FHIR Resources</h1>
                <p className="text-muted-foreground text-sm md:text-lg">
                    Manage and validate Ayush-specific healthcare terminology resources in standard FHIR format.
                </p>
            </header>

            {/* Resource Types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        className="bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:border-primary/40 transition-all cursor-pointer group relative overflow-hidden"
                    >
                        <div className="absolute -right-2 -bottom-2 opacity-5 scale-150 transition-transform group-hover:scale-[1.7] group-hover:rotate-12">
                            <item.icon className="w-24 h-24 text-primary" />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary transition-colors">
                                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                            </div>
                            <div className="text-xs px-3 py-1.5 bg-muted rounded-full font-bold">
                                {item.count} Active
                            </div>
                        </div>
                        <h3 className="text-xl font-bold italic tracking-tight mb-1">{item.type}</h3>
                        <p className="text-sm text-muted-foreground font-medium italic">Standard R4 Spec</p>
                    </motion.div>
                ))}
            </div>

            {/* Sample FHIR JSON */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
                <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 md:px-10 md:py-8 border-b border-border bg-muted/20 backdrop-blur-sm gap-4">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                            <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight italic">Live Resource Preview</h3>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-2xl hover:scale-105 active:scale-95 transition-all font-bold shadow-lg shadow-primary/20"
                    >
                        {copied ? (
                            <>
                                <Check className="w-5 h-5 bg-emerald-500 rounded-full p-0.5" />
                                Synchronized!
                            </>
                        ) : (
                            <>
                                <Copy className="w-5 h-5" />
                                Copy JSON Schema
                            </>
                        )}
                    </button>
                </div>
                <div className="p-4 md:p-10 bg-muted/10">
                    <pre className="overflow-x-auto text-xs md:text-base font-mono leading-relaxed p-4 md:p-8 bg-zinc-950 rounded-2xl md:rounded-3xl border border-white/5 shadow-inner">
                        <code className="text-emerald-400">
                            {JSON.stringify(sampleFhir, null, 4)}
                        </code>
                    </pre>
                </div>
            </motion.div>
        </div>
    );
};
