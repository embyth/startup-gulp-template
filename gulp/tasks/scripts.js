import {paths} from '../paths.js';
import pkg from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackConfig from '../../webpack.config.js';

const {source, destination} = paths;
const {src, dest} = pkg;
const isDev = !process.env.NODE_ENV;

webpackConfig.mode = isDev ? `development` : `production`;
webpackConfig.devtool = isDev ? `source-map` : false;

export const scripts = () =>
  src(`${source.scripts}/main.js`)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(destination.scripts));
