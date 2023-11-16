import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";

class PetView {
  init() {
    document.title = "Pet Page";
    const petID = window.location.pathname.split("/")[2];
    console.log("Pet page for ID ", petID);
    this.pets = Utils.createDummyPetObjects();
    this.pet = this.pets[0];
    this.i = 0;
    this.render();
    Utils.pageIntroAnim();
  }

  selectPetImg(index) {
    this.i = index;
    console.log(index);
    this.render();
  }

  render() {
    const template = html`
      <paw-header user="${JSON.stringify(Auth.currentUser)}" title="Pet Page"></paw-header>
      <div class="pet-page-view layout-page">
      <div class="page-animation"></div>
        <!-- First Section -->
        <section class="pet-page-section layout-section">
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Browse dogs">
              <img
                id="avatar-image"
                slot="icon"
                src="../images/pet-shelter-white.png"
              />
            </sl-avatar>
            <h2 class="pet-btn-title">My Shelter</h2>
          </div>
          <div class="section-column">
            <div class="img-gallery">
              <sl-avatar class="avatar-main" label="${this.pet.name}">
                <img slot="icon" src="${this.pet.images[this.i]}" />
              </sl-avatar>
              <div class="gallery-row">
                <sl-avatar
                  class="avatar-gallery third"
                  label="${this.pet.name}"
                  @click=${() => this.selectPetImg(0)}
                  id="${this.i === 0 && "selected"}"
                >
                  <img slot="icon" src="${this.pet.images[0]}" />
                </sl-avatar>
                <sl-avatar
                  class="avatar-gallery second"
                  label="${this.pet.name}"
                  @click=${() => this.selectPetImg(1)}
                  id="${this.i === 1 && "selected"}"
                >
                  <img slot="icon" src="${this.pet.images[1]}" />
                </sl-avatar>
                <sl-avatar
                  class="avatar-gallery"
                  label="${this.pet.name}"
                  @click=${() => this.selectPetImg(2)}
                  id="${this.i === 2 && "selected"}"
                >
                  <img slot="icon" src="${this.pet.images[2]}" />
                </sl-avatar>
                <sl-avatar
                  class="avatar-gallery second"
                  label="${this.pet.name}"
                  @click=${() => this.selectPetImg(3)}
                  id="${this.i === 3 && "selected"}"
                >
                  <img slot="icon" src="${this.pet.images[3]}" />
                </sl-avatar>
                <sl-avatar
                  class="avatar-gallery fourth"
                  label="${this.pet.name}"
                  @click=${() => this.selectPetImg(4)}
                  id="${this.i === 4 && "selected"}"
                >
                  <img slot="icon" src="${this.pet.images[4]}" />
                </sl-avatar>
              </div>
            </div>
            <h1>${this.pet.name}</h1>
            <p>
              ${this.pet.age} ${this.pet.age == 1 ? "year" : "years"} old
              ${this.pet.breed}
            </p>
            <div class="badges-row">
              <sl-avatar class="avatar-badge">
                <img
                  slot="icon"
                  src="${this.pet.petType == "cat"
                    ? "../images/cat-white.png"
                    : "../images/dog-white.png"}"
                />
              </sl-avatar>
              <sl-avatar class="avatar-badge">
                <img
                  slot="icon"
                  src="${this.pet.gender == "M"
                    ? "../images/male.png"
                    : "../images/female.png"}"
                />
              </sl-avatar>
            </div>
          </div>
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Browse dogs">
              <sl-icon slot="icon" name="file-text"></sl-icon>
            </sl-avatar>
            <h2 class="pet-btn-title">Adoption</h2>
          </div>
          <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
        <section class="pet-page-section layout-section">
          <img
            id="second-background-img"
            src="${this.pet.petType == "cat"
              ? "../images/cat-white.png"
              : "../images/dog-white.png"}"
          />
          <h1 class="pet-title">Health and Care</h1>
          <li class="list-container">
            <ul>
              <sl-avatar>
                <sl-icon slot="icon" name="heart-pulse"></sl-icon> </sl-avatar
              >${Utils.getDiseaseString(this.pet.diseases)}
            </ul>
            <ul>
              <sl-avatar>
                <sl-icon slot="icon" name="file-medical"></sl-icon>
              </sl-avatar>
              ${this.pet.vaccinated
                ? "Fully vaccinated according to government regulations"
                : "This pet is not currently up to date with necessary vaccinations"}
            </ul>
            <ul>
              <sl-avatar>
                <sl-icon slot="icon" name="people"></sl-icon>
              </sl-avatar>
              ${Utils.getFriendlinessString(this.pet.friendliness)}
            </ul>
            <ul>
              <sl-avatar>
                <sl-icon slot="icon" name="journals"></sl-icon>
              </sl-avatar>
              ${this.pet.notes
                ? "Additional notes: " + this.pet.notes
                : "No additional notes from the shelter"}
            </ul>
          </li>
        </section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new PetView();
