# 个人作品集网站

线上地址：**https://arcadia-portfolio.pages.dev** （Cloudflare Pages）

按照 **V Portfolio 设计系统**（`docs/V-Portfolio-风格指南.md`）实现的极简编辑风个人作品集：米白纸面 + 墨黑文字 + 衬线大标题 + 朱砂强调色，明暗双主题跟随系统，Astro 5 静态构建，中文单页站点。

首页结构：导航（名字 + 作品/GitHub/联系）→ display 大标题 + lede 简介 + 「联系我」主按钮 → 精选作品目录（编号 · 项目名 · 一句话简介 · 技术栈标签 · 双入口链接 · 年份）→ 页脚社交链接。

## 快速开始

```bash
npm install     # 安装依赖（首次）
npm run dev     # 本地开发，默认 http://localhost:4321
npm run build   # 构建到 dist/
npm run preview # 本地预览构建产物
npm run deploy  # 构建并部署到 Cloudflare Pages
```

## 如何修改内容

**所有内容都集中在 `src/config.ts` 一个文件里**，标注【替换】的字段逐项换成真实信息即可：

- `tagline`：首页大标题（一句话说你做什么）
- `aboutMe`：标题下的一句话简介
- `social`：邮箱 / GitHub / LinkedIn / X（不需要的可整项删除，导航和页脚自动隐藏）
- `projects`：项目目录，按重要程度排序，编号自动生成。每项含 `title`（可点，优先跳在线版）、`summary`（一句话：做了什么+为什么）、`tags`（最多 4 个）、`year`、`href`（在线使用入口）、`github`（源码入口）——两个入口都是可选的，删掉对应字段即不显示

## 设计系统要点

- **Token**：`src/styles/tokens.css`（颜色 / 字体 / 间距 / 圆角，明暗主题跟随系统，`data-theme` 可手动覆盖）；组件样式 `src/styles/global.css`（与设计包 `components/bundle.css` 对齐的 `vp-*` 类）
- **原则**：纸与墨、一种强调色（朱砂，只给链接/编号/当前导航）、线不是盒子（hairline 分隔，无卡片无阴影）、直角为主（仅按钮 2px、标签胶囊）
- **字体**：Newsreader 衬线 / Inter 无衬线 / JetBrains Mono 等宽，中文回退宋体/苹方；Google Fonts 加载失败时自动回退系统字体
- 完整规范（含文案语气、版式、组件说明）见 `docs/V-Portfolio-风格指南.md`

## 目录结构

```
src/
├── config.ts              # ★ 所有站点内容（唯一需要日常修改的文件）
├── pages/index.astro      # 单页入口（.page 容器组装四组件）
├── components/            # Nav / Hero / ProjectList / Footer
├── styles/tokens.css      # 设计系统变量（明暗主题）
├── styles/global.css      # vp-* 组件样式 + 页面容器
docs/V-Portfolio-风格指南.md # 设计系统完整规范
```

## 部署

**当前线路（Cloudflare Pages 直传）**：本机已用 wrangler 登录 Cloudflare，项目名 `arcadia-portfolio`。改完内容后一条命令重新上线：

```bash
npm run deploy   # 构建并上传到 https://arcadia-portfolio.pages.dev
```

**Vercel / Netlify / GitHub Pages**：导入仓库零配置部署（构建命令 `npm run build`，产物目录 `dist`）；GitHub Pages 需在 `astro.config.mjs` 设置 `base`。

## 致谢

- 设计系统：V Portfolio（自研规范包 `v-portfolio-style.zip`）
- 初始模板：[devportfolio](https://github.com/RyanFitzgerald/devportfolio) by Ryan Fitzgerald（MIT License，见 LICENSE.md）
