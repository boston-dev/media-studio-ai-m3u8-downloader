// examples/electron-example.js
// 示例：在 Electron 主进程中封装一个下载接口
const { ipcMain } = require('electron');
const { downloadM3u8 } = require('../m3u8-core.js');

ipcMain.handle('download-m3u8', async (event, { url, output }) => {
  if (!url || !output) {
    throw new Error('url / output 必填');
  }
  await downloadM3u8({
    url,
    output,
    concurrency: 8,
    retry: 3,
  });
  return { ok: true };
});
