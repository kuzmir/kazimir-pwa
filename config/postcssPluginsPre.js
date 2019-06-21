// Function returning PostCSS plugins that shuold be run on each entry file
// (*before* CSS Modules), e.g. precss: loops, ifs, etc.

module.exports = function() {
  return [require('precss'), require('postcss-modules-values')];
};
