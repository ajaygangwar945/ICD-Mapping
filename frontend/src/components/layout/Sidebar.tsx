import { LayoutDashboard, Search, Repeat2, Upload, Shield, Globe, Sun, Moon, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

interface SidebarItem {
    icon: LucideIcon;
    label: string;
    href: string;
}

const sidebarItems: SidebarItem[] = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Upload, label: "Data Ingestion", href: "/ingestion" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: Repeat2, label: "Translation", href: "/translation" },
    { icon: Shield, label: "Auth & Audit", href: "/settings" },
    { icon: Globe, label: "Integrations", href: "/fhir" },
];

interface SidebarProps {
    onClose?: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
    const location = useLocation();
    const { theme, setTheme } = useTheme();

    return (
        <div className="w-full h-screen bg-card text-card-foreground border-r border-border flex flex-col">
            {/* Header */}
            <div className="h-16 flex items-center px-4 border-b border-border justify-between">
                <Link to="/" className="flex items-center gap-3" onClick={onClose}>
                    <img src="/favicon.svg" alt="Ayush Intelligence Logo" className="w-8 h-8 rounded-lg shadow-lg shadow-primary/20" />
                    <span className="font-bold text-foreground">Ayush Intelligence</span>
                </Link>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </button>
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-muted md:hidden text-muted-foreground"
                            title="Close sidebar"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
                {sidebarItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    return (
                        <Link to={item.href} key={item.href} onClick={onClose}>
                            <div
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon className="w-5 h-5 shrink-0" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border text-xs text-muted-foreground text-center">
                <p>© 2026 Ayush Intelligence</p>
                <p className="mt-1">Healthcare Interoperability Platform</p>
            </div>
        </div>
    );
};
