# CLAUDE.md

本文件为 AI 辅助工具（Claude Code / ZCode 等）在本仓库工作时的指引。

## 项目概述

极简编辑风（V Portfolio 设计系统）的中文个人作品集，单页站点，Astro 5 + TypeScript 构建。视觉：米白纸面 + 墨黑 + 朱砂强调色，明暗主题跟随系统，无卡片无阴影，hairline 分隔。设计规范全文见 `docs/V-Portfolio-风格指南.md`。

## 常用命令

```bash
npm run dev       # 开发服务器 http://localhost:4321
npm run build     # 生产构建（输出 dist/）
npm run preview   # 预览构建产物
npm run deploy    # 构建并部署到 Cloudflare Pages（arcadia-portfolio）
```

## 架构

- `src/config.ts`：**唯一内容源**——name / tagline（display 大标题）/ aboutMe（lede）/ social / projects（title、summary、tags≤4、year、href 在线使用、github 源码，两个入口均可选）
- `src/pages/index.astro`：单页入口，`.page` 容器（max-width 960px）内按序组装 Nav → Hero → ProjectList → Footer；`lang="zh-CN"`；head 引入 Newsreader/Inter/JetBrains Mono（Google Fonts，失败自动回退系统字体）
- `src/components/`：Nav（名字 + ≤4 链接，当前项朱砂下划线）/ Hero（display + lede + primary 按钮，每屏最多一个 primary）/ ProjectList（杂志目录式行：编号 accent mono + 衬线项目名 + 简介 + 标签胶囊 + 双入口链接 + 右侧年份，行间 hairline）/ Footer（© + 社交链接）
- `src/styles/tokens.css`：设计系统变量（颜色/字体/间距/圆角，明暗主题 + prefers-color-scheme）；`src/styles/global.css`：`vp-*` 组件类（与设计包 bundle.css 对齐）+ `.page` 容器

## 修改约定

- 改内容只动 `src/config.ts`；改颜色/字体/间距动 `tokens.css`；组件样式动 `global.css` 的 `vp-*` 类
- **严格遵守设计系统**：不新增颜色（强调色只给链接/编号/当前导航）、不加阴影/卡片/渐变、直角为主、区块间用留白（space-4）和 hairline
- 文案语气：第一人称、具体、简短；项目简介三段式（做了什么 → 为什么做 → 学到了什么），≤64ch
- Tailwind 仅作 preflight reset，组件一律用 `vp-*` 语义类，不要写工具类
