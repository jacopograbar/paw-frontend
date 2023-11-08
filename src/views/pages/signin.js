import App from "./../../App";
import { html, render } from "lit-html";
import { anchorRoute, gotoRoute } from "./../../Router";
import Auth from "./../../Auth";
import Utils from "./../../Utils";

class SignInView {
  init() {
    console.log("SignInView.init");
    document.title = "Sign In";
    this.render();
    Utils.pageIntroAnim();
  }

  signInSubmitHandler(e) {
    e.preventDefault();
    const formData = e.detail.formData;
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");

    // sign in using Auth
    Auth.signIn(formData, () => {
      submitBtn.removeAttribute("loading");
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
          <sl-form id="form-signin" @sl-submit=${this.signInSubmitHandler}>  
            <div class="signin-input">
              <sl-input label="Email" name="email" type="email" placeholder="Email" required/>
            </div>
            <div class="signin-input">
              <sl-input label="Password" name="password" type="password" placeholder="Password" required toggle-password />
            </div>
            <sl-button class="submit-btn" type="default" submit>Sign In</sl-button>
          </sl-form>
          <p>Don't have an account? <a href="/signup" @click=${anchorRoute}>Sign Up</a></p>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new SignInView();
