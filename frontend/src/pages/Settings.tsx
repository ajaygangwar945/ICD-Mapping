import { motion } from "framer-motion";
import { Sun, Bell, Shield, Database, Layout, Globe, Cpu, Clock, Lock, History } from "lucide-react";

export const Settings = () => {
    return (
        <div className="space-y-10 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
            >
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">System Configuration</h1>
                <p className="text-muted-foreground text-sm md:text-lg italic">
                    Fine-tune your interoperability engine and application preferences
                </p>
            </motion.div>

            {/* Settings Groups */}
            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Visual System",
                        icon: Layout,
                        settings: [
                            { label: "Interface Theme", description: "Choose light, dark, or system default", icon: Sun, control: "Themed" },
                            { label: "Primary Language", description: "Default display language", icon: Globe, control: "English (US)" }
                        ]
                    },
                    {
                        title: "Mapping Engine",
                        icon: Cpu,
                        settings: [
                            { label: "API Provider", description: "Neural mapping endpoint", icon: Database, control: "Ayush AI-X1" },
                            { label: "Sync Timeout", description: "Max request duration", icon: Clock, control: "45.0s" }
                        ]
                    },
                    {
                        title: "Data Safety",
                        icon: Lock,
                        settings: [
                            { label: "Audit Logging", description: "Keep track of all transformations", icon: History, control: "Level 4" },
                            { label: "Encryption", description: "End-to-end resource security", icon: Shield, control: "AES-256-GCM" }
                        ]
                    },
                    {
                        title: "Alerts & Feeds",
                        icon: Bell,
                        settings: [
                            { label: "System Status", description: "Receive real-time health updates", icon: Bell, control: "Push Only" },
                            { label: "Critical Failure", description: "Automatic emergency alerts", icon: Shield, control: "Priority" }
                        ]
                    }
                ].map((group, idx) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card border border-border rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="flex items-center gap-4 p-6 border-b border-border bg-muted/20">
                            <div className="p-2.5 bg-primary/10 rounded-xl">
                                <group.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold italic tracking-tight">{group.title}</h3>
                        </div>
                        <div className="divide-y divide-border">
                            {group.settings.map((setting) => (
                                <div key={setting.label} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 md:p-6 hover:bg-muted/10 transition-colors group cursor-pointer gap-4">
                                    <div className="flex gap-4">
                                        <div className="mt-1 shrink-0">
                                            <setting.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm md:text-base text-foreground group-hover:translate-x-1 transition-transform">{setting.label}</div>
                                            <div className="text-xs md:text-sm text-muted-foreground italic">{setting.description}</div>
                                        </div>
                                    </div>
                                    <div className="text-[10px] md:text-xs px-3 py-1.5 md:px-4 md:py-2 bg-muted text-foreground border border-border rounded-lg md:rounded-xl font-bold uppercase tracking-widest hover:border-primary transition-colors text-center self-start sm:self-auto">
                                        {setting.control}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p className="text-muted-foreground italic">Build Version: 1.4.2-Ayush-Beta</p>
                <div className="flex gap-6 font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-50">
                    <button className="hover:text-primary transition-colors">Documentation</button>
                    <button className="hover:text-primary transition-colors">Security Policy</button>
                </div>
            </div>
        </div>
    );
};
