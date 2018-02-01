import Router from './router.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
let r = new Router();
console.log('page is loading');
r.createRoute({
	key: 'default',
	title: 'Home',
	path: ''
});

r.createRoute({
  key: 'who',
  title: 'Who',
  path: 'who'
});

r.createRoute({
  key: 'what',
  title: 'What',
  path: 'what'
});

r.createRoute({
  key: 'where',
  title: 'Where',
  path: 'where'
});

r.detectRoute();

