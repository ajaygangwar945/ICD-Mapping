import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle, Smartphone, Key, Fingerprint, RefreshCw, FileKey, Save, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface SettingsData {
    client_id: string;
    callback_url: string;
    environment: string;
}

export const Settings = () => {
    const [status, setStatus] = useState<"idle" | "connecting" | "connected">("idle");
    const [settings, setSettings] = useState<SettingsData>({
        client_id: "",
        callback_url: "",
        environment: "Sandbox Gateway v2.4"
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        try {
            const response = await fetch("http://localhost:8000/api/settings", {
                signal: controller.signal
            });
            if (response.ok) {
                const data = await response.json();
                setSettings(data);
            } else {
                throw new Error("Failed to fetch settings");
            }
        } catch (error) {
            console.error("Failed to fetch settings:", error);
            setMessage({ text: "Failed to load settings. Backend may be unreachable.", type: "error" });
        } finally {
            clearTimeout(timeoutId);
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage(null);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        try {
            const response = await fetch("http://localhost:8000/api/settings", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
                signal: controller.signal
            });

            if (response.ok) {
                const data = await response.json();
                setSettings(data);
                setMessage({ text: "Configuration saved successfully!", type: "success" });
                setTimeout(() => setMessage(null), 3000);
            } else {
                throw new Error("Failed to save");
            }
        } catch (error) {
            console.error("Save failed:", error);
            setMessage({ text: "Failed to save. Please try again.", type: "error" });
        } finally {
            clearTimeout(timeoutId);
            setSaving(false);
        }
    };

    const handleConnect = () => {
        setStatus("connecting");
        // Simulate OAuth flow
        setTimeout(() => {
            setStatus("connected");
        }, 2000);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 px-4 md:px-6 pb-20">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-4 pt-8 md:pt-0"
            >
                <div className="inline-flex items-center justify-center p-4 bg-teal-500/10 rounded-3xl mb-4 shadow-lg shadow-teal-500/10">
                    <Shield className="w-12 h-12 md:w-16 md:h-16 text-teal-500" />
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight px-2">Auth & Audit</h1>
                <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed italic px-4">
                    Securely manage authentication protocols and audit logs for the Ayush Intelligence Platform.
                </p>
            </motion.header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* Integration Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl md:shadow-2xl relative overflow-hidden group order-2 md:order-1"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                        <Fingerprint className="w-48 h-48 md:w-64 md:h-64 text-foreground" />
                    </div>

                    <div className="relative z-10 space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-3">
                                <Lock className="w-5 h-5 md:w-6 md:h-6 text-teal-500" />
                                Secure Connect
                            </h2>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Initiate a secure handshake with the ABHA Health Information Exchange (HIE). We handle token generation, rotation, and secure storage.
                            </p>
                        </div>

                        <div className="space-y-3 bg-muted/30 p-5 rounded-2xl border border-border/50">
                            {[
                                "HIP/HIU Compliance Verified",
                                "End-to-End Encryption (AES-256)",
                                "User Consent Management"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-green-500/10 rounded-full flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="font-medium text-xs md:text-sm text-foreground/80">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={handleConnect}
                            disabled={status !== "idle"}
                            className={`w-full py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-xl transition-all flex items-center justify-center gap-3 group/btn relative overflow-hidden active:scale-[0.98] ${status === "connected"
                                ? "bg-green-500 text-white cursor-default"
                                : "bg-teal-500 text-white hover:bg-teal-600 shadow-teal-500/25"
                                }`}
                        >
                            {status === "idle" && (
                                <>
                                    <Fingerprint className="w-5 h-5 md:w-6 md:h-6" />
                                    Authenticate via ABHA
                                </>
                            )}
                            {status === "connecting" && (
                                <>
                                    <RefreshCw className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                                    Handshaking...
                                </>
                            )}
                            {status === "connected" && (
                                <>
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
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
                    className="flex flex-col gap-6 order-1 md:order-2"
                >
                    <div className="bg-muted/30 border border-border rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 flex-1 space-y-6 md:space-y-8 relative">
                        {loading && (
                            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-20 flex items-center justify-center rounded-[2rem] md:rounded-[2.5rem]">
                                <RefreshCw className="w-8 h-8 animate-spin text-primary" />
                            </div>
                        )}

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                                    <FileKey className="w-5 h-5 text-primary" />
                                    Client Configuration
                                </h3>
                                {message && (
                                    <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-2 ${message.type === 'success'
                                            ? 'bg-green-500/10 text-green-500 border-green-500/20'
                                            : 'bg-red-500/10 text-red-500 border-red-500/20'
                                            }`}
                                    >
                                        {message.type === 'success' ? <CheckCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                                        {message.text}
                                    </motion.div>
                                )}
                            </div>

                            <div className="space-y-4">
                                {/* Client ID Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Client ID</label>
                                    <div className="group p-2 bg-background border border-border rounded-2xl flex items-center gap-3 focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 transition-all shadow-sm">
                                        <div className="p-2.5 bg-muted rounded-xl">
                                            <Key className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-focus-within:text-teal-500 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            value={settings.client_id}
                                            onChange={(e) => setSettings({ ...settings, client_id: e.target.value })}
                                            className="flex-1 bg-transparent border-none outline-none font-mono text-sm md:text-base font-medium placeholder:text-muted-foreground/50 w-full min-w-0"
                                            placeholder="e.g. sbx-837..."
                                        />
                                    </div>
                                </div>

                                {/* Callback URL Input */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Callback URL</label>
                                    <div className="group p-2 bg-background border border-border rounded-2xl flex items-center gap-3 focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500 transition-all shadow-sm">
                                        <div className="p-2.5 bg-muted rounded-xl">
                                            <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-focus-within:text-teal-500 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            value={settings.callback_url}
                                            onChange={(e) => setSettings({ ...settings, callback_url: e.target.value })}
                                            className="flex-1 bg-transparent border-none outline-none font-mono text-sm md:text-base font-medium placeholder:text-muted-foreground/50 w-full min-w-0"
                                            placeholder="/api/v1/..."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border/50">
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Environment</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-teal-500/10 text-teal-500 rounded-xl text-xs md:text-sm font-bold border border-teal-500/20 whitespace-nowrap">{settings.environment}</span>
                                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-muted text-muted-foreground rounded-xl text-xs md:text-sm font-bold border border-border whitespace-nowrap">Latency: 45ms</span>
                            </div>
                        </div>

                        <button
                            onClick={handleSave}
                            disabled={saving || loading}
                            className="w-full py-3 rounded-xl font-bold text-sm bg-foreground text-background hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? (
                                <>
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="w-4 h-4" />
                                    Save Configuration
                                </>
                            )}
                        </button>
                    </div>

                    <p className="text-center text-xs md:text-sm text-muted-foreground italic px-4">
                        Need help? <a href="#" className="text-teal-500 font-bold hover:underline">View Implementation Guide</a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
