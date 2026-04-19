export type TitleStyle = {
  id: string;
  label: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
};

const emotionalTemplates = [
  (kw: string) => `救命！${kw}真的绝了 ✨ 谁懂啊这个感受`,
  (kw: string) => `我后悔没早点买${kw}啊 😭 用上就停不下来`,
  (kw: string) => `${kw}一出手，我的生活直接开挂 🔥 必须说出来`,
  (kw: string) => `闺蜜看我用${kw}的状态：？？？ 🙌 到底发生了什么`,
  (kw: string) => `避雷必看！为什么要选${kw} ✨ 这才是真香产品`,
  (kw: string) => `${kw}用一次就上瘾，我现在的本命 💫 再也回不头了`,
  (kw: string) => `不是吹，${kw}真的改变了我 🌟 每一个细节都绝`,
  (kw: string) => `谁懂${kw}啊？就是这一点让我疯狂 ✨ 太绝了`,
];

const emotionalPointTemplates = [
  (kw: string) => `💔 看到${kw}，我眼眶都湿了 | 答应我一定要试试`,
  (kw: string) => `😭 为什么这么好用的${kw}我才刚发现 | 姐妹们冲啊`,
  (kw: string) => `🙏 ${kw}真的救了我啊 | 这种宝藏东西必须推荐`,
  (kw: string) => `😍 ${kw}把我从泥潭里救出来了 ✨ | 真的绝，无敌绝`,
  (kw: string) => `💕 用了${kw}才明白什么叫投资自己 | 谁用谁知道`,
];

const hookTemplates = [
  (kw: string) => `⚠️ 停止滑动！${kw}的真相来了 🔥 | 后悔没早看`,
  (kw: string) => `🚨 答应我一定要看完这个${kw}测评 | 真的会改变你`,
  (kw: string) => `✋ 不要再被骗了！${kw}真实对比来了 💎 | 必看必看`,
  (kw: string) => `🌟 这${kw}凭什么这么火？看完就懂了 | 绝了绝了`,
  (kw: string) => `💥 你一定没见过${kw}这样用的！🔓 | 隐藏玩法大公开`,
];

const practicalTemplates = [
  (kw: string) => `保姆级教学：${kw}新手向使用指南 📚 | 一文搞定所有问题`,
  (kw: string) => `${kw}完整测评来了！7个细节对比 🔬 | 大数据请把它推给姐妹`,
  (kw: string) => `${kw}真的值得吗？数据说话 📊 | 包你看完想入手`,
  (kw: string) => `干货！${kw}使用技巧大全 💡 | 省钱秘诀都在这儿`,
  (kw: string) => `${kw}这样用才对！高阶玩法 ⚡ | 让钱花得更值`,
];

const practicalDetailTemplates = [
  (kw: string) => `🎯 ${kw}5大优缺点测评 | 入手前一定要看这个`,
  (kw: string) => `📝 ${kw}避坑指南：我踩过的3个雷 🚫 | 你一定要避开`,
  (kw: string) => `💯 ${kw}用户真实反馈汇总 👥 | 不看会后悔`,
  (kw: string) => `🔍 深度剖析${kw}：为什么我选它 | 这5点绝了`,
  (kw: string) => `📈 ${kw}性价比PK | 这样选最不吃亏 💰`,
];

function extractKeyword(text: string): string {
  const cleaned = text.trim();
  if (cleaned.length === 0) return "好物";

  const stopWords = ["的", "了", "是", "在", "有", "我", "你", "他", "她", "它", "们", "和", "与", "或", "但", "因为", "所以"];
  const words = cleaned.replace(/[，。！？、；：""''（）【】\s]/g, " ").split(" ").filter(w => w.length > 0);
  const meaningful = words.filter(w => w.length >= 2 && !stopWords.includes(w));

  if (meaningful.length > 0) {
    return meaningful.slice(0, 2).join("");
  }

  return cleaned.slice(0, Math.min(8, cleaned.length));
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateTitles(input: string): TitleStyle[] {
  const keyword = extractKeyword(input);

  return [
    {
      id: "emotional",
      label: "情感共鸣型",
      badge: "走心",
      badgeColor: "bg-rose-50 text-rose-500",
      title: Math.random() > 0.5 ? pick(emotionalTemplates)(keyword) : pick(emotionalPointTemplates)(keyword),
      description: '用「救命」「谁懂」「避雷」等真挚语气，触发读者的情感共鸣和代入感',
    },
    {
      id: "hook",
      label: "悬念反转型",
      badge: "钩子",
      badgeColor: "bg-orange-50 text-orange-500",
      title: pick(hookTemplates)(keyword),
      description: '「后悔没早看」「答应我一定要」等强有力的钩子，制造信息差拉满点击欲',
    },
    {
      id: "practical",
      label: "干货痛点型",
      badge: "高价值",
      badgeColor: "bg-green-50 text-green-600",
      title: Math.random() > 0.5 ? pick(practicalTemplates)(keyword) : pick(practicalDetailTemplates)(keyword),
      description: '「保姆级教学」「大数据请把它推给」等高价值表达，凸显内容实用性和专业度',
    },
  ];
}
