import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans text-foreground">
            {/* Sidebar Desktop */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Sidebar Mobile */}
            <div
                className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />

                {/* Sidebar Drawer */}
                <div
                    className={`absolute inset-y-0 left-0 w-[280px] max-w-[85vw] transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <Sidebar onClose={() => setIsSidebarOpen(false)} />
                </div>
            </div>

            <main className="flex-1 flex flex-col min-w-0 relative bg-[url('/bg-grid.svg')] overflow-hidden">
                {/* Mobile Header */}
                <header className="h-14 md:h-16 flex items-center px-4 border-b border-border md:hidden shrink-0 relative z-20 bg-background/50 backdrop-blur-md">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground transition-colors mr-3"
                        title="Open menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                        <img src="/favicon.svg" alt="Logo" className="w-6 h-6 rounded" />
                        <span className="font-bold text-sm truncate">Ayush Intelligence</span>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto relative">
                    {/* Ambient Background Gradient */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 z-0" />

                    <div className="relative z-10 p-3 md:p-8 max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};
