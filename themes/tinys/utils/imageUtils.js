// utils/imageUtils.js
// 简单明度分析工具
export async function analyzeBrightness(imgUrl, region = {top:0,left:0,width:1,height:60}) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgUrl;
    img.onload = function() {
      const canvas = document.createElement('canvas');
      canvas.width = region.width;
      canvas.height = region.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, region.left, region.top, region.width, region.height, 0, 0, region.width, region.height);
      const imageData = ctx.getImageData(0, 0, region.width, region.height).data;
      let total = 0;
      for (let i = 0; i < imageData.length; i += 4) {
        // 亮度公式
        total += 0.299 * imageData[i] + 0.587 * imageData[i+1] + 0.114 * imageData[i+2];
      }
      const avg = total / (imageData.length / 4);
      resolve(avg < 128 ? 'light' : 'dark');
    };
    img.onerror = function() {
      resolve('dark');
    };
  });
}
