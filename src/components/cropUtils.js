// cropUtils.js
export const getCroppedImg = (imageSrc, pixelCrop) => {
  const image = new Image();
  image.src = imageSrc;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Canvas is empty');
        return;
      }
      blob.name = 'cropped.jpg';
      resolve(URL.createObjectURL(blob));
    }, 'image/jpeg');
  });
};
