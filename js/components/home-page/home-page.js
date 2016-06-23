import template from "./home-page.html!text";
import ko from "knockout";

class HomeViewModel {
	constructor(route) {
		this.message = ko.observable("Welcome to TV Guide");
	}

	doSomething() {
		this.message("You invoked doSomething() on the viewmodel.")
	}
}

export default {
	viewModel: HomeViewModel,
	template
}