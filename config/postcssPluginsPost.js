// Function returning PostCSS plugins that shuold be run on each output chunk
// (*after* CSS Modules), e.g. minifier, prefixer, polyfils.

const autoprefixer = require('autoprefixer');
const nano = require('cssnano');

module.exports = function({mode}) {
  const isProduction = mode === 'production';

  return [autoprefixer, isProduction && nano].filter(Boolean);
};
