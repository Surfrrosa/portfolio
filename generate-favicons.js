const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const log = (...args) => process.stdout.write(args.join(' ') + '\n')

const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function resizeToFile(source, outputPath, size) {
  await sharp(source)
    .resize(size, size, { fit: 'cover', position: 'center' })
    .png({ quality: 90 })
    .toFile(outputPath);
}

function logGeneratedFiles(publicDir) {
  log('\nAll favicons generated successfully!');
  log('Files created in public/ directory:');

  const files = ['favicon.ico', ...FAVICON_SIZES.map(f => f.name)];
  for (const file of files) {
    const filePath = path.join(publicDir, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      log(`  - ${file} (${Math.round(stats.size / 1024)}KB)`);
    }
  }
}

async function generateFavicons() {
  const sourceImage = 'new-favicon-source.png';
  const publicDir = 'public';

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  log('Generating favicons from:', sourceImage);

  try {
    for (const favicon of FAVICON_SIZES) {
      const outputPath = path.join(publicDir, favicon.name);
      await resizeToFile(sourceImage, outputPath, favicon.size);
      log(`✓ Generated ${favicon.name} (${favicon.size}x${favicon.size})`);
    }

    await resizeToFile(sourceImage, path.join(publicDir, 'favicon.ico'), 32);
    log('✓ Generated favicon.ico (32x32)');

    logGeneratedFiles(publicDir);
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
