console.log('Checking build environment...');
console.log('Node version:', process.version);
console.log('Process env:', JSON.stringify(process.env, null, 2));
console.log('Working directory:', process.cwd());
console.log('Directory contents:');

const fs = require('fs');
console.log(fs.readdirSync('.').join('\n'));

try {
  const packageJson = require('./package.json');
  console.log('\nPackage.json scripts:', packageJson.scripts);
  console.log('Dependencies:', packageJson.dependencies);
  console.log('DevDependencies:', packageJson.devDependencies);
} catch (e) {
  console.error('Error reading package.json:', e);
}
