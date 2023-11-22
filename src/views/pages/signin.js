import App from "./../../App";
import { html, render } from "lit-html";
import { anchorRoute, gotoRoute } from "./../../Router";
import Auth from "../../services/Auth";
import Utils from "./../../Utils";

class SignInView {
  init() {
    console.log("SignInView.init");
    document.title = "Sign In";
    this.render();
    Utils.pageIntroAnim();
  }

  async signInSubmitHandler(e) {
    e.preventDefault();
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");
    // Wait for controls to be defined before attaching form listeners
    await Promise.all([
      customElements.whenDefined("sl-button"),
      customElements.whenDefined("sl-input"),
    ]).then(() => {
      const form = document.querySelector("#form-signin");
      const formData = new FormData(form);

      // logging data for testing
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
      }

      // sign in using Auth
      Auth.signIn(formData, () => {
        submitBtn.removeAttribute("loading");
      });
    });
  }

  render() {
    const template = html`   
    <paw-header title="Select user type"></paw-header>   
      <div class="login-page">  
        <div class="paw-main"></div>
        <div id="paw-1" class="paw-div"></div>
        <div id="paw-2" class="paw-div"></div>
        <div id="paw-3" class="paw-div"></div>
        <div id="paw-4" class="paw-div"></div>
        <div class="paw-top-right"></div>
        <div class="overlay"></div>
          <form id="form-signin" @submit=${this.signInSubmitHandler}>  
            <div class="signin-input">
              <sl-input label="Email" name="email" type="email" placeholder="Email" required/>
            </div>
            <div class="signin-input">
              <sl-input label="Password" name="password" type="password" placeholder="Password" required toggle-password />
            </div>
            <sl-button class="submit-btn" variant="default" type="submit">Sign In</sl-button>
          </form>
          <p>Don't have an account? <a href="/signup" @click=${anchorRoute}>Sign Up</a></p>
        </div>
      </div>
      <!-- Soft fade in animation -->
      <div class="page-animation blue"></div>
    `;
    render(template, App.rootEl);
  }
}

export default new SignInView();
