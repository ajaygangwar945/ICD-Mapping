import { motion } from "framer-motion";
import { Activity, Database, FileText, Search, Users, ArrowUpRight, Sparkles, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export const Dashboard = () => {
    const [statsData, setStatsData] = useState({
        total_mappings: "0",
        daily_queries: "0",
        active_users: "0",
        fhir_resources: "0"
    });

    useEffect(() => {
        fetch("http://localhost:8000/api/stats")
            .then(res => res.json())
            .then(data => {
                setStatsData({
                    total_mappings: data.total_mappings.toLocaleString(),
                    daily_queries: data.daily_queries.toLocaleString(),
                    active_users: data.active_users.toLocaleString(),
                    fhir_resources: data.fhir_resources.toLocaleString()
                });
            })
            .catch(err => console.error("Failed to fetch stats:", err));
    }, []);

    const stats = [
        { label: "Total Mappings", value: statsData.total_mappings, icon: Database, color: "text-blue-500", bg: "bg-blue-500/10", trend: "+12%" },
        { label: "Daily Queries", value: statsData.daily_queries, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10", trend: "+5%" },
        { label: "Active Users", value: statsData.active_users, icon: Users, color: "text-violet-500", bg: "bg-violet-500/10", trend: "+2" },
        { label: "FHIR Resources", value: statsData.fhir_resources, icon: FileText, color: "text-amber-500", bg: "bg-amber-500/10", trend: "+18%" },
    ];

    return (
        <div className="space-y-10 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-4"
            >
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase italic">
                        <TrendingUp className="w-4 h-4" />
                        System Status: Operational
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight">Dashboard Overview</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Real-time intelligence and analytics for Ayush healthcare interoperability and ICD-11 mapping.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-xl font-bold transition-all flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Export Audit Log
                    </button>
                    <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Live Sync
                    </button>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 bg-card border border-border rounded-3xl shadow-sm hover:shadow-2xl hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden"
                    >
                        <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] group-hover:scale-110 transition-all">
                            <stat.icon className="w-32 h-32 text-primary" />
                        </div>

                        <div className="flex items-center justify-between mb-6 relative">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12 ${stat.bg}`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full">
                                <ArrowUpRight className="w-3 h-3" />
                                {stat.trend}
                            </div>
                        </div>
                        <div className="relative">
                            <h3 className="text-3xl font-bold mb-1 group-hover:translate-x-1 transition-transform">{stat.value}</h3>
                            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest italic">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Placeholder for Charts */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                <div className="lg:col-span-2 p-10 bg-card border border-border rounded-3xl min-h-[450px] relative overflow-hidden group shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Activity className="w-6 h-6 text-primary" />
                            </div>
                            Mapping Activity
                        </h3>
                        <select className="bg-muted border-none rounded-lg text-sm font-bold px-4 py-2 cursor-pointer outline-none focus:ring-2 focus:ring-primary transition-all" title="Select timeframe">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>All Time</option>
                        </select>
                    </div>
                    <div className="flex h-[300px] items-center justify-center text-muted-foreground italic border-2 border-dashed border-border rounded-3xl group-hover:bg-muted/30 transition-colors">
                        <div className="flex flex-col items-center gap-4">
                            <Activity className="w-12 h-12 opacity-20" />
                            Analytics Visualization Engine Ready
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-3xl p-10 text-primary-foreground text-center flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="20" cy="20" r="10" fill="currentColor" />
                            <circle cx="80" cy="80" r="15" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-md shadow-xl transition-transform group-hover:scale-110">
                        <Search className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 italic tracking-tight">Expand Your Reach</h3>
                    <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed italic">
                        Instantly map local traditional terminology to international standards with 99% accuracy.
                    </p>
                    <button className="w-full bg-white text-primary font-bold py-4 rounded-2xl hover:bg-primary-foreground transition-all shadow-xl hover:-translate-y-1 active:translate-y-0">
                        New Search Session
                    </button>
                    <p className="mt-6 text-xs font-medium text-white/40 uppercase tracking-[0.2em]">Next-Gen Interop Engine</p>
                </div>
            </motion.div>
        </div>
    );
};
