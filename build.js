// Vercel build script — substitutes env vars into the HTML before serving.
// Set SUPABASE_URL, SUPABASE_KEY, and GARDEN_PASSWORD_HASH in your Vercel
// project's Environment Variables.
const fs = require('fs');

const url  = process.env.SUPABASE_URL         || '';
const key  = process.env.SUPABASE_KEY         || '';
const hash = process.env.GARDEN_PASSWORD_HASH || '';

if (!url || !key) {
  console.warn('⚠️  SUPABASE_URL or SUPABASE_KEY is not set. The app will show the setup screen.');
}
if (!hash) {
  console.warn('⚠️  GARDEN_PASSWORD_HASH is not set. The app will run without a password gate.');
}

let html = fs.readFileSync('garden-manager.html', 'utf8');
html = html.replace("const BAKED_URL  = '';",  `const BAKED_URL  = '${url}';`);
html = html.replace("const BAKED_KEY  = '';",  `const BAKED_KEY  = '${key}';`);
html = html.replace("const BAKED_HASH = '';",  `const BAKED_HASH = '${hash}';`);

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('✅ Built dist/index.html with credentials injected.');
