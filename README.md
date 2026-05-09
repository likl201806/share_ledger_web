# Kalana Website

Kalana 应用的官方网站，包含产品介绍、隐私协议、用户政策和技术支持页面。

## 项目结构

```
share_ledger_web/
├── index.html          # 官网首页
├── privacy.html        # 隐私协议
├── terms.html          # 用户政策
├── support.html        # 技术支持
├── css/
│   └── styles.css      # 全局样式
├── js/
│   └── main.js         # 交互脚本
└── assets/
    └── images/         # 图片资源
```

## 页面说明

| 页面 | 描述 |
|------|------|
| **首页** (index.html) | 产品介绍、功能特点、下载链接 |
| **隐私协议** (privacy.html) | 数据收集、存储、安全、用户权利 |
| **用户政策** (terms.html) | 服务条款、使用规范、责任限制 |
| **技术支持** (support.html) | 常见问题、故障排除、联系方式 |

## 设计风格

- **主色调**: Coral (#FA9FAE) - 与 iOS 应用保持一致
- **收入/支出**: 绿色 (#34C759) / 红色 (#FF3B30)
- **响应式设计**: 支持桌面端、平板和手机
- **深色模式**: 自动适配系统深色/浅色模式

## 技术栈

- HTML5
- CSS3 (CSS Variables, Flexbox, Grid)
- Vanilla JavaScript
- Google Fonts (系统字体回退)
- SVG 图标

## 本地开发

直接在浏览器中打开 `index.html` 即可预览。

```bash
# 使用 Python 启动简易服务器
python3 -m http.server 8080

# 或使用 Node.js
npx serve

# 或使用 VS Code Live Server 扩展
```

然后访问 `http://localhost:8080`

## 部署

此网站可以部署到任何静态托管服务：

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## 联系信息

- **应用名称**: Kalana
- **联系邮箱**: lkx7312172@gmail.com

## 版权

© 2026 Kalana. 保留所有权利。
