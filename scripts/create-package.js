const fs = require('fs');
const path = require('path');

const buildPath = path.resolve(__dirname, '../build');

const files = ['README.md', 'LICENSE'];
files.forEach((file) => {
  const outputPath = path.resolve(buildPath, file);
  fs.createReadStream(file).pipe(fs.createWriteStream(outputPath));
});

const packageJSON = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const {name, author, version, description, keywords, repository, license, peerDependencies, dependencies} = packageJSON;

const outputPackage = {
  name,
  author,
  version,
  description,
  main: './index.js',
  keywords,
  repository,
  license,
  peerDependencies,
  dependencies
};

const packageData = JSON.stringify(outputPackage, null, 2);
const outputPackageFile = path.resolve(buildPath, 'package.json');
fs.writeFileSync(outputPackageFile, packageData);

console.log('Finished writing files');