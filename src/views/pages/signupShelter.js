import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";

class SignupShelterView {
  init() {
    document.title = "Signup Shelter";
    this.render();
    Utils.pageIntroAnim();
  }

  async submitHandler(event) {
    event.preventDefault();
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");

    // Wait for controls to be defined before attaching form listeners
    await Promise.all([
      customElements.whenDefined("sl-button"),
      customElements.whenDefined("sl-input"),
      customElements.whenDefined("sl-option"),
      customElements.whenDefined("sl-select"),
      customElements.whenDefined("sl-textarea"),
    ]).then(() => {
      const form = document.querySelector(".signup-form");
      const formData = new FormData(form);

      // logging data for testing
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
      }

      // getting arrays
      console.log(formData.getAll("animals"));
      // CAN GET JUST ONE VALUE WITH .GET

      // sign up using Auth
      Auth.signUp(formData, () => {
        submitBtn.removeAttribute("loading");
      });
    });
  }

  render() {
    const template = html`
      <paw-header title="Pet Shelter Signup"></paw-header>
      <div class="signup-page" id="signup-second-page">
        <div class="paw-main"></div>
        <div id="paw-1" class="paw-div"></div>
        <div id="paw-2" class="paw-div"></div>
        <div id="paw-3" class="paw-div"></div>
        <div id="paw-4" class="paw-div"></div>
        <div class="paw-top-right"></div>
        <div class="signup-overlay">
          <h1>Pet Shelter Signup</h1>
          <form class="signup-form" @submit=${this.submitHandler}>
            <input name="accessLevel" value="2" type="hidden" />
            <input name="newUser" value="true" type="hidden" />
            <div class="signup-column">
              <div class="input-group">
                <sl-input
                  label="Shelter Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  required
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                  required
                  toggle-password
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-input
                  label="Repeat Password"
                  name="repeat-password"
                  type="password"
                  placeholder="Type your password again..."
                  required
                  toggle-password
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-select
                  name="animals"
                  label="Our pets are:"
                  placeholder="Select one or more animal type..."
                  multiple
                  clearable
                >
                  <sl-option value="cats">Cats</sl-option>
                  <sl-option value="dogs">Dogs</sl-option>
                </sl-select>
              </div>
            </div>
            <div class="signup-column">
              <div class="input-group">
                <sl-select
                  name="state"
                  label="State"
                  placeholder="Select your state..."
                  clearable
                >
                  <sl-option value="NSW">New South Wales</sl-option>
                  <sl-option value="VIC">Victoria</sl-option>
                  <sl-option value="WA">Western Australia</sl-option>
                  <sl-option value="SA">South Australia</sl-option>
                  <sl-option value="QLD">Queensland</sl-option>
                  <sl-option value="NT">Northern Territory</sl-option>
                  <sl-option value="ACT"
                    >Australian Capital Territory</sl-option
                  >
                  <sl-option value="TAS">Tasmania</sl-option>
                </sl-select>
              </div>
              <div class="input-group">
                <sl-input
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Enter your address..."
                  required
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-textarea
                  name="bio"
                  rows="5"
                  resize="none"
                  placeholder="Write something about your organisation..."
                  label="About Us"
                ></sl-textarea>
              </div>
              <div class="signup-submit-area">
                <sl-button type="submit" variant="primary" class="submit-btn"
                  >Sign Up</sl-button
                >
              </div>
              <p>
                Already have an account?
                <a href="/login" @click=${anchorRoute}>Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new SignupShelterView();
