import template from "./profile-page.html!text";
import ko from "knockout";

class ProfileViewModel {
	constructor(params) {
		this.name = params.name;
		this.username = this.name;
	}
}

export default {
	viewModel: ProfileViewModel, 
	template
}