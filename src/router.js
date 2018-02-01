import Renderer from './renderer.js';
import Transport from './transport.js';
import Route from './route.js';

class Router {
	constructor() {
		this.renderer = new Renderer();
		this.transport = new Transport(this);
		this.renderer.hideRoutes();
		this.routes = [];
	}

	createRoute(config) {
		let routeObj = new Route(config),
			renderer = this.renderer;

		routeObj.showRoute = function () {
			renderer.showRoute(routeObj.key);
		};

		if (!this.getRoute(routeObj.key)) {
			this.routes.push(routeObj);
			return true;
		}

		return false;
	}

	getRoute(value, property) {
		if (!property) {
			property = 'key';
		}
		return this.routes.find(item => {
			return item[property] === value;
		});
	}

	setRoute(routeKey) {
		let route = this.getRoute(routeKey);
		this.setUrlPath(route);
		return route;
	}

	setUrlPath(route) {
		if (route.title) {
			document.title = route.title;
		}
		route.showRoute();
		window.history.pushState({},"", route.path || '/');
	}

	detectRoute() {
		let path = location.pathname.substring(1),
			routeObj = this.getRoute(path, 'path');

		if (routeObj) {
			this.setRoute(routeObj.key);
		}
	}
}

export default Router;