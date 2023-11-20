// import views
import homeView from "./views/pages/home";
import fourOFourView from "./views/pages/404";
import signinView from "./views/pages/signin";
import signupFirstView from "./views/pages/signupFirst";
import shelterDashboardView from "./views/pages/shelterDashboard";
import seekerDashboardView from "./views/pages/seekerDashboard";
import signupShelterView from "./views/pages/signupShelter";
import signupSeekerView from "./views/pages/signupSeeker";
import guideView from "./views/pages/guide";
import shelterPageView from "./views/pages/shelterPage";
import petView from "./views/pages/pet";
import myApplicationsView from "./views/pages/myApplications";
import ApplicationPageView from "./views/pages/applicationPage";

// define routes
const routes = {
  "/": homeView,
  404: fourOFourView,
  "/login": signinView,
  "/signup": signupFirstView,
  "/signup/shelter": signupShelterView,
  "/signup/seeker": signupSeekerView,
  "/guide": guideView,
  "/dashboard/shelter": shelterDashboardView,
  "/dashboard/seeker": seekerDashboardView,
  "/my-applications": myApplicationsView,
};

class Router {
  constructor() {
    this.routes = routes;
  }

  init() {
    // initial call
    this.route(window.location.pathname);

    // on back/forward
    window.addEventListener("popstate", () => {
      this.route(window.location.pathname);
    });
  }

  route(fullPathname) {
    // extract path without params
    const pathname = fullPathname.split("?")[0];
    const route = this.routes[pathname];

    if (route) {
      // if route exists, run init() of the view
      this.routes[window.location.pathname].init();
    } else if (
      pathname.split("/")[1] === "pet" &&
      pathname.split("/")[2] &&
      !pathname.split("/")[3]
    ) {
      // special handling for pet view routing
      petView.init();
    } else if (
      pathname.split("/")[1] === "shelter" &&
      pathname.split("/")[2] &&
      !pathname.split("/")[3]
    ) {
      // special handling for shelter view routing
      shelterPageView.init();
    } else if (
      pathname.split("/")[1] === "application" &&
      pathname.split("/")[2] &&
      !pathname.split("/")[3]
    ) {
      // special handling for shelter view routing
      ApplicationPageView.init();
    }else {
      // show 404 view instead
      this.routes["404"].init();
    }
  }

  gotoRoute(pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    this.route(pathname);
  }
}

// create appRouter instance and export
const AppRouter = new Router();
export default AppRouter;

// programmatically load any route
export function gotoRoute(pathname) {
  AppRouter.gotoRoute(pathname);
}

// allows anchor <a> links to load routes
export function anchorRoute(e) {
  e.preventDefault();
  const pathname = e.target.closest("a").pathname;
  AppRouter.gotoRoute(pathname);
}
