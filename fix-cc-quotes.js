const fs = require('fs');
let html = fs.readFileSync('pgt_website.html', 'utf8');

// The CC init script block starts after the CDN <script> tag and ends at </script>
// Inside it, JS single-quoted strings contain: onclick="navigateTo('privacy')"
// The unescaped ' around privacy/terms breaks the JS string.
// Fix: replace ' with \' around the page names inside the CC block only.

const ccStart = html.indexOf('<script src="https://cdn.jsdelivr.net/npm/vanilla-cookieconsent');
const ccEnd   = html.indexOf('</script>', html.indexOf('CookieConsent.run(')) + '</script>'.length;

let before = html.slice(0, ccStart);
let ccBlock = html.slice(ccStart, ccEnd);
let after   = html.slice(ccEnd);

// Verify we found the right block
console.log('CC block length:', ccBlock.length);
console.log('CC block starts:', ccBlock.substring(0, 60));
console.log('Broken pattern count before fix:', (ccBlock.match(/navigateTo\('privacy'\)/g) || []).length + (ccBlock.match(/navigateTo\('terms'\)/g) || []).length);

// Replace unescaped quotes: navigateTo('privacy') -> navigateTo(\'privacy\')
// The backslash in JS string: '\\' = one backslash, "\\'" = backslash + apostrophe
ccBlock = ccBlock.split("navigateTo('privacy')").join("navigateTo(\\'privacy\\')");
ccBlock = ccBlock.split("navigateTo('terms')").join("navigateTo(\\'terms\\')");

console.log('Broken pattern count after fix:', (ccBlock.match(/navigateTo\('privacy'\)/g) || []).length + (ccBlock.match(/navigateTo\('terms'\)/g) || []).length);
console.log('Fixed pattern count:', (ccBlock.match(/navigateTo\(\\'privacy\\'\)/g) || []).length + (ccBlock.match(/navigateTo\(\\'terms\\'\)/g) || []).length);

// Show a sample of the fix
const sampleIdx = ccBlock.indexOf("navigateTo(\\'privacy\\'");
console.log('Sample of fix:', ccBlock.substring(sampleIdx - 20, sampleIdx + 30));

html = before + ccBlock + after;
fs.writeFileSync('pgt_website.html', html);
console.log('Done. File size:', fs.statSync('pgt_website.html').size);
