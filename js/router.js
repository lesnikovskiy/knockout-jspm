import knockout from "knockout";
import crossroads from "crossroads";
import hasher from "hasher";

function parseHash(newHash, oldHash) { 
	crossroads.parse(newHash); 
}

export class Router {
	constructor(routes) {
		this.routes = routes;
		this.currentRoute = ko.observable({});

		ko.utils.arrayForEach(this.routes, route => {
			crossroads.addRoute(route.url, requestParams => {
				this.currentRoute(ko.utils.extend(requestParams, route.params));
			});
		});

		this.activateCrossroads();
	}

	activateCrossroads() {
		crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
		hasher.initialized.add(parseHash);
		hasher.changed.add(parseHash);
		hasher.init();
	}
}