import {Router} from './router';
import {Renderer} from './renderer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
let ren = new Renderer();
let r = new Router(ren);


r.createRoute({
  key: 'default',
  title: 'Home',
  path: ''
});

r.createRoute({
  key: 'more',
  title: 'henh',
  path: 'test'
});

r.createRoute({
  key: 'ohno',
  title: 'wah',
  path: 'wat'
});

r.detectRoute();

