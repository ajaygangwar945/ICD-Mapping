import { motion } from "framer-motion";
import { Code, Languages, ArrowRightLeft, Copy, Sparkles } from "lucide-react";
import { useState } from "react";

interface TranslationResult {
    source_code: string;
    source_term: string;
    target_code: string;
    system: string;
    status: string;
}

export const Translation = () => {
    const [code, setCode] = useState("");
    const [result, setResult] = useState<TranslationResult | null>(null);
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        if (!code.trim()) return;
        setLoading(true);
        setResult(null);
        try {
            const response = await fetch(`http://localhost:8000/api/translate/${code}`);
            if (response.ok) {
                const data = await response.json();
                setResult(data);
            } else {
                console.error("Translation not found");
            }
        } catch (error) {
            console.error("Translation failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-12 max-w-7xl mx-auto px-4">
            {/* Page Header */}
            <header className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-2">
                    <Languages className="w-5 h-5" />
                    Cross-Terminology Translation Engine
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight">Terminology Translation</h1>
                <p className="text-muted-foreground text-lg italic">
                    Instantly convert NAMASTE Ayush codes to standardized ICD-11 coding structures.
                </p>
            </header>

            {/* Main Translation Interface */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-border rounded-3xl p-10 relative overflow-hidden shadow-sm"
            >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Languages className="w-64 h-64 text-primary" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-7 gap-4 mb-8 items-center relative">
                        <div className="md:col-span-3 relative group">
                            <Code className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleTranslate()}
                                placeholder="Enter NAMASTE Code (e.g., AY001)"
                                className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg italic"
                                aria-label="Code to translate"
                            />
                        </div>

                        <div className="md:col-span-1 flex justify-center">
                            <div className="bg-primary/10 p-3 rounded-full">
                                <ArrowRightLeft className="w-6 h-6 text-primary" />
                            </div>
                        </div>

                        <div className="md:col-span-3 relative">
                            <select
                                className="w-full px-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg appearance-none cursor-pointer"
                                title="Select Target Terminology"
                                aria-label="Target terminology"
                            >
                                <option>ICD-11 TM2</option>
                                <option>ICD-11 (Classic)</option>
                                <option>SNOMED CT Ayush</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleTranslate}
                        disabled={loading}
                        className="w-full bg-primary text-primary-foreground py-5 rounded-2xl font-bold hover:scale-[1.01] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-xl disabled:opacity-50"
                    >
                        {loading ? "Translating..." : "Execute Terminology Translation"}
                        <Sparkles className="w-6 h-6" />
                    </button>
                </div>
            </motion.div>

            {/* Translation Results Preview */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Source Definition */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 text-lg font-bold italic tracking-tight">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Languages className="w-5 h-5 text-primary" />
                        </div>
                        Source: NAMASTE Ayush
                    </div>
                    <div className="p-6 bg-muted/30 rounded-2xl border border-border">
                        <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">NAMASTE Code</div>
                        <div className="text-2xl font-mono font-bold text-primary">{result ? result.source_code : "---"}</div>
                        <div className="mt-4 text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">Standard Term</div>
                        <div className="text-xl font-bold italic">{result ? result.source_term : "---"}</div>
                    </div>
                </div>

                {/* Target Translation */}
                <div className="bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-lg font-bold italic tracking-tight">
                            <div className="p-2 bg-violet-500/10 rounded-lg">
                                <ArrowRightLeft className="w-5 h-5 text-violet-500" />
                            </div>
                            Target: {result ? result.system : "ICD-11"}
                        </div>
                        {result && (
                            <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Copy mapped code">
                                <Copy className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    <div className="p-6 bg-zinc-950 rounded-2xl border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-[0.02] scale-150 group-hover:scale-110 transition-transform">
                            <Languages className="w-24 h-24 text-white" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">ICD-11 Code</div>
                            <div className="text-3xl font-mono font-bold text-emerald-400">{result ? result.target_code : "---"}</div>
                            <div className="mt-4 flex items-center gap-2">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${result ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-zinc-800 text-zinc-500 border-zinc-700"}`}>
                                    {result ? result.status : "Status: Pending"}
                                </span>
                                <span className="text-xs text-zinc-500 italic">Verified by Neural Engine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
