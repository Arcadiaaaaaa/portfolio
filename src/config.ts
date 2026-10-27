// ============================================================
// 站点唯一配置文件：所有内容都在这里改，改完保存即生效
// 设计系统：V Portfolio（极简编辑风），文案语气见设计包风格指南——
// 第一人称、具体、简短；项目简介三段式：做了什么 → 为什么做 → 学到了什么
// 标注【替换】的字段请换成你自己的真实信息
// ============================================================
export const siteConfig = {
  // 【替换】你的名字（导航左上角、页脚版权）
  name: "你的名字",
  // 【替换】首页大标题（display，衬线体，每页最多一次）：一句话说你做什么
  tagline: "把想法做成能跑起来的东西。",
  // 浏览器标签页与搜索引擎里的站点描述
  description: "个人作品集网站",
  // 【替换】标题下的一句话简介（lede）：你是谁 + 正在往哪走
  aboutMe:
    "全栈开发工程师。这里放我做过和正在做的东西——从解决自己日常痛点的小工具，到写给自己学习用的小系统。",

  social: {
    // 【替换】邮箱（首页「联系我」主按钮和页脚）
    email: "your-email@example.com",
    // 【替换】各平台主页链接；不需要的可整项删除
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/yourname",
  },

  // 【替换】项目目录（按重要程度排序，编号自动生成 01、02……）
  // 每行：title 项目名（可点，优先跳 href）+ summary 一句话（做了什么+为什么，≤64ch）
  //       + tags 技术栈（最多 4 个）+ year 年份 + 两个入口：href 在线使用 / github 源码
  // 没有在线版的项目删掉 href，只留 GitHub；没有仓库就删掉 github
  projects: [
    {
      title: "旅行记录",
      summary:
        "我用它集中记录火车、公交与地铁出行，回顾花费和里程；实践换乘联动、统计看板与安全登录。在线版需登录。",
      href: "https://travel-log.2200735309.workers.dev",
      github: "https://github.com/Arcadiaaaaaa/travel-log/tree/codex/cloudflare-deploy",
      tags: ["Python", "JavaScript / PWA", "SQLite / D1", "Cloudflare Workers"],
      year: "2026",
    },
    {
      title: "是啊吃什么",
      summary:
        "帮你决定「今天吃什么」的小工具：按早/午/晚餐段随机推荐餐品、饮品与拼菜窗口。做它是因为选择困难，学到了偏好加权随机（反馈、时间衰减、防连抽）与 PWA 离线。",
      href: "https://what-to-eat-jfq.pages.dev/",
      github: "https://github.com/Arcadiaaaaaa/what-to-eat",
      tags: ["JavaScript", "PWA", "Service Worker"],
      year: "2026",
    },
    {
      title: "项目二（示例标题）",
      summary:
        "一句话简介占位：做了什么 + 为什么做。不超过一行，写具体点，比如「为了某场景写的一个小工具，解决了某某问题」。",
      href: "https://your-demo.example.com",
      github: "https://github.com/yourname/your-project",
      tags: ["Python", "FastAPI"],
      year: "2026",
    },
    {
      title: "项目三（示例标题）",
      summary:
        "一句话简介占位：做了什么 + 为什么做 + 学到了什么。没有第三个项目就删掉这一整块花括号；项目多也可以继续往下加。",
      href: "https://your-demo.example.com",
      github: "https://github.com/yourname/your-project",
      tags: ["TypeScript", "React"],
      year: "2025",
    },
  ],
};
