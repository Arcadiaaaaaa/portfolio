# 个人作品集网站

基于 [devportfolio](https://github.com/RyanFitzgerald/devportfolio) 模板（Astro 5 + Tailwind CSS v4）改造的暗色极简风格个人作品集，中文内容，单页站点：首屏介绍、关于我、项目作品、工作经历、教育经历、页脚。

## 快速开始

```bash
npm install     # 安装依赖（首次）
npm run dev     # 本地开发，默认 http://localhost:4321
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
```

## 如何修改内容

**所有内容都集中在 `src/config.ts` 一个文件里**：姓名、职位、社交链接、自我介绍、技能、项目、经历、教育。文件内标注了【替换】的字段，逐项换成你的真实信息即可，保存后页面自动热更新。

不需要的板块（比如没有教育经历）把对应数组清空 `education: []` 即可，导航和内容会自动隐藏。

## 如何换配色

- **强调色**：改 `src/config.ts` 里的 `accentColor`（暗色主题推荐 `#64ffda` 青、`#7aa2f7` 蓝、`#bb9af7` 紫）
- **背景/文字色板**：改 `src/styles/global.css` 里 `@theme` 下的 `--color-navy*`、`--color-slate*` 变量

## 目录结构

```
src/
├── config.ts          # ★ 所有站点内容（唯一需要日常修改的文件）
├── pages/index.astro  # 单页入口，组装各区块
├── components/        # 各区块组件（Hero/About/Projects/Experience/Education/Header/Footer）
└── styles/global.css  # 主题色板（@theme tokens）与全局字体
```

## 部署

**Vercel（最简单）**：把仓库推到 GitHub 后，在 [vercel.com](https://vercel.com) 导入仓库，框架选 Astro，零配置部署。

**GitHub Pages**：在仓库 Settings → Pages 选择 GitHub Actions，Astro 官方提供的 workflow（Deploy an Astro site）开箱即用；注意若发布到 `https://<用户名>.github.io/<仓库名>/`，需要在 `astro.config.mjs` 里设置 `base: "/<仓库名>"`。

**Netlify / Cloudflare Pages**：同样一键导入，构建命令 `npm run build`，产物目录 `dist`。

## 致谢

- 模板：[devportfolio](https://github.com/RyanFitzgerald/devportfolio) by Ryan Fitzgerald（MIT License，见 LICENSE.md）
- 暗色色板参考：[brittanychiang.com](https://github.com/bchiang7/v4) 的经典深海军蓝配色
