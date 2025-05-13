// utils/imageBrightness.js
export async function getImageTopBrightness(imgUrl, heightPercent = 0.15) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = imgUrl;
    img.onload = function() {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const regionH = Math.max(1, Math.floor(h * heightPercent));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = regionH;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, regionH, 0, 0, w, regionH);
      const imageData = ctx.getImageData(0, 0, w, regionH).data;
      let total = 0;
      for (let i = 0; i < imageData.length; i += 4) {
        total += 0.299 * imageData[i] + 0.587 * imageData[i+1] + 0.114 * imageData[i+2];
      }
      const avg = total / (imageData.length / 4);
      resolve(avg < 128 ? 'white' : 'black');
    };
    img.onerror = function() {
      resolve('white');
    };
  });
}
