import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Landing } from "@/pages/Landing";
import { Dashboard } from "@/pages/Dashboard";
import { Search } from "@/pages/Search";
import { Translation } from "@/pages/Translation";
import { DataIngestion } from "@/pages/DataIngestion";
import { FhirResources } from "@/pages/FhirResources";
import { Settings } from "@/pages/Settings";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="translation" element={<Translation />} />
            <Route path="ingestion" element={<DataIngestion />} />
            <Route path="fhir" element={<FhirResources />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<div className="p-8">Page Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
