import template from "./profile-app.html!text";
import ko from "knockout";

class ProfileViewModel {
	constructor() {
		this.username = "John White";
	}
}

export default {
	viewModel: ProfileViewModel, 
	template
}