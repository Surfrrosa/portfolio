const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const sourceImage = 'new-favicon-source.png';
  const publicDir = 'public';
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const faviconSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' }
  ];
  
  console.log('Generating favicons from:', sourceImage);
  
  try {
    for (const favicon of faviconSizes) {
      const outputPath = path.join(publicDir, favicon.name);
      await sharp(sourceImage)
        .resize(favicon.size, favicon.size, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✓ Generated ${favicon.name} (${favicon.size}x${favicon.size})`);
    }
    
    const icoPath = path.join(publicDir, 'favicon.ico');
    await sharp(sourceImage)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(icoPath);
    
    console.log('✓ Generated favicon.ico (32x32)');
    
    console.log('\nAll favicons generated successfully!');
    console.log('Files created in public/ directory:');
    
    const generatedFiles = [
      'favicon.ico',
      ...faviconSizes.map(f => f.name)
    ];
    
    generatedFiles.forEach(file => {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        console.log(`  - ${file} (${Math.round(stats.size / 1024)}KB)`);
      }
    });
    
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
