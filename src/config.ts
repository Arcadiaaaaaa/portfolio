// ============================================================
// 站点唯一配置文件：所有内容都在这里改，改完保存即生效
// 标注【替换】的字段请换成你自己的真实信息
// ============================================================
export const siteConfig = {
  // 【替换】你的名字
  name: "你的名字",
  // 【替换】你的职位/一句话身份，如「全栈开发工程师」「前端工程师 · 独立开发者」
  title: "全栈开发工程师",
  // 浏览器标签页与搜索引擎里的站点描述
  description: "个人作品集网站",
  // 全站强调色（按钮、标题下划线、链接悬浮色），支持任意 HEX 颜色
  // 暗色主题推荐：#64ffda（青）、#7aa2f7（蓝）、#bb9af7（紫）
  accentColor: "#64ffda",

  social: {
    // 【替换】邮箱
    email: "your-email@example.com",
    // 【替换】各平台主页链接，不需要的可整项删除
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/yourname",
    github: "https://github.com/yourname",
  },

  // 【替换】自我介绍（关于我段落）
  aboutMe:
    "你好！这里是自我介绍的占位文字。可以写：你是一名什么样的工程师、关注哪些技术方向、做过什么值得骄傲的东西、工作之外的兴趣。两到四段均可，写清楚「我是谁 + 我能做什么 + 我在找什么机会」就足够了。记得把这段话替换成你自己的内容。",

  // 【替换】技能标签（关于我下方的胶囊标签，数量随意）
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL"],

  // 【替换】项目作品：name 项目名、description 一两句话介绍、link 项目链接（线上地址或仓库，没有可删掉 link 字段）、skills 用到的技术
  projects: [
    {
      name: "项目一（示例标题）",
      description:
        "用一两句话说明这个项目解决了什么问题、亮点是什么。例如：一个帮助用户解决某某痛点的 Web 应用，支持某某特性，当前已有多少用户。",
      link: "https://github.com/yourname/your-project",
      skills: ["React", "Node.js"],
    },
    {
      name: "项目二（示例标题）",
      description:
        "项目描述占位。建议结构：做了什么 + 用了什么技术 + 取得了什么结果（数据最有说服力，如性能提升、用户量）。",
      link: "https://github.com/yourname/your-project",
      skills: ["Vue", "Python"],
    },
    {
      name: "项目三（示例标题）",
      description:
        "项目描述占位。没有第三个项目就删掉这一整块花括号；项目多也可以继续往下加。",
      link: "https://github.com/yourname/your-project",
      skills: ["Docker", "AWS"],
    },
  ],

  // 【替换】工作经历：bullets 是要点列表，每条建议用动词开头并带结果
  experience: [
    {
      company: "公司名称 A",
      title: "软件工程师",
      dateRange: "2023.01 - 至今",
      bullets: [
        "负责核心业务模块的设计与开发，支撑日均 XX 万请求",
        "推动某项优化，接口响应时间降低 40%",
        "带教 X 名新同学，沉淀团队开发规范文档",
      ],
    },
    {
      company: "公司名称 B",
      title: "前端开发工程师",
      dateRange: "2021.06 - 2022.12",
      bullets: [
        "从 0 到 1 搭建产品 Web 端，覆盖完整业务流程",
        "建设组件库与 CI/CD 流水线，需求交付效率提升 50%",
        "与产品、设计协作推进体验优化，核心页面转化率提升 XX%",
      ],
    },
  ],

  // 【替换】教育经历（在读或毕业院校、培训经历均可；不需要可整段删成 education: []）
  education: [
    {
      school: "学校名称",
      degree: "计算机科学与技术 · 本科",
      dateRange: "2017 - 2021",
      achievements: [
        "主修课程：数据结构、操作系统、计算机网络等",
        "获奖/社团经历占位，如：校级奖学金两次、计算机协会会长",
      ],
    },
  ],
};
