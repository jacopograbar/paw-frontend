import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class SeekerDashboardView {
  init() {
    document.title = "Seeker Dashboard";
    this.pets = Utils.createDummyPetObjects();
    this.shelters = Utils.createDummyShelterObjects();
    this.render();
    Utils.pageIntroAnim();
  }

  handleNext() {
    console.log("next");
  }

  handleFilter() {
    console.log("filter");
  }

  render() {
    const template = html`
      <paw-header title="Dashboard"></paw-header>
      <div class="seeker dashboard-view">
        <!-- First Section -->
        <section class="dashboard-section">
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Browse cats">
              <img slot="icon" src="../images/cat-white.png" />
            </sl-avatar>
            <h2>Cats</h2>
          </div>
          <div class="section-column" id="seeker-central-column">
            <h1>I am looking for...</h1>
            <sl-avatar id="center-white" class="avatar-button" label="Our Pets">
              <img
                id="avatar-image"
                slot="icon"
                src="../images/pet-shelter-black.png"
              />
            </sl-avatar>
            <h2>Shelters</h2>
          </div>
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Browse dogs">
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
        <section class="dashboard-section">
          <img id="second-background-img" src="../images/cat-white.png" />
          <h2 id="dashboard-pets-title">Find a pet</h2>
          <div class="filter-menu">
            <h3>Filter by</h3>
            <div>
              <p>Pet type</p>
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="m"
                @click=${this.handleFilter.bind(this)}
                >Cat</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="f"
                @click=${this.handleFilter.bind(this)}
                >Dog</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="u"
                @click=${this.handleFilter.bind(this)}
                >All pets</sl-button
              >
            </div>
            <div>
              <p>State</p>
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="m"
                @click=${this.handleFilter.bind(this)}
                >NSW</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="f"
                @click=${this.handleFilter.bind(this)}
                >VIC</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="u"
                @click=${this.handleFilter.bind(this)}
                >SA</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="m"
                @click=${this.handleFilter.bind(this)}
                >QLD</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="f"
                @click=${this.handleFilter.bind(this)}
                >ACT</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="u"
                @click=${this.handleFilter.bind(this)}
                >NT</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="u"
                @click=${this.handleFilter.bind(this)}
                >TAS</sl-button
              >
              <sl-button
                class="filter-button"
                size="small"
                data-field="gender"
                data-match="u"
                @click=${this.handleFilter.bind(this)}
                >WA</sl-button
              >
            </div>
          </div>
          <div class="carousel-container">
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${this.pets.length === 0 ? 1 : 3}"
              slides-per-move="1"
            >
              ${this.pets.length === 0
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
        <section class="dashboard-section">
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
