class AssetLoader {
  static images = {};
  static promises = [];

  static loadImage(path) {
    if (this.images[path]) {
      return this.images[path];
    }

    let img = new Image();

    let promise = new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    img.src = path;

    this.images[path] = img;
    this.promises.push(promise);

    return img;
  }

  static async waitForAll() {
    await Promise.all(this.promises);
  }
}
