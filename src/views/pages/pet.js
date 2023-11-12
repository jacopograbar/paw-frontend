import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class PetView {
  init() {
    document.title = "Pet Page";
    const petID = window.location.pathname.split("/")[2];
    console.log("Pet page for ID ", petID);
    this.pets = Utils.createDummyPetObjects();
    this.pet = this.pets[0];
    this.render();
    Utils.pageIntroAnim();
  }

  render() {
    const template = html`
      <paw-header title="Pet Page"></paw-header>
      <div class="pet-page-view layout-page">
        <!-- First Section -->
        <section class="pet-page-section layout-section">
          <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
        <section class="pet-page-section layout-section">
          <img
            id="second-background-img"
            src="${this.pet.petType == "cat"
              ? "../images/cat-white.png"
              : "../images/dog-white.png"}"
          />
        </section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new PetView();
