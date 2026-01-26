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
    <div className="space-y-8 max-w-5xl mx-auto">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Data Ingestion</h1>
        <p className="text-muted-foreground text-lg">Upload and process healthcare terminology data in NAMASTE compliant format</p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-3xl p-10 overflow-hidden relative shadow-sm"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <Database className="w-64 h-64 text-primary" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6 relative">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <FileSpreadsheet className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Step 1: Ingest NAMASTE CSV</h2>
              <p className="text-muted-foreground italic">Target: ICD-11 Mapping Engine</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-2">
              <Upload className="w-5 h-5" />
              Upload file
            </button>
            <button
              onClick={handleIngestDemo}
              className="flex-1 md:flex-none px-8 py-4 border border-border bg-muted/30 text-foreground rounded-xl font-bold hover:bg-muted transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Demo data
            </button>
          </div>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`border-3 border-dashed rounded-3xl p-20 text-center transition-all cursor-pointer group ${isDragging
            ? "border-primary bg-primary/5 scale-[0.99]"
            : "border-border bg-muted/20 hover:border-primary/50 hover:bg-muted/30"
            }`}
        >
          <div className="mb-6 relative inline-block">
            <Upload className={`w-20 h-20 mx-auto transition-all ${isDragging ? 'text-primary' : 'text-muted-foreground'}`} />
            <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Drag & Drop CSV File</h3>
          <p className="text-muted-foreground text-lg mb-4 italic">Or click anywhere to browse your local storage</p>
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest">
            <FileSpreadsheet className="w-4 h-4" />
            Maximum file size: 50MB
          </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-end gap-6 text-sm">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <History className="w-4 h-4" />
          View Ingestion Logs
        </button>
        <span className="text-border">|</span>
        <p className="text-muted-foreground">Supported format: CSV, Excel (.xlsx)</p>
      </div>
    </div>
  );
};
