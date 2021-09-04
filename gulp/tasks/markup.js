import {paths} from '../paths.js';
import pkg from 'gulp';
import changed from 'gulp-changed';
import htmlmin from 'gulp-htmlmin';

const {source, destination} = paths;
const {src, dest} = pkg;

export const markup = () => {
  const htmlminOptions = {
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    removeComments: true
  };

  return src(`${source.root}*.html`)
    .pipe(changed(destination.root))
    .pipe(htmlmin(htmlminOptions))
    .pipe(dest(destination.root));
};
