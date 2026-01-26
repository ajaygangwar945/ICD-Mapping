import { motion } from "framer-motion";
import { Code, Languages, ArrowRightLeft, Copy, Download, Sparkles } from "lucide-react";

export const Translation = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <header className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight">Code Translation</h1>
                <p className="text-muted-foreground text-lg italic">Seamlessly translate medical terms across ICD-11, SNOMED CT, and NAMASTE</p>
            </header>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card border border-border rounded-3xl p-10 relative overflow-hidden shadow-sm"
            >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Languages className="w-64 h-64 text-primary" />
                </div>

                <div className="flex items-center gap-5 mb-10 relative">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <Code className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold italic">Step 3: Neural Translation</h2>
                        <p className="text-muted-foreground italic">Powered by Ayush Intelligence</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-7 gap-4 mb-8 items-center relative">
                    <div className="md:col-span-3">
                        <input
                            type="text"
                            placeholder="e.g., AY001 or TM2.AY134"
                            className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg italic"
                            aria-label="Code to translate"
                        />
                    </div>
                    <div className="flex justify-center md:col-span-1">
                        <ArrowRightLeft className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="md:col-span-3">
                        <select
                            className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg appearance-none cursor-pointer"
                            title="Select Target Terminology"
                            aria-label="Target terminology"
                        >
                            <option>NAMASTE</option>
                            <option>ICD-11</option>
                            <option>SNOMED CT</option>
                            <option>LOINC</option>
                        </select>
                    </div>
                </div>

                <button className="w-full md:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg">
                    <Sparkles className="w-6 h-6" />
                    Run Translation Engine
                </button>
            </motion.div>

            <div className="bg-card border border-border rounded-3xl p-10 overflow-hidden relative shadow-sm">
                <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-xl">
                            <Code className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">Active Translation</h3>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2.5 text-sm font-bold bg-muted hover:bg-muted/80 rounded-xl transition-all flex items-center gap-2">
                            <Copy className="w-4 h-4" />
                            Copy
                        </button>
                        <button className="px-5 py-2.5 text-sm font-bold bg-muted hover:bg-muted/80 rounded-xl transition-all flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Export
                        </button>
                    </div>
                </div>
                <div className="text-center py-20 text-muted-foreground/40 italic">
                    <div className="mb-6 relative inline-block">
                        <Code className="w-20 h-20 mx-auto opacity-20" />
                        <ArrowRightLeft className="w-10 h-10 absolute -bottom-2 -right-2 text-primary opacity-50 animate-bounce" />
                    </div>
                    <p className="text-xl">Engine idle. Awaiting input parameters...</p>
                </div>
            </div>
        </div>
    );
};
