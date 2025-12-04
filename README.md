<p align="center">
  <a href="https://tool8s.com/">
    <img src="./assets/banner.png" width="100%" />
  </a>
</p>

<h1 align="center"><b>Media Studio AI — M3U8 视频提取下载器（Web & Desktop）</b></h1>

<p align="center">
  <a href="https://tool8s.com/"><b>在线使用（Web 版）</b></a> |
  <a href="https://tool8s.com/uploads/Media-Studio-AI-setup.exe"><b>下载桌面客户端（Windows）</b></a>
</p>

<p align="center">
  <b>专业 · 稳定 · 高兼容 · 极速 M3U8 视频下载与合并工具</b>
</p>

---

## 🚀 工具简介

**Media Studio AI** 是由 **Tool8s（tool8s.com）** 提供的专业 M3U8 视频解析与下载工具。

- 支持从网页中自动提取 m3u8 地址  
- 支持分片并发下载，线程数可配置  
- 支持 AES-128 自动解密（自动获取 key / iv / uri）  
- 支持 TS 无损合并，可选在浏览器端封装为 MP4  
- 提供在线 Web 版 + Windows 桌面客户端  
- 适合保存课程视频、在线视频、直播回放等

如果你只是想直接使用工具，推荐访问 **在线版** 或下载 **桌面版客户端**：

- 🌐 在线版：https://tool8s.com/
- 💻 桌面版（Windows）：https://tool8s.com/uploads/Media-Studio-AI-setup.exe

---

## 🌐 在线使用（Web 版）

1. 打开浏览器，访问：https://tool8s.com/  
2. 在支持的视频网站中，复制页面地址或 m3u8 地址  
3. 粘贴到工具中，点击解析 / 下载  
4. 等待下载完成后，即可保存到本地

在线版适合：

- 临时下载短视频  
- 不想安装任何软件  
- 多设备 / 多平台使用

---

## 💻 桌面客户端（Windows）

下载地址：  
👉 https://tool8s.com/uploads/Media-Studio-AI-setup.exe

桌面版优势：

- 下载更稳定，适合大文件 / 长视频  
- 原生文件写入，速度更快  
- 支持弱网络环境下自动重试  
- 后续会加入更多 AI 相关功能（如去水印、画质增强等）

---

## 🧪 Node.js 使用示例

如果你是前端 / Node 开发者，也可以把核心下载逻辑集成到自己的项目中。下面是一个简单示例：

```js
// examples/node-example.mjs
import { downloadM3u8 } from './m3u8-core.js';

await downloadM3u8({
  url: 'https://example.com/index.m3u8',
  output: './video.mp4',
  concurrency: 8,   // 并发数
  retry: 3          // 单分片最大重试次数
});
```

> 说明：这里的 `downloadM3u8` 只是示例函数名，你可以根据自己仓库的实际实现进行调整。

---

## 🌐 浏览器端核心流程示例

```js
// examples/browser-example.js
import { fetchM3u8AndDownload } from './m3u8-browser.js';

const btn = document.querySelector('#downloadBtn');

btn.addEventListener('click', () => {
  const url = document.querySelector('#m3u8Url').value.trim();
  if (!url) return alert('请输入 m3u8 地址');

  fetchM3u8AndDownload(url, {
    fileName: 'video.mp4',
    concurrency: 6,
  });
});
```

---

## 📦 功能清单

- ✅ 自动抓取 / 识别 m3u8 地址  
- ✅ 分片并发下载（支持并发数配置）  
- ✅ 自动重试失败分片  
- ✅ AES-128 / key / iv 自动处理  
- ✅ TS 分片严格按索引排序，合并不乱序  
- ✅ 浏览器端支持 Blob 下载  
- ✅ 桌面端支持本地文件系统保存  
- ✅ 后续扩展 AI 工具能力（去水印 / 画质增强等）

---

## 🔧 Roadmap / TODO

- [ ] 批量任务队列（多个链接一键下载）  
- [ ] Chrome / Edge 浏览器扩展版本  
- [ ] AI 去水印功能  
- [ ] AI 清晰度增强（超分辨率）  
- [ ] 支持更多加密方式的解密适配  

---

## 🤝 反馈 & 交流

- 官方网站：https://tool8s.com/  
- 如有问题或建议，欢迎在 GitHub 提交 Issue，或在网站中通过联系方式反馈。

---

## 📄 License

本项目采用 MIT License，允许商用、修改与二次开发，但请保留基本署名信息。

---

<p align="center">
  <img src="./assets/logo.png" width="120" />
  <br />
  <b>Made by Tool8s.com — 免费在线 AI 工具集</b>
</p>
