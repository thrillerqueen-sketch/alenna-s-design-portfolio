import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, existsSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const portfolioDir = join(__dirname, '..', 'portfolio_files');

const MAX_DIMENSION = 2000; // max width or height
const QUALITY = 85; // PNG compression quality (0-100)

let totalSaved = 0;
let totalOriginal = 0;
let processedCount = 0;

function getAllPngFiles(dir) {
  let results = [];
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllPngFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function compressImage(filePath) {
  const originalSize = statSync(filePath).size;
  totalOriginal += originalSize;

  const tempPath = filePath.replace(/\.png$/i, '_temp.png');

  try {
    const metadata = await sharp(filePath).metadata();
    const width = metadata.width;
    const height = metadata.height;

    // Calculate new dimensions
    let newWidth, newHeight;
    if (width > height) {
      newWidth = Math.min(width, MAX_DIMENSION);
      newHeight = Math.round((height / width) * newWidth);
    } else {
      newHeight = Math.min(height, MAX_DIMENSION);
      newWidth = Math.round((width / height) * newHeight);
    }

    // Only resize if image is larger than MAX_DIMENSION
    const resizeOptions = (width > MAX_DIMENSION || height > MAX_DIMENSION)
      ? { width: newWidth, height: newHeight, fit: 'inside', withoutEnlargement: true }
      : undefined;

    await sharp(filePath)
      .resize(resizeOptions)
      .png({ quality: QUALITY, compressionLevel: 9, palette: true })
      .toFile(tempPath);

    const newSize = statSync(tempPath).size;
    const saved = originalSize - newSize;
    totalSaved += saved;
    processedCount++;

    const percentReduction = ((saved / originalSize) * 100).toFixed(1);
    const originalMB = (originalSize / (1024 * 1024)).toFixed(2);
    const newMB = (newSize / (1024 * 1024)).toFixed(2);

    console.log(
      `[${processedCount}] ${filePath.replace(portfolioDir, '')}  ` +
      `${originalMB}MB → ${newMB}MB  (-${percentReduction}%)`
    );

    // Replace original with compressed
    const fs = await import('fs');
    fs.renameSync(tempPath, filePath);
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    // Clean up temp file if it exists
    try {
      const fs = await import('fs');
      if (existsSync(tempPath)) fs.unlinkSync(tempPath);
    } catch {}
  }
}

async function main() {
  console.log('🔍 Scanning for PNG files...');
  const files = getAllPngFiles(portfolioDir);
  console.log(`Found ${files.length} PNG files (${(totalOriginal / (1024 * 1024)).toFixed(0)} MB total)\n`);

  // Process sequentially to avoid memory issues
  for (const file of files) {
    await compressImage(file);
  }

  const totalOriginalMB = (totalOriginal / (1024 * 1024)).toFixed(1);
  const totalNewMB = ((totalOriginal - totalSaved) / (1024 * 1024)).toFixed(1);
  const totalSavedMB = (totalSaved / (1024 * 1024)).toFixed(1);
  const percentTotal = ((totalSaved / totalOriginal) * 100).toFixed(1);

  console.log('\n✅ Done!');
  console.log(`   Original: ${totalOriginalMB} MB`);
  console.log(`   New:      ${totalNewMB} MB`);
  console.log(`   Saved:    ${totalSavedMB} MB (${percentTotal}% reduction)`);
}

main().catch(console.error);