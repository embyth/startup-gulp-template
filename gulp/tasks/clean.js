import {paths} from '../paths.js';
import del from 'del';

export const clean = () => del(paths.destination.root);
