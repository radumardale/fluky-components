var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var parse = require('react-docgen').parse;
var chokidar = require('chokidar');

var paths = {
  atoms: {
    components: path.join(__dirname, '../src', 'components', 'atoms'),
    examples: path.join(__dirname, '../src', 'doc', 'examples', 'atoms'),
    output: path.join(__dirname, '../config', 'atomsData.js'),
  },
  molecules: {
    components: path.join(__dirname, '../src', 'components', 'molecules'),
    examples: path.join(__dirname, '../src', 'doc', 'examples', 'molecules'),
    output: path.join(__dirname, '../config', 'moleculesData.js'),
  }
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
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.atoms.examples, paths.atoms.components]).on('change', function(event, path) {
    generateCategory(paths.atoms);
  });
  chokidar.watch([paths.molecules.examples, paths.molecules.components]).on('change', function(event, path) {
    generateCategory(paths.molecules);
  });
} else {
  // Generate component metadata
  runAllCategories(paths);
}

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