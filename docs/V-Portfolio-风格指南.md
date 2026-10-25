# V Portfolio

个人作品集的视觉系统：**极简编辑风**。像一本安静的技术杂志——米白纸面、墨黑文字、衬线大标题、等宽小字，只用一种朱砂色做强调。让项目本身说话，界面退到后面。

## 原则

- **纸与墨。** 大面积只有 `paper` 和 `ink`。不用渐变、不用阴影、不用彩色卡片。
- **一种强调色。** `accent`（朱砂）只给链接、当前导航和项目编号。一屏里它出现的面积应该很小——用多了就不再是强调。
- **线，不是盒子。** 区块之间靠留白（`space-4`）和 1px `hairline` 分隔，而不是卡片边框或阴影。
- **三种字体各司其职。** 衬线（`serif`）给标题，无衬线（`sans`）给正文，等宽（`mono`）给编号、日期和代码。中文自动回退到思源宋体 / 思源黑体。
- **直角为主。** 默认 `radius-0`；只有按钮用 `radius-sm`，技术栈标签用 `radius-pill`。

## 文案语气

第一人称、具体、简短。写"我在笔记本上训练了一个字符级 Transformer"，不写"热衷于探索人工智能的无限可能"。项目描述三段式：**做了什么 → 为什么做 → 学到了什么**。

## 版式

- 正文行宽 ≤ 64ch，左对齐，不两端对齐。
- 页面左右边距：手机 `space-2`，桌面 `space-3`；内容最大宽度 960px。
- 项目列表：每行 = `meta` 编号（accent）+ `heading` 项目名 + `small` 技术栈与年份（ink-muted），行间一条 `hairline`。
- 首页结构：`display` 一句话 → `lede` 自我介绍 → 项目列表 → 页脚联系方式。

## 颜色用法

| token | 用在哪 |
| --- | --- |
| `paper` | 页面底色 |
| `paper-raised` | 代码块、引用框 |
| `ink` / `ink-muted` | 主文字 / 次要文字 |
| `hairline` | 分隔线 |
| `accent` | 链接、编号、当前导航 |
| `accent-tint` | 选中色、标签底、行内代码底 |

所有文字组合在明暗两套主题下对比度都 ≥ 4.5:1。

## 图像与图标

暂无 logo，名字直接用 `serif` 字体排出。项目截图用直角、无边框、无阴影，下方配 `small` 图注。图标如需要，用 1.5px 线性图标，颜色跟随文字。

## 组件

首页用到的四个组件，命名空间 `VPortfolio`（React 18）：

| 组件 | 用途 |
| --- | --- |
| `Nav` | 页顶导航：名字 + 最多 4 个链接，当前页朱砂下划线 |
| `ProjectList` | 首页项目目录：编号 · 项目名 + 一句简介 + 技术栈 · 年份 |
| `Button` | `primary` / `secondary` / `text` 三种；传 `href` 即为链接 |
| `Tag` | 技术栈胶囊标签；`muted` 为细线次要版 |

首页组合：`Nav` → `display` 标题 + `lede` 简介 + 一个 primary `Button` → `ProjectList` → text `Button`（查看全部）→ 页脚。

---

## 附录：全部 Token

### 颜色

| token | 浅色 | 深色 | 用法 |
| --- | --- | --- | --- |
| `paper` | `#f6f3ec` | `#141311` | 页面底色。像纸，不是纯白；整站只有这一个大面积底色。 |
| `paper-raised` | `#fffdf8` | `#1d1b18` | 需要和底色区分的面：代码块、项目详情里的引用框。只靠亮度差区分，不加阴影。 |
| `ink` | `#1a1916` | `#ece8df` | 正文与标题文字，放在 paper / paper-raised 上（≥15:1）。 |
| `ink-muted` | `#5f5b52` | `#a29d92` | 次要文字：日期、技术栈、图注、页脚（paper 上 ≥6:1）。 |
| `hairline` | `#d9d4c7` | `#36332d` | 1px 分隔线与项目列表行间线。用线分区，不用卡片阴影。纯装饰，不承载信息。 |
| `accent` | `#b23a0e` | `#f0804f` | 唯一强调色（朱砂）：链接、悬停下划线、当前导航、项目编号。每屏少量使用；paper 上 ≥5.4:1。 |
| `on-accent` | `#fffdf8` | `#141311` | 放在 accent 实色上的文字（极少用，如主按钮）。 |
| `accent-tint` | `#efdfcf` | `#3b2519` | accent 的浅底：文字选中色、标签底色、行内代码底。上面的文字用 ink。 |

### 字体

| 族 | 字体栈 |
| --- | --- |
| `serif` | Newsreader, "Noto Serif SC", "Songti SC", Georgia, serif |
| `sans` | Inter, "Noto Sans SC", "PingFang SC", system-ui, sans-serif |
| `mono` | "JetBrains Mono", ui-monospace, Menlo, monospace |

网页引入：`<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">`

### 文字样式

| 样式 | 字体 | 字号 / 行高 | 字重 | 字距 | 用法 |
| --- | --- | --- | --- | --- | --- |
| `display` | serif | 72px / 76px | 400 | -0.02em | 首页大标题，每页最多一次。 |
| `title` | serif | 40px / 46px | 400 | -0.01em | 项目详情页标题、区块大标题。 |
| `heading` | serif | 24px / 32px | 500 | 0 | 文章内二级标题、项目列表里的项目名。 |
| `lede` | sans | 20px / 32px | 400 | 0 | 标题下的一句话简介。 |
| `body` | sans | 17px / 28px | 400 | 0 | 正文。行宽控制在 64ch 以内。 |
| `small` | sans | 14px / 20px | 400 | 0 | 图注、页脚、技术栈说明，颜色用 ink-muted。 |
| `meta` | mono | 12px / 16px | 500 | 0.08em | 项目编号、日期、分类小标签；英文时全大写。代码块正文也用 mono（14px）。 |

### 间距

| token | 值 | 用法 |
| --- | --- | --- |
| `space-1` | 8px | 行内元素间距：标签之间、图标与文字。 |
| `space-2` | 16px | 段落间距、项目列表行内上下留白、手机端左右边距。 |
| `space-3` | 32px | 组件内部大间距；桌面端左右边距。 |
| `space-4` | 64px | 区块之间。宁可多留白也不加分隔装饰。 |

### 圆角

| token | 值 | 用法 |
| --- | --- | --- |
| `radius-0` | 0px | 默认：图片、分隔、代码块都是直角，保持印刷感。 |
| `radius-sm` | 2px | 按钮、输入框、行内代码，几乎看不出的圆角。 |
| `radius-pill` | 999px | 仅用于技术栈标签（pill）。 |

### 文件

- `tokens.css`：CSS 变量 + 文字样式类，明暗主题（`data-theme` 或跟随系统）
- `tokens.json`：原始 token 数据
- `components/`：组件代码（bundle.js / bundle.css / index.d.ts）、各组件说明 README 与预览
- `example/index.html`：用这些组件拼好的首页示例，双击即可在浏览器打开
