import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../Images');
const DEST_DIR = path.join(__dirname, '../public/images');
const DATA_FILE = path.join(__dirname, '../src/data/photos.js');

const categories = ['Portrait', 'Automobile', 'Architecture'];

async function processImages() {
    console.log('Starting image optimization...');

    // Ensure destination exists
    if (!fs.existsSync(DEST_DIR)) {
        fs.mkdirSync(DEST_DIR, { recursive: true });
    }

    const photos = [];

    for (const category of categories) {
        const srcCategoryDir = path.join(SOURCE_DIR, category);
        const destCategoryDir = path.join(DEST_DIR, category);

        if (!fs.existsSync(srcCategoryDir)) {
            console.warn(`Warning: Source category directory not found: ${srcCategoryDir}`);
            continue;
        }

        if (!fs.existsSync(destCategoryDir)) {
            fs.mkdirSync(destCategoryDir, { recursive: true });
        }

        const files = fs.readdirSync(srcCategoryDir);

        for (const file of files) {
            if (!file.match(/\.(jpg|jpeg|png|JPG|PNG)$/)) continue;

            const srcPath = path.join(srcCategoryDir, file);
            const fileName = path.parse(file).name;
            const destFileName = `${fileName.replace(/\s+/g, '_')}.webp`;
            const destPath = path.join(destCategoryDir, destFileName);

            // Convert to WebP
            try {
                await sharp(srcPath)
                    .webp({ quality: 80 })
                    .toFile(destPath);

                console.log(`Converted: ${category}/${file} -> ${destFileName}`);

                photos.push({
                    src: `/images/${category}/${destFileName}`,
                    category: category === 'Automobile' ? 'Sport Automobile' : category // Map specific names if needed
                });

            } catch (err) {
                console.error(`Error processing ${srcPath}:`, err);
            }
        }
    }

    // Generate photos.js
    const fileContent = `export const photos = ${JSON.stringify(photos, null, 2)};\n\nexport const categories = ['Tous', 'Portrait', 'Sport Automobile', 'Architecture'];\n`;

    fs.writeFileSync(DATA_FILE, fileContent);
    console.log(`Generated ${DATA_FILE} with ${photos.length} photos.`);
}

processImages();
