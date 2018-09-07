class pixler {
  public async pixelate(source: File | Blob | string, size: number, callback: (result: string) => void) {
    const url = typeof source === 'string' ? source : window.URL.createObjectURL(source);
    size = Math.abs(size); // positive only
    const image = new Image();
    image.src = url;
    image.crossOrigin="anonymous";

    image.onload = () => {
      const origin = {width: image.naturalWidth, height: image.naturalHeight};
      const pixelated = {width: image.naturalWidth / size, height: image.naturalHeight / size};
      const canvas = document.createElement('canvas');
      canvas.width = origin.width;
      canvas.height = origin.height;

      const context = canvas.getContext('2d');
      if (context) {
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.oImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        canvas.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
          'image-rendering: -moz-crisp-edges;' + // FireFox
          'image-rendering: -o-crisp-edges;' +  // Opera
          'image-rendering: -webkit-crisp-edges;' + // Chrome
          'image-rendering: crisp-edges;' + // Chrome
          'image-rendering: -webkit-optimize-contrast;' + // Safari
          'image-rendering: pixelated; ' + // Future browsers
          '-ms-interpolation-mode: nearest-neighbor;'; // IE
        context.drawImage(image, 0, 0, pixelated.width, pixelated.height);
        context.drawImage(canvas, 0, 0, pixelated.width, pixelated.height, 0, 0, origin.width, origin.height);
        callback(canvas.toDataURL('image/png'));
      }
    };
  }
}

export default new pixler();
