import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class ShelterPageView {
  init() {
    document.title = "Shelter Page";
    const shelterID = window.location.pathname.split("/")[2];
    console.log("Shelter page for ID ", shelterID);
    this.shelters = Utils.createDummyShelterObjects();
    this.shelter = this.shelters[0];
    this.render();
    Utils.pageIntroAnim();
  }

  render() {
    const template = html`
      <paw-header title="Shelter Page"></paw-header>
      <div class="shelter-page-view layout-page">
        <div class="page-animation"></div>
        <!-- First Section -->
        <section class="shelter-page-section layout-section">
          <div class="first-column">
            <sl-avatar class="avatar-main" label="${this.shelter.name}">
              <img slot="icon" src="${this.shelter.profilePic}" />
            </sl-avatar>
            <h1>${this.shelter.name}</h1>
            <p id="shelter-address">
              <img
                src="../images/location-pin.png"
                id="location-pin"
                alt="Location Pin"
              />
              ${this.shelter.address}, ${this.shelter.state}
            </p>
          </div>
          <div class="second-column">
            <h2>About the shelter</h2>
            <p>${this.shelter.bio}</p>
            <h2>Available pets</h2>
            <div class="badges-row">
              ${this.shelter.animals.map(
                (animal) => html` <sl-avatar
                  class="avatar-badge"
                  label="${animal}"
                >
                  <img slot="icon" src="${animal == "Cats" ? "../images/cat-white.png" : "../images/dog-white.png" }" />
                </sl-avatar>`
              )}
            </div>
          </div>
          <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
        <section class="shelter-page-section layout-section">
          <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new ShelterPageView();
