import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import PetAPI from "../../services/PetAPI";
import ApplicationsAPI from "../../services/ApplicationsAPI";

class ApplicationPageView {
  async init() {
    document.title = "Expression Of Interest - Adoption";
    this.petID = window.location.pathname.split("/")[2];
    console.log("Pet page for ID ", this.petID);
    this.pet = await PetAPI.getPetById(this.petID);
    console.log(this.pet);
    this.render();
    Utils.pageIntroAnim();
  }

  async submitHandler(event) {
    event.preventDefault();
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");

    // Wait for controls to be defined before attaching form listeners
    await Promise.all([
      customElements.whenDefined("sl-textarea"),
    ]).then(() => {
      const form = document.querySelector(".adoption-form");
      const formData = new FormData(form);

      // logging data for testing
      for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
      }

      // getting arrays
      // console.log(formData.getAll("animals"));
      // CAN GET JUST ONE VALUE WITH .GET
      // submitBtn.removeAttribute("loading");

      // submit application
      ApplicationsAPI.submitApplication(formData, () => {
        submitBtn.removeAttribute("loading");
      });
    });
  }

  render() {
    const template = html`
      <paw-header user="${JSON.stringify(
        Auth.currentUser
      )}" title="Expression of Interest - Adoption"></paw-header>
      <div class="adoption-page">
        <div class="paw-main">
          <img src="${this.pet.images[0]}" alt="${this.pet.name}"/>
        </div>
        <div class="adoption-overlay">
          <h1>Expression of Interest</h1>
          <p>Complete this form to express yout interest in adopting ${
            this.pet.name
          }.</p>
          <p>Your message will be sent to ${this.pet.shelter.name} for them to review.</p>
          <form class="adoption-form" @submit=${this.submitHandler}>
            <input name="adopter" value="${
              Auth.currentUser._id
            }" type="hidden" />
            <input name="shelter" value="${
              this.pet.shelter._id
            }" type="hidden" />
            <input name="pet" value="${this.pet._id}" type="hidden" />
                <sl-textarea
                  name="message"
                  rows="5"
                  resize="none"
                  placeholder="Write your message here..."
                  label="Your message:"
                ></sl-textarea>
              <div class="application-submit-area">
                <sl-button type="submit" variant="primary" class="submit-btn"
                  >Submit</sl-button
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new ApplicationPageView();
