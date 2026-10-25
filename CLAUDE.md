# CLAUDE.md

本文件为 AI 辅助工具（Claude Code / ZCode 等）在本仓库工作时的指引。

## 项目概述

暗色极简风格的中文个人作品集网站，单页站点。基于 [devportfolio](https://github.com/RyanFitzgerald/devportfolio) 模板（Astro 5 + Tailwind CSS v4 + TypeScript）改造：暗色主题、中文字体栈、中文文案与导航。

## 常用命令

```bash
npm run dev       # 开发服务器 http://localhost:4321
npm run build     # 生产构建（输出 dist/）
npm run preview   # 预览构建产物
```

## 架构

内容与样式分离，所有站点内容集中在 `src/config.ts`（单一数据源）：

- `src/components/`：区块组件 Hero / About / Projects / Experience / Education / Header / Footer，均从 config 读取数据；数组为空的区块自动整段隐藏（Header/Footer 里的导航项同理）
- `src/pages/index.astro`：单页入口，按序组装组件；`lang="zh-CN"`；使用系统字体栈，不加载外部 webfont
- `src/config.ts`：姓名/职位/社交链接/介绍/技能/项目/经历/教育，`accentColor` 驱动全站强调色
- `src/styles/global.css`：Tailwind v4 `@theme` 色板 tokens（navy 系背景、slate 系文字），组件内使用 `bg-navy-light`、`text-slate` 等类名

## 修改约定

- 改内容只动 `src/config.ts`；改背景/文字色板只动 `global.css` 的 `@theme` 变量；强调色改 `config.ts` 的 `accentColor`
- 组件中的强调色均通过内联 `style` 引用 `siteConfig.accentColor`，不要硬编码
- 新增区块时遵循现有模式：组件从 config 读数据 + 在 index.astro 引入 + Header/Footer 按需加导航
