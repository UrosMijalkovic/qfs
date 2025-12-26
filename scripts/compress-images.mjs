import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_DIR = './public';
const TEAM_DIR = './public/team';

// Configuration
const JPEG_QUALITY = 80;
const MAX_WIDTH = 1920; // Max width for hero/large images
const TEAM_MAX_WIDTH = 600; // Smaller for team photos

async function getImageFiles(dir) {
  const files = await readdir(dir);
  return files.filter(file =>
    ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase())
  );
}

async function compressImage(inputPath, maxWidth, quality = JPEG_QUALITY) {
  const originalStats = await stat(inputPath);
  const originalSize = originalStats.size;

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  let pipeline = image;

  // Resize if wider than max
  if (metadata.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, {
      withoutEnlargement: true,
      fit: 'inside'
    });
  }

  const ext = extname(inputPath).toLowerCase();

  if (ext === '.png') {
    // Keep PNG for logos, just optimize
    pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  } else {
    // Convert to optimized JPEG
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  }

  const buffer = await pipeline.toBuffer();

  // Only save if smaller
  if (buffer.length < originalSize) {
    await sharp(buffer).toFile(inputPath);
    const savings = ((originalSize - buffer.length) / originalSize * 100).toFixed(1);
    console.log(`✓ ${basename(inputPath)}: ${formatSize(originalSize)} → ${formatSize(buffer.length)} (${savings}% saved)`);
    return { original: originalSize, compressed: buffer.length };
  } else {
    console.log(`○ ${basename(inputPath)}: Already optimized (${formatSize(originalSize)})`);
    return { original: originalSize, compressed: originalSize };
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(2) + 'MB';
}

async function main() {
  let totalOriginal = 0;
  let totalCompressed = 0;

  console.log('\n📷 Compressing public folder images...\n');

  // Compress public folder images (hero images, insights, etc.)
  const publicImages = await getImageFiles(PUBLIC_DIR);
  for (const file of publicImages) {
    const result = await compressImage(join(PUBLIC_DIR, file), MAX_WIDTH);
    totalOriginal += result.original;
    totalCompressed += result.compressed;
  }

  console.log('\n👥 Compressing team folder images...\n');

  // Compress team photos (smaller size needed)
  const teamImages = await getImageFiles(TEAM_DIR);
  for (const file of teamImages) {
    const result = await compressImage(join(TEAM_DIR, file), TEAM_MAX_WIDTH);
    totalOriginal += result.original;
    totalCompressed += result.compressed;
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 Total: ${formatSize(totalOriginal)} → ${formatSize(totalCompressed)}`);
  console.log(`💾 Saved: ${formatSize(totalOriginal - totalCompressed)} (${((totalOriginal - totalCompressed) / totalOriginal * 100).toFixed(1)}%)`);
  console.log('='.repeat(50) + '\n');
}

main().catch(console.error);
