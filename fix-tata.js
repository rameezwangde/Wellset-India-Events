const sharp = require('sharp');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'clients');
const file = '2017-logo-Tata-Motors_yrx5s9.jpg';

async function fixTataLogo() {
  const { data, info } = await sharp(path.join(dir, file), { failOn: 'none' })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    if (r > 230 && g > 230 && b > 230) {
      data[i + 3] = 0; // Set alpha to 0
    }
  }

  const outName = '2017-logo-Tata-Motors_yrx5s9_transparent.png';
  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  }).toFile(path.join(dir, outName));
  
  console.log(`Saved ${outName}`);
}

fixTataLogo().catch(console.error);
