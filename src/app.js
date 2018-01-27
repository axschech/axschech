import {Router} from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

let r = new Router(),
    titleWords = Array.from(document.getElementsByClassName('title-word')),
    contentItems = Array.from(document.querySelectorAll('.hidden > div'));

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
console.log(r.routes);
r.detectRoute();

