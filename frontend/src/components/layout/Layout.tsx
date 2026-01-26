import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
    return (
        <div className="flex h-screen bg-background overflow-hidden font-sans text-foreground">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative bg-[url('/bg-grid.svg')]">
                {/* Ambient Background Gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 z-0" />

                <div className="relative z-10 p-8 max-w-7xl mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};
