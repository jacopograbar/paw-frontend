import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class ShelterDashboardView {
  init() {
    document.title = "Shelter Dashboard";
    this.pets = Utils.createDummyPetObjects();
    this.applications = Utils.createDummyApplicationObjects();
    this.render();
    Utils.pageIntroAnim();
  }

  handleNext() {
    console.log("next");
  }

  render() {
    const template = html`
      <paw-header title="Dashboard"></paw-header>
      <div class="shelter dashboard-view">
        <!-- First Section -->
        <section class="dashboard-section">
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Our Pets">
              <img
                id="avatar-paw"
                slot="icon"
                src="../images/pawprint-white.png"
              />
            </sl-avatar>
            <h2>Our Pets</h2>
          </div>
          <div class="section-column">
            <sl-avatar class="avatar-main" label="Our Pets">
              <img
                id="avatar-image"
                slot="icon"
                src="https://cdn.vox-cdn.com/thumbor/v9ksZRhgha_kZsrjZkR0iCD8DB8=/0x0:4189x2608/1200x800/filters:focal(1766x853:2436x1523)/cdn.vox-cdn.com/uploads/chorus_image/image/72548864/GettyImages_1401741294.0.jpg"
              />
            </sl-avatar>
            <div class="shelter-info">
              <h2>Shelter's Name</h2>
              <h3>Shelter's Address</h3>
              <p>Shelter's description</p>
              <sl-button>Edit Profile</sl-button>
            </div>
          </div>
          <div class="section-column">
            <sl-avatar class="avatar-button" label="Applications">
              <sl-icon slot="icon" name="file-text"></sl-icon>
            </sl-avatar>
            <h2>Applications</h2>
          </div>
          <img
            id="first-background-img"
            src="../images/pet-shelter-white.png"
          />
        </section>
        <!-- Second Section -->
        <section class="dashboard-section">
          <img id="second-background-img" src="../images/pawprint-white.png" />
          <h2 id="dashboard-pets-title">Our pets</h2>
          <div class="carousel-container">
            <sl-avatar class="avatar-button" label="Add more">
              <sl-icon slot="icon" name="plus"></sl-icon>
            </sl-avatar>
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${this.pets.length === 0 ? 1 : 2.3}"
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
          <img id="third-background-img" src="../images/applications.png" />
          <h2 id="dashboard-pets-title">Current Applications</h2>
          <div class="carousel-container">
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${this.applications.length === 0 ? 1 : 3}"
              slides-per-move="1"
            >
              ${this.applications.length === 0
                ? html`
                    <sl-spinner
                      style="font-size: 7vw; --stroke-width: 1vw;"
                    ></sl-spinner>
                  `
                : html`
                    ${this.applications.map(
                      (application) => html`
                        <sl-carousel-item>
                          <paw-applicationcard
                            id="${application._id}"
                            date="${application.date}"
                            pet="${JSON.stringify(application.pet)}"
                            applicant="${JSON.stringify(application.adopter)}"
                          ></paw-applicationcard>
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

export default new ShelterDashboardView();