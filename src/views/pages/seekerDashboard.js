import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import PetAPI from "../../services/PetAPI";
import UserAPI from "../../services/UserAPI";
import Utils from "../../Utils";
import Toast from "../../Toast";

class SeekerDashboardView {
  async init() {
    document.title = "Seeker Dashboard";
    this.pets = null;
    this.shelters = await UserAPI.getUserListByAccessLevel(2);
    console.log(this.shelters);
    this.render();
    window.scrollTo(0, 0);
    Utils.pageIntroAnim();
    await this.getPets();
  }

  async getPets() {
    try {
      this.pets = await PetAPI.getPets();
      console.log(this.pets);
      this.render();
    } catch (err) {
      Toast.show(err, "error");
    }
  }

  async filterPets(match) {
    // Validation
    if (!match) return;

    // get fresh copy of the haircuts
    try {
      this.pets = await PetAPI.getPets();
    } catch (err) {
      console.log(err);
      return;
    }

    let filtered = this.pets.filter((pet) => pet.petType == match);

    // Render
    this.pets = filtered;
    this.render();
  }

  clearFilterButtons() {
    const buttons = document.querySelectorAll(".filter-button");
    buttons.forEach((button) => {
      button.removeAttribute("variant");
    });
  }

  clearFilters() {
    this.getPets();
    this.clearFilterButtons();
  }

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

  scrollToSection(sectionTag) {
    document
      .getElementById(sectionTag)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  handleScrollToPet(petType) {
    // scroll to section
    this.scrollToSection("browse-pet-section");
    // unset all buttons
    this.clearFilterButtons();
    // select button
    const filterBtn = document.getElementById(petType);
    filterBtn.setAttribute("variant", "primary");
    // filter
    this.filterPets(petType);
  }

  render() {
    const template = html`
      <paw-header
        user="${JSON.stringify(Auth.currentUser)}"
        title="Dashboard"
      ></paw-header>
      <div class="seeker dashboard-view">
        <!-- First Section -->
        <section class="dashboard-section" id="first-section">
          <div class="section-column">
            <sl-avatar
              class="avatar-button"
              label="Browse cats"
              @click=${() => this.handleScrollToPet("cat").bind(this)}
            >
              <img slot="icon" src="../images/cat-white.png" />
            </sl-avatar>
            <h2>Cats</h2>
          </div>
          <div class="section-column" id="seeker-central-column">
            <h1>I am looking for...</h1>
            <sl-avatar
              id="center-white"
              class="avatar-button"
              label="Shelters"
              @click=${() => this.scrollToSection("shelter-section").bind(this)}
            >
              <img
                id="avatar-image"
                slot="icon"
                src="../images/pet-shelter-black.png"
              />
            </sl-avatar>
            <h2>Shelters</h2>
          </div>
          <div class="section-column">
            <sl-avatar
              class="avatar-button"
              label="Browse dogs"
              @click=${() => this.handleScrollToPet("dog").bind(this)}
            >
              <img
                id="avatar-image"
                slot="icon"
                src="../images/dog-white.png"
              />
            </sl-avatar>
            <h2>Dogs</h2>
          </div>
          <img id="first-background-img" src="../images/pawprint-white.png" />
        </section>
        <!-- Second Section -->
        <section class="dashboard-section" id="browse-pet-section">
          <img id="second-background-img" src="../images/cat-white.png" />
          <h2 id="dashboard-pets-title">Find a pet</h2>
          <div class="filter-menu">
            <h3>I am looking for:</h3>
            <div>
              <sl-button
                id="cat"
                class="filter-button"
                size="small"
                data-match="cat"
                @click=${this.handleFilter.bind(this)}
                >Cats</sl-button
              >
              <sl-button
                id="dog"
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
              slides-per-page="${this.pets && this.pets.length === 0 ? 1 : 3}"
              slides-per-move="1"
            >
              ${!this.pets
                ? html`
                    <sl-spinner
                      style="font-size: 7vw; --stroke-width: 1vw;"
                    ></sl-spinner>
                  `
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
        <section class="dashboard-section" id="shelter-section">
          <img
            id="third-background-img"
            src="../images/pet-shelter-black.png"
          />
          <h2 id="dashboard-pets-title">Browse Shelters</h2>
          <div class="carousel-container">
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${this.shelters.length === 0 ? 1 : 3}"
              slides-per-move="1"
            >
              ${this.shelters.length === 0
                ? html`
                    <sl-spinner
                      style="font-size: 7vw; --stroke-width: 1vw;"
                    ></sl-spinner>
                  `
                : html`
                    ${this.shelters.map(
                      (shelter) => html`
                        <sl-carousel-item>
                          <paw-sheltercard
                            id="${shelter._id}"
                            name="${shelter.name}"
                            image="${shelter.profilePic}"
                            state="${shelter.state}"
                            address="${shelter.address}"
                            bio="${shelter.bio}"
                          ></paw-sheltercard>
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

export default new SeekerDashboardView();
