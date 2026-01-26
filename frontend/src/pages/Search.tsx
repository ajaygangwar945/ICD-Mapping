import { useState } from "react";
import { SearchIcon, Sparkles, Copy, Download, History, ChevronRight } from "lucide-react";

export const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Search Terminology</h1>
        <p className="text-muted-foreground text-lg">Intelligent search across medical coding systems with AI-powered suggestions</p>
      </header>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
              <SearchIcon className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Smart Search</h2>
              <p className="text-sm text-muted-foreground italic">Type terms in English or Sanskrit (e.g., Amlapitta)</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search medical terms..."
                className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg"
              />
              <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-lg">
              <Sparkles className="w-6 h-6" />
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Search Results */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <SearchIcon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Mapped Results</h3>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Copy mapped results">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Download mapped report">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center opacity-40">
              <SearchIcon className="w-10 h-10" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Waiting for query...</p>
              <p className="text-sm text-muted-foreground">Results will appear here after searching</p>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-violet-500/10 rounded-lg">
                <Sparkles className="w-5 h-5 text-violet-500" />
              </div>
              <h3 className="text-xl font-bold">AI Suggestions</h3>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Copy AI suggestions" aria-label="Copy AI suggestions">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <div className="w-20 h-20 bg-violet-500/5 rounded-full flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-violet-500 animate-pulse opacity-20" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">Analyzing context...</p>
              <p className="text-sm text-muted-foreground italic">AI-powered suggestions will be shown here</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-end gap-6 pt-4 border-t border-border">
        <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
          <History className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          View History
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="h-4 w-px bg-border" />
        <button className="text-sm font-medium text-destructive hover:underline">Clear all data</button>
      </footer>
    </div>
  );
};
