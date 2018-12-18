const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

module.exports = env => {
  const isProduction = env && env.production;

  return {
    entry: {
      index: path.join(SRC_PATH, 'index.jsx')
    },
    output: {
      path: DIST_PATH,
      filename: '[name]_[hash].js'
    },
    resolve: {
      modules: [SRC_PATH, NODE_MODULES_PATH],
      extensions: ['.js', '.jsx', '.scss']
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name]_[hash].[ext]'
          }
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader'
        },
        {
          test: /\.js|.jsx$/,
          loader: 'babel-loader',
          include: [SRC_PATH, /node_modules\/style-guide/]
        },
        {
          test: /\.scss|.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[local]',
                camelCase: 'only',
                minimize: isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                minimize: isProduction,
                includePaths: [SRC_PATH]
              }
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: DIST_PATH,
      port: 3000
    },
    optimization: {
      minimize: isProduction
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.join(DIST_PATH, 'index.html'),
        template: path.join(SRC_PATH, 'index.html'),
        chunks: ['index', 'subjectIcons']
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(SRC_PATH, 'manifest.template.json'),
          to: path.join(DIST_PATH, 'manifest.json')
        },
        {
          from: path.join(SRC_PATH, 'serviceWorker.js'),
          to: path.join(DIST_PATH, 'serviceWorker.js')
        }
      ]),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].[hash].css'
      }),
      new CleanWebpackPlugin(path.resolve(DIST_PATH, '*'), {
        watch: true
      })
    ]
  };
};
