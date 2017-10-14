const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const rimraf = require('rimraf');

// var parse = require('react-docgen').parse;
// var chokidar = require('chokidar');

const R = require('ramda');

var paths = {
  iconComponentSeed: path.join(__dirname, '../src', 'iconsSeeds', 'Icon', 'Icon.jsx'),
  svgPathsFolder: path.join(__dirname, '../src', 'iconsSeeds', 'paths'),
  outputFolder: path.join(__dirname, '../src', 'components', 'icons')
};

// properCase :: String -> String
const properCase = R.compose(R.join(''), R.over(R.lensIndex(0), R.toUpper), R.split(''))

// properCase :: String -> String
const toComponentName = R.pipe(
  R.split('.'),
  R.head,
  R.split('-'),
  R.map(properCase),
  R.join('')
);

const cleanUp = paths => {
  rimraf.sync(paths.outputFolder);
  return fs.mkdirSync(paths.outputFolder);
}

const buildIndex = componentName => `export {default} from './${componentName}';
`;

const generateAllIcons = paths => {

  cleanUp(paths);
  const iconTemplate = fs.readFileSync(paths.iconComponentSeed).toString();
  const icons = fs.readdirSync(paths.svgPathsFolder).map(svgPathName => {
    let componentName = toComponentName(svgPathName);
    componentName = componentName === 'React' ? 'ReactIcon' : componentName;
    const svgPath = fs.readFileSync(path.join(paths.svgPathsFolder, svgPathName)).toString();

    const newIconFolder = path.join(paths.outputFolder, componentName);
    const newIconComponentFile = path.join(newIconFolder, `${componentName}.jsx`);
    const newIconComponentIndex = path.join(newIconFolder, 'index.js');
    fs.mkdirSync(newIconFolder);
    const component = iconTemplate
      .replace(/Icon/g, componentName)
      .replace(/{flunky-componentPath}/g, svgPath);
    fs.writeFileSync(newIconComponentFile, component);
    fs.writeFileSync(newIconComponentIndex, buildIndex(componentName));
    return componentName;
  });

  const grandIndex = path.join(paths.outputFolder, 'index.js');
  const grandIndexContent = icons
    .map(icon => `export {default as ${icon}} from './${icon}';`)
    .join('\n');
  fs.writeFileSync(grandIndex, grandIndexContent);
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // // Regenerate component metadata when components or examples change.
  // chokidar.watch([paths.atoms.examples, paths.atoms.components]).on('change', function(event, path) {
  //   generateCategory(paths.atoms);
  // });
} else {
  generateAllIcons(paths);
}
