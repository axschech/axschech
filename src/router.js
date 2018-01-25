let router = class Router {
	constructor() {
		this.route = '';
	};

	getRoute() {
		return this.route;
	}

	setRoute(route) {
		this.route = route;
		this.setUrlPath(this.route)
		return this.route;
	}

	setUrlPath(url) {
		window.history.pushState({
			"html":'',
			"pageTitle": '',
		},"", url);

	}

	detectRoute() {
		this.setRoute(location.pathname.substring(1));
	}
},
route = class Route {
	constructor(config) {
		this.key = config.key;
		this.title = config.title;	
	}
};


module.exports = {
	Router: router
};