import {Router} from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

let r = new Router(),
    buttons = Array.from(document.getElementsByClassName('routes'));

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

buttons.forEach(el => {
  el.addEventListener('click', e => {
      document.querySelector(
        '.hidden'
      ).querySelectorAll('div').forEach(divEl => {
          divEl.style.display = 'none';
      });
      r.setRoute(e.target.dataset.route);
    }, false);
});