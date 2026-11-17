import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

function scopeCss(inputPath, outputPath, prefix, imageBasePath) {
  let css = fs.readFileSync(inputPath, 'utf8');

  // Replace relative image paths
  css = css.replace(/url\((['"]?)\.\.\/images\//g, `url($1${imageBasePath}/images/`);
  css = css.replace(/url\((['"]?)images\//g, `url($1${imageBasePath}/images/`);

  const root = postcss.parse(css);

  root.walkRules((rule) => {
    // Skip keyframes
    if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name.includes('keyframes')) {
      return;
    }

    rule.selectors = rule.selectors.map((selector) => {
      selector = selector.trim();
      if (selector === ':root' || selector === 'body' || selector === 'html') {
        return prefix;
      }
      if (selector === '*' || selector.startsWith('*::') || selector.startsWith('*[')) {
        return `${prefix} ${selector}`;
      }
      if (selector.startsWith(prefix)) {
        return selector;
      }
      return `${prefix} ${selector}`;
    });
  });

  fs.writeFileSync(outputPath, root.toString(), 'utf8');
  console.log(`Scoped ${inputPath} -> ${outputPath}`);
}

scopeCss(
  path.resolve('src/demos/towing-company/css/style.css'),
  path.resolve('src/demos/towing-company/towing-company.css'),
  '.towing-company-demo',
  '/towing-company'
);

scopeCss(
  path.resolve('src/demos/tree-removal/css/style.css'),
  path.resolve('src/demos/tree-removal/tree-removal.css'),
  '.tree-removal-demo',
  '/tree-removal'
);
