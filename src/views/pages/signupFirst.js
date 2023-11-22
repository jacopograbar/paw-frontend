import App from "../../App";
import { html, render } from "lit-html";
import { anchorRoute } from "../../Router";
import Utils from "../../Utils";

class SignUpFirstView {
  init() {
    console.log("SignUpView.init");
    document.title = "Sign In";
    this.render();
    Utils.slideAnimFromLeft();
    Utils.slideAnimFromRight();
  }

  render() {
    const template = html`
      <paw-header title="Select user type"></paw-header>
      <div class="signup-page">
        <div class="paw-main"></div>
        <div id="paw-1" class="paw-div"></div>
        <div id="paw-2" class="paw-div"></div>
        <div id="paw-3" class="paw-div"></div>
        <div id="paw-4" class="paw-div"></div>
        <div class="paw-top-right"></div>
        <div class="overlay">
          <h1>I want to...</h1>
          <div class="picker-container">
            <a href="/signup/shelter" @click=${anchorRoute}>
              <div class="user-type-picker slide-left" id="shelter">
                <h2>List</h2>
                <img src="../images/pet-shelter-white.png" />
              </div>
            </a>
            <a href="/signup/seeker" @click=${anchorRoute}>
              <div class="user-type-picker slide-right" id="seeker">
                <h2>Adopt</h2>
                <img src="../images/pawprint.png" />
              </div>
            </a>
          </div>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new SignUpFirstView();
