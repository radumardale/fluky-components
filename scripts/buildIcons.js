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

const generateAllIcons = paths => {

  cleanUp(paths);

  const iconTemplate = fs.readFileSync(paths.iconComponentSeed).toString();

  const svgPaths = fs.readdirSync(paths.svgPathsFolder).map(svgPathName => {
    const componentName = toComponentName(svgPathName);
    const svgPath = fs.readFileSync(path.join(paths.svgPathsFolder, svgPathName)).toString();

    console.log(svgPathName, ' - ', componentName);
    const newIconFolder = path.join(paths.outputFolder, componentName);
    const newIconComponentFile = path.join(newIconFolder, `${componentName}.jsx`);
    const newIconComponentIndex = path.join(newIconFolder, 'index.js');
    console.log(newIconFolder);
    if (fs.mkdirSync(newIconFolder)) {
      const component = iconTemplate
        .replace(/Icon/g, componentName)
        .replace(/flunky-componentPath/g, svgPath);
      fs.writeFileSync(newIconComponentFile, 'miau');
    }
    return true;
  })
  // read template
  // each path - create folder
  //    create index
  //    add to grandIndex
  // write grandIndex

};


const generateCategory = (options) => {
  const errors = [];
  const componentData = getDirectories(options.components).map(componentName => {
    try {
      return getComponentData(options.components, componentName);
    } catch(error) {
      errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
    }
  });
  writeFile(options.output, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentData));
};

const runAllCategories = (paths) => {
  generateCategory(paths.atoms);
  generateCategory(paths.molecules);
};

const enableWatchMode = process.argv.slice(2) == '--watch';
if (enableWatchMode) {
  // // Regenerate component metadata when components or examples change.
  // chokidar.watch([paths.atoms.examples, paths.atoms.components]).on('change', function(event, path) {
  //   generateCategory(paths.atoms);
  // });
  // chokidar.watch([paths.molecules.examples, paths.molecules.components]).on('change', function(event, path) {
  //   generateCategory(paths.molecules);
  // });
} else {
  // Generate component metadata
  generateAllIcons(paths);
}

// function generate(paths) {
//   var errors = [];
//   var componentData = getDirectories(paths.components).map(function(componentName) {
//     try {
//       return getComponentData(paths, componentName);
//     } catch(error) {
//       errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
//     }
//   });
//   writeFile(paths.output, "module.exports = /* eslint-disable */ " + JSON.stringify(errors.length ? errors : componentData));
// }

function getComponentData(componentPath, componentName) {
  const content = readFile(path.join(componentPath, componentName, componentName + '.jsx'));
  const info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(paths.examples, componentName)
  }
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(examplesPath, componentName);
  return examples.map(function(file) {
    var filePath = path.join(examplesPath, componentName, file);
    var content = readFile(filePath);
    var info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -4),
      description: info.description,
      code: content
    };
  });
}

function getExampleFiles(examplesPath, componentName) {
  var exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch(error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getDirectories(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isDirectory();
  });
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(function(file) {
    return fs.statSync(path.join(filepath, file)).isFile();
  });
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, function (err) {
    err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}