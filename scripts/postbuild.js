import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const indexHtmlPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexHtmlPath)) {
  // 1. Ensure dist/plumbing-services/index.html exists so Vercel CDN serves it directly as static file
  const plumbingDir = path.join(distDir, 'plumbing-services');
  fs.mkdirSync(plumbingDir, { recursive: true });
  fs.copyFileSync(indexHtmlPath, path.join(plumbingDir, 'index.html'));
  console.log('✓ Successfully created dist/plumbing-services/index.html');

  // 2. Generate 404.html and 200.html for any SPA CDN fallback
  fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));
  fs.copyFileSync(indexHtmlPath, path.join(distDir, '200.html'));
  console.log('✓ Successfully created dist/404.html and dist/200.html');
} else {
  console.error('Error: dist/index.html does not exist to copy.');
  process.exit(1);
}
