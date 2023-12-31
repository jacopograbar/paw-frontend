import App from "../../App";
import { html, render } from "lit-html";
import Auth from "../../services/Auth";
import UserAPI from "../../services/UserAPI";
import PetAPI from "../../services/PetAPI";
import Utils from "../../Utils";
import Toast from "../../Toast";

class ShelterPageView {
  async init() {
    document.title = "Shelter Page";
    this.shelterID = window.location.pathname.split("/")[2];
    this.shelter = await UserAPI.getProfileById(this.shelterID);
    this.pets = null;
    window.addEventListener("resize", this.resizeCarousel.bind(this));
    this.render();
    window.scrollTo(0, 0);
    Utils.pageIntroAnim();
    await this.getPets();
  }

  // Fetch pets information
  async getPets() {
    try {
      let allpets = await PetAPI.getPets();
      let filtered = allpets.filter((pet) => pet.shelter._id == this.shelterID);
      this.pets = filtered;
      this.render();
    } catch (err) {
      Toast.show(err, "error");
    }
  }

  // Refreshes carousel element when the window width changes (listener in init())
  resizeCarousel() {
    if (document.title == "Shelter Page") this.render();
  }

  // Apply filter for pet search
  async filterPets(match) {
    // Validation
    if (!match) return;

    // get fresh copy of the haircuts
    try {
      let allpets = await PetAPI.getPets();
      let filtered = allpets.filter((pet) => pet.shelter._id == this.shelterID);
      this.pets = filtered;
    } catch (err) {
      console.log(err);
      return;
    }

    let filtered = this.pets.filter((pet) => pet.petType == match);

    // Render
    this.pets = filtered;
    this.render();
  }

  // Clear selected styling for applied filters
  clearFilterButtons() {
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((button) => {
      button.removeAttribute("variant");
    });
  }

  // Clear filters
  clearFilters() {
    this.getPets();
    this.clearFilterButtons();
  }

  // Filter function handler
  handleFilter(e) {
    // unset all buttons
    this.clearFilterButtons();

    // set active button
    e.target.setAttribute("variant", "primary");

    // extract match
    const match = e.target.getAttribute("data-match");

    // filter
    this.filterPets(match);
  }

  render() {
    const template = html`
      <paw-header
        user="${JSON.stringify(Auth.currentUser)}"
        title="Shelter Page"
      ></paw-header>
      <div class="shelter-page-view layout-page">
        <div class="page-animation"></div>
        <!-- First Section -->
        <section class="shelter-page-section layout-section">
          <div class="first-column">
            <sl-avatar
              class="avatar-main"
              label="${this.shelter.name}"
              image="${App.apiBase}/images/${this.shelter.profilePic}"
            >
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
                (animal) => html` <div style="text-align:center">
                  <sl-avatar class="avatar-badge" label="${animal}">
                    <img
                      slot="icon"
                      src="${animal == "Cats"
                        ? "../images/cat-white.png"
                        : "../images/dog-white.png"}"
                    />
                  </sl-avatar>
                  <p>${Utils.capitaliseFirstLetter(animal)}</p>
                </div>`
              )}
            </div>
          </div>
          <img
            id="first-background-img"
            src="../images/pet-shelter-white.png"
          />
        </section>
        <section class="shelter-page-section layout-section">
          <img id="second-background-img" src="../images/pawprint-white.png" />
          <h1 class="pet-title">Our Pets</h1>
          <div class="filter-menu">
            <h3>I am looking for:</h3>
            <div>
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="cat"
                @click=${this.handleFilter.bind(this)}
                >Cats</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-match="dog"
                @click=${this.handleFilter.bind(this)}
                >Dogs</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                @click=${this.clearFilters.bind(this)}
                >All pets</sl-button
              >
            </div>
          </div>
          <div class="carousel-container">
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${window.innerWidth > 1100
                ? 3
                : window.innerWidth > 690
                ? 2
                : 1}"
              slides-per-move="1"
            >
              ${!this.pets
                ? html`
                    <sl-spinner
                      style="font-size: 7vw; --stroke-width: 1vw;"
                    ></sl-spinner>
                  `
                : this.pets.length === 0
                ? html`<h1 class="no-content-message">
                    There are currently no pets
                  </h1>`
                : html`
                    ${this.pets.map(
                      (pet) => html`
                        <sl-carousel-item>
                          <paw-petcard
                            id="${pet._id}"
                            name="${pet.name}"
                            petType="${pet.petType}"
                            breed="${pet.breed}"
                            image="${pet.images[0]}"
                            gender="${pet.gender}"
                            age="${pet.age}"
                          ></paw-petcard>
                        </sl-carousel-item>
                      `
                    )}
                  `}
              <sl-icon slot="next-icon" name="caret-right-fill"></sl-icon>
              <sl-icon slot="previous-icon" name="caret-left-fill"></sl-icon>
            </sl-carousel>
          </div>
        </section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new ShelterPageView();
