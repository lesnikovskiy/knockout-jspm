import template from "./profile-page.html!text";
import ko from "knockout";

class ProfileViewModel {
	constructor(params) {
		this.firstName = ko.observable();
		this.lastName = ko.observable();

		this.fetchProfile(params.userId).then(data => {
			this.firstName(data.firstName);
			this.lastName(data.lastName);
		});
	}

	fetchProfile() {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "Bearer 9846513516546543213");

		return new Promise((resolve, reject) => {
			fetch("/api/users/fake", {
				method: "GET",
				headers: myHeaders,
				cache: "default",
				mode: "cors"
			}).then(response => {
				response.json().then(data => resolve(data));
			}).catch(err => reject(err));
		});
	}
}

export default {
	viewModel: ProfileViewModel,
	template
}