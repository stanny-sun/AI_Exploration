import { Sparkles } from "lucide-react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onGenerate: () => void;
  loading: boolean;
};

export default function InputSection({ value, onChange, onGenerate, loading }: Props) {
  return (
    <section className="px-5">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="输入你的商品描述或笔记初稿..."
          rows={5}
          className="w-full rounded-2xl border border-gray-100 bg-white px-5 py-4 text-sm text-gray-800 placeholder-gray-300 resize-none outline-none focus:border-[#ff2442] focus:ring-4 focus:ring-red-50 transition-all duration-200 shadow-sm leading-relaxed"
        />
        <div className="absolute bottom-3 right-4 text-xs text-gray-200 select-none">
          {value.length}/200
        </div>
      </div>

      <button
        onClick={onGenerate}
        disabled={loading || value.trim().length === 0}
        className="mt-4 w-full rounded-2xl bg-[#ff2442] py-4 text-white font-bold text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-red-200 active:scale-[0.98] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none hover:bg-[#e81e3b] relative overflow-hidden"
      >
        {loading ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" />
            <div className="w-5 h-5 border-2.5 border-white border-t-transparent rounded-full animate-spin" />
            <span className="relative z-10">正在注入网感✨</span>
          </>
        ) : (
          <>
            <Sparkles size={18} className="flex-shrink-0" />
            <span>一键注入网感</span>
          </>
        )}
      </button>
    </section>
  );
}
