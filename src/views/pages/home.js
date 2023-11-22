import App from "./../../App";
import { html, render } from "lit-html";
import { gotoRoute } from "./../../Router";
import Utils from "./../../Utils";

class HomeView {
  init() {
    document.title = "Home";
    this.render();
    Utils.pageIntroAnim();
  }

  render() {
    const template = html`
      <paw-header title="Home"></paw-header>
      <div class="landing-page">
        <div class="paw-main"></div>
        <div id="paw-1" class="paw-div"></div>
        <div id="paw-2" class="paw-div"></div>
        <div id="paw-3" class="paw-div"></div>
        <div id="paw-4" class="paw-div"></div>
        <div class="paw-top-right"></div>
        <div class="overlay"></div>
        <div class="landing-buttons">
          <sl-button class="landing-button" @click=${() => gotoRoute("/login")}
            >Login</sl-button
          >
          <sl-button class="landing-button" @click=${() => gotoRoute("/signup")}
            >Sign up</sl-button
          >
        </div>
      </div>
      <!-- Soft fade in animation -->
      <div class="page-animation blue"></div>
    `;
    render(template, App.rootEl);
  }
}

export default new HomeView();
