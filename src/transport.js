class Transport {
	constructor(router) {
		router.renderer.routesGoEl.forEach(function (element) {
			element.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
			
				router.setRoute(e.target.dataset.go);
			});
		});
	}
}

export default Transport;