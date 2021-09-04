import {paths} from '../paths.js';
import pkg from 'gulp';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import imageminSvgo from 'imagemin-svgo';
import svgstore from 'gulp-svgstore';

const {source} = paths;
const {src, dest} = pkg;

export const icons = (done) => {
  const svgoPlugins = [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: {
            active: false,
          },
          removeAttrs: {
            attrs: '(stroke|fill)',
          },
          cleanupNumericValues: {
            floatPrecision: 1,
          }
        },
      },
    },
  ];

  const pluginsImagemin = [imageminSvgo({ plugins: svgoPlugins })];

  src(`${source.images.icons}**/*.svg`)
    .pipe(imagemin(pluginsImagemin))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(source.images.all));

  done();
};
