const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'clients');
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;
    if (file.includes('_transparent')) continue;
    
    console.log(`Processing ${file}...`);
    try {
      const image = await Jimp.read(path.join(dir, file));
      
      image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const red = this.bitmap.data[idx + 0];
        const green = this.bitmap.data[idx + 1];
        const blue = this.bitmap.data[idx + 2];

        // Threshold for white background
        if (red > 235 && green > 235 && blue > 235) {
          this.bitmap.data[idx + 3] = 0; // Alpha
        }
      });

      const outName = file.split('.')[0] + '_transparent.png';
      await image.writeAsync(path.join(dir, outName));
      console.log(`Saved ${outName}`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
