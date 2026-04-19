import { FlaskConical, RefreshCw } from "lucide-react";
import type { TitleStyle } from "../lib/titleGenerator";
import TitleCard from "./TitleCard";

type Props = {
  titles: TitleStyle[];
  onRegenerate: () => void;
  loading: boolean;
};

export default function ResultsLab({ titles, onRegenerate, loading }: Props) {
  if (titles.length === 0) return null;

  return (
    <section className="px-5 pb-12 mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FlaskConical size={16} className="text-[#ff2442]" />
          <h2 className="text-sm font-bold text-gray-700 tracking-wide">灵感实验室</h2>
        </div>
        <button
          onClick={onRegenerate}
          disabled={loading}
          className="flex items-center gap-1.5 text-xs text-[#ff2442] font-semibold px-3 py-1.5 rounded-full border border-red-100 hover:bg-red-50 active:scale-95 transition-all duration-150 disabled:opacity-40"
        >
          <RefreshCw size={12} className={loading ? "animate-spin" : ""} />
          换一批
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {titles.map((card, i) => (
          <TitleCard key={`${card.id}-${card.title}`} card={card} index={i} />
        ))}
      </div>

      <p className="text-center text-xs text-gray-300 mt-6">
        基于内容关键词智能生成 · 仅供创作参考
      </p>
    </section>
  );
}
