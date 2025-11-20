const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Images to optimize (large images only)
const imagesToOptimize = [
  'images/main-pic01.jpg',
  'images/main-pic02.jpg',
  'images/main-pic03.png',
  'images/ktx.jpg',
  'images/transportation.jpg',
  'images/HowtoGet.jpg',
  'images/Whoop.png'
];

async function optimizeImage(inputPath) {
  const parsedPath = path.parse(inputPath);
  const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

  try {
    const info = await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = info.size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✓ ${inputPath}`);
    console.log(`  ${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB (${reduction}% reduction)`);

    return { inputPath, outputPath, inputSize, outputSize, reduction };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  const results = [];
  for (const imagePath of imagesToOptimize) {
    const result = await optimizeImage(imagePath);
    if (result) results.push(result);
  }

  console.log('\n📊 Summary:');
  const totalInputSize = results.reduce((sum, r) => sum + r.inputSize, 0);
  const totalOutputSize = results.reduce((sum, r) => sum + r.outputSize, 0);
  const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);

  console.log(`Total: ${(totalInputSize / 1024 / 1024).toFixed(2)}MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Overall reduction: ${totalReduction}%`);
  console.log('\n✨ Optimization complete!');
}

main();
