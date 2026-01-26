import { motion } from "framer-motion";
import { Search as SearchIcon, Copy, Download, History, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";

interface SearchResult {
  id: number;
  term: string;
  code: string;
  match: string;
  confidence: number;
}

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4">
      {/* Search Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
          Ayush Intelligence Search
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto italic">
          Map traditional terminology to globally recognized medical standards with neural accuracy.
        </p>
      </motion.div>

      {/* Main Search Interface */}
      <div className="relative group max-w-3xl mx-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search medical terms (e.g., Amlapitta, Jwara)..."
              className="w-full pl-12 pr-4 py-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg"
            />
          </div>
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleSearch}
              disabled={loading}
              className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/25 disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Find Intelligent Mappings"}
            </button>
            <button className="px-6 bg-muted hover:bg-muted/80 rounded-xl transition-colors" title="View Search History">
              <History className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Search Results */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold italic tracking-tight">Mapping Results</h3>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-bold">
              {results.length} Matches Found
            </span>
          </div>

          <div className="space-y-4">
            {results.length > 0 ? (
              results.map((result: SearchResult) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all group cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-bold">{result.term}</span>
                        <span className="text-xs px-2 py-0.5 bg-muted rounded border border-border font-mono text-muted-foreground">
                          {result.code}
                        </span>
                      </div>
                      <p className="text-primary font-bold italic flex items-center gap-2">
                        <ChevronRight className="w-4 h-4" />
                        {result.match}
                      </p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Copy mapped results" aria-label="Copy mapped results">
                        <Copy className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors" title="Download FHIR Resource">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 w-full bg-muted h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-1000"
                      style={{ width: `${result.confidence * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                    Match Confidence: {Math.round(result.confidence * 100)}%
                  </div>
                </motion.div>
              ))
            ) : query && !loading ? (
              <div className="text-center p-12 bg-muted/20 border-2 border-dashed border-border rounded-3xl">
                <p className="text-muted-foreground italic">No mappings found for "{query}". Try a different term.</p>
              </div>
            ) : (
              <div className="text-center p-12 bg-muted/20 border-2 border-dashed border-border rounded-3xl">
                <p className="text-muted-foreground italic">Enter a medical term above to start the neural mapping process.</p>
              </div>
            )}
          </div>
        </div>

        {/* AI Suggestions - Placeholder for future */}
        <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-8 shadow-sm space-y-6">
          <h3 className="text-2xl font-bold italic tracking-tight">AI Suggestions</h3>
          <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
            <div className="w-20 h-20 bg-violet-500/5 rounded-full flex items-center justify-center">
              <div className="w-10 h-10 text-violet-500">
                <Sparkles className="w-full h-full" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-foreground">AI-powered insights coming soon!</p>
              <p className="text-sm text-muted-foreground italic">Stay tuned for intelligent suggestions and context.</p>
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
