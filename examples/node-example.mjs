// examples/node-example.mjs
// 示例：在 Node 环境中调用 m3u8 下载逻辑
import { downloadM3u8 } from '../m3u8-core.js';

const url = process.argv[2];

if (!url) {
  console.error('用法: node node-example.mjs <m3u8-url>');
  process.exit(1);
}

downloadM3u8({
  url,
  output: './video.mp4',
  concurrency: 8,
  retry: 3,
}).then(() => {
  console.log('下载完成：video.mp4');
}).catch(err => {
  console.error('下载失败：', err);
});
