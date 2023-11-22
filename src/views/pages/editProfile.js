import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import UserAPI from "../../services/UserAPI";
import Toast from "../../Toast";

class EditProfileView {
  async init() {
    document.title = "Expression Of Interest - Adoption";
    this.user = Auth.currentUser;
    this.accessLevel = this.user.accessLevel;
    console.log("Edit page for user ID ", this.user._id);
    this.render();
    Utils.pageIntroAnim();
  }

  async updateProfileSubmitHandler(e) {
    e.preventDefault();
    const form = document.querySelector(".adoption-form");
    const formData = new FormData(form);
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");
    try {
      const updatedUser = await UserAPI.updateUser(this.user._id, formData);
      this.user = updatedUser;
      Auth.currentUser = updatedUser;
      Toast.show("Profile successfully updated!");
      gotoRoute(`/dashboard/${this.accessLevel == 1 ? "seeker" : "shelter"}`);
    } catch (err) {
      Toast.show(err, "error");
    }
    submitBtn.removeAttribute("loading");
  }

  render() {
    const template = html`
      <paw-header
        user="${JSON.stringify(Auth.currentUser)}"
        title="Edit Profile"
      ></paw-header>
      <div class="adoption-page" id="edit-page">
        <div class="adoption-overlay">
          ${this.user == null
            ? html` <sl-spinner></sl-spinner> `
            : html`
                <h1 id="edit-profile-title">Edit Profile Details</h1>
                <form class="adoption-form" @submit=${this.updateProfileSubmitHandler.bind(this)}>
                  <div class="input-group">
                    <sl-input
                      type="text"
                      label="${this.accessLevel == 1
                        ? "Your "
                        : "Shelter "}Name:"
                      name="name"
                      value="${this.user.name}"
                    ></sl-input>
                  </div>
                  <div class="input-group">
                    <sl-input
                      type="text"
                      name="email"
                      value="${this.user.email}"
                      label="Email Address:"
                    ></sl-input>
                  </div>
                  <div class="input-group">
                    <sl-select
                      name="animals"
                      label="I am looking for.."
                      placeholder="Select the animals you are looking for..."
                      multiple
                      clearable
                      value="${this.user.animals.map((animal) => `${animal} `)}"
                    >
                      <sl-option value="cats">Cats</sl-option>
                      <sl-option value="dogs">Dogs</sl-option>
                    </sl-select>
                  </div>
                  <div class="input-group">
                    <sl-select
                      name="state"
                      label="State"
                      placeholder="Select your state..."
                      clearable
                      value="${this.user.state}"
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
                      value="${this.user.address}"
                    ></sl-input>
                  </div>
                  <div class="input-group">
                    <sl-textarea
                      name="bio"
                      rows="5"
                      resize="none"
                      label="Bio"
                      value="${this.user.bio}"
                    ></sl-textarea>
                  </div>
                  <div class="input-group">
                    <label>Profile Picture</label><br />
                    ${this.user.profilePic
                      ? html`
                          <sl-avatar
                            image="${App.apiBase}/images/${this.user.profilePic}"
                          ></sl-avatar>
                          <input type="file" name="profilePic" />
                        `
                      : html` <input type="file" name="profilePic" /> `}
                  </div>
                  <div class="application-submit-area">
                    <sl-button
                      type="submit"
                      variant="primary"
                      class="submit-btn"
                      >Submit</sl-button
                    >
                  </div>
                </form>
              `}
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new EditProfileView();
