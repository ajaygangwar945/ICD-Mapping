import { motion } from "framer-motion";
import { Upload, FileSpreadsheet, CheckCircle2, History, Database } from "lucide-react";
import { useState } from "react";

export const DataIngestion = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleIngestDemo = async () => {
    try {
      const response = await fetch("/api/search", {
        method: "POST"
      });
      const data = await response.json();
      if (data.status === "success") {
        alert("Demo data loaded successfully!");
      }
    } catch (error) {
      console.error("Demo ingestion failed:", error);
    }
  };

  return (
    <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto px-2">
      <header className="flex flex-col gap-1 md:gap-2 px-2">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">Data Ingestion</h1>
        <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">Upload and process healthcare terminology data in NAMASTE compliant format</p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl md:rounded-3xl p-5 md:p-10 overflow-hidden relative shadow-sm"
      >
        <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] pointer-events-none">
          <Database className="w-32 h-32 md:w-64 md:h-64 text-primary" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-6 relative">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
              <FileSpreadsheet className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg md:text-2xl font-bold">Step 1: Ingest NAMASTE CSV</h2>
              <p className="text-[10px] md:text-sm text-muted-foreground italic tracking-wide uppercase font-bold">Target: ICD-11 Mapping Engine</p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg md:rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2 text-sm md:text-base">
              <Upload className="w-4 h-4 md:w-5 md:h-5" />
              Upload file
            </button>
            <button
              onClick={handleIngestDemo}
              className="flex-1 md:flex-none px-4 md:px-8 py-3 md:py-4 border border-border bg-muted/30 text-foreground rounded-lg md:rounded-xl font-bold hover:bg-muted transition-all flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              Demo data
            </button>
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-2 md:border-3 border-dashed rounded-2xl md:rounded-3xl p-8 md:p-20 text-center transition-all cursor-pointer group ${isDragging
            ? "border-primary bg-primary/5 scale-[0.99]"
            : "border-border bg-muted/20 hover:border-primary/50 hover:bg-muted/30"
            }`}
        >
          <div className="mb-4 md:mb-6 relative inline-block">
            <Upload className={`w-12 h-12 md:w-20 md:h-20 mx-auto transition-all ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-3">Drag & Drop CSV File</h3>
          <p className="text-muted-foreground text-xs md:text-lg mb-4 italic">Or click anywhere to browse local storage</p>
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <FileSpreadsheet className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary/50" />
            Max file size: 50MB
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
        <button className="flex items-center gap-2 text-[10px] md:text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
          <History className="w-3.5 h-3.5 md:w-4 md:h-4" />
          View Ingestion Logs
        </button>
        <p className="text-[10px] md:text-sm text-muted-foreground italic text-center sm:text-right">Supported formats: CSV, Excel (.xlsx)</p>
      </div>
    </div>
  );
};
