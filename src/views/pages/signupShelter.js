import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class SignupShelterView {
  init() {
    document.title = "Signup Shelter";
    this.render();
    Utils.pageIntroAnim();
  }

  render() {
    const template = html`
      <paw-header title="Pet Shelter Signup"></paw-header>
      <div class="signup-page">
        <div class="paw-main"></div>
        <div id="paw-1" class="paw-div"></div>
        <div id="paw-2" class="paw-div"></div>
        <div id="paw-3" class="paw-div"></div>
        <div id="paw-4" class="paw-div"></div>
        <div class="paw-top-right"></div>
        <div class="signup-overlay">
          <h1>Pet Shelter Signup</h1>
          <form class="signup-form" @sl-submit=${this.signUpSubmitHandler}>
            <sl-input hidden name="accessType" type="text" value="1"></sl-input>
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
                  <sl-menu-item value="cats">Cats</sl-menu-item>
                  <sl-menu-item value="dogs">Dogs</sl-menu-item>
                  <sl-menu-item value="birds">Birds</sl-menu-item>
                  <sl-menu-item value="rodents">Rodents</sl-menu-item>
                  <sl-menu-item value="reptiles">Reptiles</sl-menu-item>
                </sl-select>
              </div>
            </div>
            <div class="signup-column">
              <div class="input-group">
                <sl-select
                  name="state"
                  label="State"
                  placeholder="Select your state..."
                >
                  <sl-menu-item value="NSW">New South Wales</sl-menu-item>
                  <sl-menu-item value="VIC">Victoria</sl-menu-item>
                  <sl-menu-item value="WA">Western Australia</sl-menu-item>
                  <sl-menu-item value="SA">South Australia</sl-menu-item>
                  <sl-menu-item value="QLD">Queensland</sl-menu-item>
                  <sl-menu-item value="NT">Northern Territory</sl-menu-item>
                  <sl-menu-item value="ACT"
                    >Australian Capital Territory</sl-menu-item
                  >
                  <sl-menu-item value="TAS">Tasmania</sl-menu-item>
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
                  rows="5"
                  resize="none"
                  placeholder="Write something about your organisation..."
                  label="About Us"
                ></sl-textarea>
              </div>
              <div class="signup-submit-area">
                <sl-button type="primary" class="submit-btn" submit
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
