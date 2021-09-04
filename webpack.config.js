import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

const __dirname = path.resolve();

export default {
  mode: `development`,
  entry: `./source/js/main.js`,
  output: {
    filename: `bundle.min.js`,
    path: path.join(__dirname, `build/js`),
    publicPath: `./build/`
  },
  devtool: `source-map`,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|gulp)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`]
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
