export default function Header() {
  return (
    <header className="text-center pt-12 pb-6 px-6">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-lg bg-[#ff2442] flex items-center justify-center shadow-lg shadow-red-200">
  <span className="text-white font-black text-xs leading-none whitespace-nowrap">
    小红书
  </span>
</div>
        <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">RedNote</span>
      </div>
      <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-tight mb-3">
        小红书网感
        <span className="text-[#ff2442]">标题测试机</span>
      </h1>
      <p className="text-sm text-gray-400 font-medium tracking-wide">
        让每一篇笔记都具备爆款潜质
      </p>
    </header>
  );
}