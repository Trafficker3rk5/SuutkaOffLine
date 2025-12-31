const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/products');
const outputDir = path.join(__dirname, '../public/products/optimized');

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir).filter(file =>
    file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
  );

  console.log(`🖼️  Optimizando ${files.length} imágenes...\n`);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;

    // Convertir a WebP (mejor compresión)
    const webpPath = path.join(outputDir, `${fileName}.webp`);

    // Crear versión optimizada en PNG
    const pngPath = path.join(outputDir, `${fileName}.png`);

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSizeKB = (inputStats.size / 1024).toFixed(2);

      // Generar WebP optimizado
      await sharp(inputPath)
        .resize(800, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 85 })
        .toFile(webpPath);

      // Generar PNG optimizado
      await sharp(inputPath)
        .resize(800, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(pngPath);

      const webpStats = fs.statSync(webpPath);
      const pngStats = fs.statSync(pngPath);
      const webpSizeKB = (webpStats.size / 1024).toFixed(2);
      const pngSizeKB = (pngStats.size / 1024).toFixed(2);

      const webpReduction = ((1 - webpStats.size / inputStats.size) * 100).toFixed(1);
      const pngReduction = ((1 - pngStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   Original: ${inputSizeKB} KB`);
      console.log(`   WebP: ${webpSizeKB} KB (-${webpReduction}%)`);
      console.log(`   PNG: ${pngSizeKB} KB (-${pngReduction}%)`);
      console.log('');

    } catch (error) {
      console.error(`❌ Error al optimizar ${file}:`, error.message);
    }
  }

  console.log('✨ Optimización completada!');
}

optimizeImages();
