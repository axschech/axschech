class Renderer {
	constructor() {
		this.routesEl = document.querySelectorAll('[data-route]');
        this.routesGoEl = document.querySelectorAll('[data-go]');
	}

    showRoute(routeKey) {
        this.hideRoutes();
        document.querySelector(
            '[data-route=' + routeKey + ']'
        ).style.display = 'block';
    }

    hideRoutes() {
        this.routesEl.forEach(function (element) {
            element.style.display = 'none';
        });
    }
};

export default Renderer;