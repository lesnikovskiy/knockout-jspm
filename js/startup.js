import ko from "knockout";
import {Router} from "js/Router";
import NavBarComponent from "js/components/nav-bar/nav-bar";
import HomePageComponent from "js/components/home-page/home-page";
import ProfilePageComponent from "js/components/profile-page/profile-page";
import AboutPageComponent from "js/components/about-page/about-page";

export class Startup {
	constructor() {
		ko.components.register("nav-bar", NavBarComponent);
		ko.components.register("home-page", HomePageComponent);
		ko.components.register("profile-page", ProfilePageComponent);
		ko.components.register("about-page", AboutPageComponent);

		this.router = new Router([
			{url: "", params: {page: "home-page"}},
			{url: "profile/{name}", params: {page: "profile-page"}},
			{url: "about", params: {page: "about-page"}}
		]);


		ko.applyBindings({route: this.router.currentRoute});
	}
}