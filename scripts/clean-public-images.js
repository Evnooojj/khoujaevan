import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_IMAGES_DIR = path.join(__dirname, '../public/images');

function cleanDirectory(directory) {
    if (!fs.existsSync(directory)) {
        console.log(`Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            cleanDirectory(fullPath);
        } else {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                try {
                    fs.unlinkSync(fullPath);
                    console.log(`Deleted: ${fullPath}`);
                } catch (err) {
                    console.error(`Error deleting ${fullPath}:`, err);
                }
            }
        }
    }
}

console.log('Starting cleanup of public/images...');
cleanDirectory(PUBLIC_IMAGES_DIR);
console.log('Cleanup complete.');
