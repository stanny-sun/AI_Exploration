import { useState } from "react";
import { Copy, Check } from "lucide-react";
import type { TitleStyle } from "../lib/titleGenerator";

type Props = {
  card: TitleStyle;
  index: number;
};

export default function TitleCard({ card, index }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(card.title);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = card.title;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-50 animate-fadeUp"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold text-gray-500">{card.label}</span>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}>
            {card.badge}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
            copied
              ? "bg-green-50 text-green-500"
              : "bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-[#ff2442] active:scale-95"
          }`}
          title="复制标题"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
        </button>
      </div>

      <p className="text-[15px] font-bold text-gray-900 leading-snug mb-3 tracking-tight">
        {card.title}
      </p>

      <p className="text-xs text-gray-400 leading-relaxed border-t border-gray-50 pt-3">
        {card.description}
      </p>
    </div>
  );
}
