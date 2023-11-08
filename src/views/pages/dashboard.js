import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class DashboardView {
  init() {
    document.title = "Dashboard";
    // dummy access level set to 1 for shelter view rendering
    this.accessLevel = 1;
    this.render();
    Utils.pageIntroAnim();
  }

  render() {
    const template = html`
      <paw-header title="Dashboard"></paw-header>
      <div
        class=${this.accessLevel === 1
          ? "shelter dashboard-view"
          : "seeker dashboard-view"}
      >
        <section class="dashboard-section"></section>
        <section class="dashboard-section dashboard-second"></section>
        <section class="dashboard-section dashboard-third"></section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new DashboardView();
