import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const indexHtmlPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexHtmlPath)) {
  const routes = [
    'plumbing-services',
    'auto-repair',
    'contractor',
    'general-contractor',
    'dental-care',
    'personal-injury',
  ];

  // 1. Ensure static index.html exists for every demo route so Vercel CDN immediately serves them with 200 OK
  for (const route of routes) {
    const routeDir = path.join(distDir, route);
    fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexHtmlPath, path.join(routeDir, 'index.html'));
    console.log(`✓ Successfully created dist/${route}/index.html`);
  }

  // 2. Generate 404.html and 200.html for edge host fallbacks
  fs.copyFileSync(indexHtmlPath, path.join(distDir, '404.html'));
  fs.copyFileSync(indexHtmlPath, path.join(distDir, '200.html'));
  console.log('✓ Successfully created dist/404.html and dist/200.html');
} else {
  console.error('Error: dist/index.html does not exist to copy.');
  process.exit(1);
}
