// examples/browser-example.js
// 示例：在浏览器中调用 m3u8 下载逻辑
import { fetchM3u8AndDownload } from '../m3u8-browser.js';

export function initM3u8Downloader() {
  const btn = document.querySelector('#downloadBtn');
  const input = document.querySelector('#m3u8Url');

  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const url = input.value.trim();
    if (!url) {
      alert('请输入 m3u8 地址');
      return;
    }

    fetchM3u8AndDownload(url, {
      fileName: 'video.mp4',
      concurrency: 6,
    });
  });
}
