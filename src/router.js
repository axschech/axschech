let router,
	route;

class Route {
	constructor(config) {
		this.key = config.key;
		this.title = config.title;
		this.path = config.path;
	};
};

router = class Router {
	constructor(renderer) {
		this.renderer = renderer;
		this.routes = [];
	}

	createRoute(config) {
		let routeObj = new Route(config)

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
		console.log(route);
		if (route.title) {
			document.title = route.title;
		}
		this.renderer.hideTitleWords();
		this.renderer.hideContentItems();
		this.renderer.showContentItem(route.key);
		window.history.pushState({},"", route.path);
	}

	detectRoute() {
		let path = location.pathname.substring(1),
			routeObj = this.getRoute(path, 'path');

		if (routeObj) {
			this.setRoute(routeObj.key);
		}
	}
};

module.exports = {
	Router: router
};