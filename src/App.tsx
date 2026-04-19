import { useState } from "react";
import Header from "./components/Header";
import InputSection from "./components/InputSection";
import ResultsLab from "./components/ResultsLab";
import { generateTitles } from "./lib/titleGenerator";
import type { TitleStyle } from "./lib/titleGenerator";

export default function App() {
  const [input, setInput] = useState("");
  const [titles, setTitles] = useState<TitleStyle[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setTitles(generateTitles(input));
    setLoading(false);
  };

  const handleRegenerate = async () => {
    if (loading) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setTitles(generateTitles(input));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-md mx-auto">
        <Header />
        <InputSection
          value={input}
          onChange={setInput}
          onGenerate={handleGenerate}
          loading={loading}
        />
        <ResultsLab
          titles={titles}
          onRegenerate={handleRegenerate}
          loading={loading}
        />
      </div>
    </div>
  );
}
