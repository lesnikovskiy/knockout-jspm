import template from "./nav-bar.html!text";
import ko from "knockout";

class NavBarViewModel {
	constructor(params) {
		this.route = params.route;
	}
}

export default {
	viewModel: NavBarViewModel,
	template
}