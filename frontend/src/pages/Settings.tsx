import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Smartphone, Key, Fingerprint, RefreshCw, FileKey } from "lucide-react";
import { useState } from "react";

export const Settings = () => {
    const [isConnecting, setIsConnecting] = useState(false);
    const [status, setStatus] = useState<"idle" | "connecting" | "connected">("idle");

    const handleConnect = () => {
        setIsConnecting(true);
        setStatus("connecting");
        // Simulate OAuth flow
        setTimeout(() => {
            setIsConnecting(false);
            setStatus("connected");
        }, 2000);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4"
            >
                <div className="inline-flex items-center justify-center p-4 bg-amber-500/10 rounded-3xl mb-4 shadow-lg shadow-amber-500/10">
                    <Shield className="w-16 h-16 text-amber-500" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">ABHA Authentication</h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed italic">
                    Securely link your application with the Ayushman Bharat Health Account ecosystem using industry-standard OAuth 2.0.
                </p>
            </motion.header>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Integration Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                        <Fingerprint className="w-64 h-64 text-foreground" />
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
                                <Lock className="w-6 h-6 text-amber-500" />
                                Secure Connect
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Initiate a secure handshake with the ABHA Health Information Exchange (HIE). We handle token generation, rotation, and secure storage.
                            </p>
                        </div>

                        <div className="space-y-4 bg-muted/30 p-6 rounded-2xl border border-border/50">
                            {[
                                "HIP/HIU Compliance Verified",
                                "End-to-End Encryption (AES-256)",
                                "User Consent Management"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-green-500/10 rounded-full">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="font-bold text-sm text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleConnect}
                            disabled={status !== "idle"}
                            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden ${status === "connected"
                                    ? "bg-green-500 text-white cursor-default"
                                    : "bg-amber-500 text-white hover:bg-amber-600 hover:-translate-y-1 active:translate-y-0 shadow-amber-500/25"
                                }`}
                        >
                            {status === "idle" && (
                                <>
                                    <Fingerprint className="w-6 h-6" />
                                    Authenticate via ABHA
                                </>
                            )}
                            {status === "connecting" && (
                                <>
                                    <RefreshCw className="w-6 h-6 animate-spin" />
                                    Establishing Handshake...
                                </>
                            )}
                            {status === "connected" && (
                                <>
                                    <CheckCircle className="w-6 h-6" />
                                    Session Active
                                </>
                            )}
                        </button>
                    </div>
                </motion.div>

                {/* Configuration Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="bg-muted/30 border border-border rounded-[2.5rem] p-8 md:p-10 flex-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <FileKey className="w-5 h-5 text-primary" />
                                Client Configuration
                            </h3>

                            <div className="space-y-4">
                                <div className="group p-4 md:p-5 bg-background border border-border rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
                                    <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                                        <Key className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Client ID</div>
                                        <div className="font-mono text-sm md:text-base font-bold truncate">sbx-837-299-441-992</div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-xs font-bold border border-green-500/20">ACTIVE</div>
                                </div>

                                <div className="group p-4 md:p-5 bg-background border border-border rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors shadow-sm">
                                    <div className="p-3 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                                        <Smartphone className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Callback URL</div>
                                        <div className="font-mono text-sm md:text-base font-bold truncate">/api/v1/auth/callback</div>
                                    </div>
                                    <div className="px-3 py-1 bg-green-500/10 text-green-500 rounded-lg text-xs font-bold border border-green-500/20">VERIFIED</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Environment</h4>
                            <div className="flex gap-2">
                                <span className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-bold border border-primary/20">Sandbox Gateway v2.4</span>
                                <span className="px-4 py-2 bg-muted text-muted-foreground rounded-xl text-sm font-bold border border-border">Latency: 45ms</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-sm text-muted-foreground italic">
                        Need help? <a href="#" className="text-primary font-bold hover:underline">View Implementation Guide</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
