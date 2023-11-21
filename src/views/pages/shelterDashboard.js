import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import PetAPI from "../../services/PetAPI";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import ApplicationsAPI from "../../services/ApplicationsAPI";

class ShelterDashboardView {
  async init() {
    document.title = "Shelter Dashboard";
    this.user = Auth.currentUser;
    console.log(this.user);
    this.pets = await PetAPI.getPets();
    console.log(this.pets);
    this.applications = await ApplicationsAPI.getApplications(2, this.user._id);
    console.log(this.applications);
    window.addEventListener("resize", this.resizeCarousel.bind(this));
    this.render();
    window.scrollTo(0, 0);
    Utils.pageIntroAnim();
  }

  scrollToSection(sectionTag) {
    document
      .getElementById(sectionTag)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  resizeCarousel() {
    if (document.title == "Shelter Dashboard") this.render();
  }

  render() {
    const template = html`
      <paw-header
        user="${JSON.stringify(Auth.currentUser)}"
        title="Dashboard"
      ></paw-header>
      <div class="shelter dashboard-view">
        <!-- First Section -->
        <section class="dashboard-section" id="intro-section">
          <div class="section-column">
            <sl-avatar
              class="avatar-button"
              label="Our Pets"
              @click=${() => this.scrollToSection("pets-section").bind(this)}
            >
              <img
                id="avatar-paw"
                slot="icon"
                src="../images/pawprint-white.png"
              />
            </sl-avatar>
            <h2>Our Pets</h2>
          </div>
          <div class="section-column">
            <sl-avatar
              class="avatar-main"
              label="Shelter"
              image="${App.apiBase}/images/${this.user.profilePic}"
            >
            </sl-avatar>
            <div class="shelter-info">
              <h2>${this.user.name}</h2>
              <h3>
                <img
                  src="../images/location-pin.png"
                  id="location-pin"
                  alt="Location Pin"
                />${this.user.address}, ${this.user.state}
              </h3>
              <p>${this.user.bio}</p>
            </div>
          </div>
          <div class="section-column">
            <sl-avatar
              class="avatar-button"
              label="Applications"
              @click=${() => this.scrollToSection("apps-section").bind(this)}
            >
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
        <section class="dashboard-section" id="pets-section">
          <img id="second-background-img" src="../images/pawprint-white.png" />
          <h2 id="dashboard-pets-title">
            Our pets
            <sl-avatar
              id="mobile-add-pet-bttn"
              class="avatar-button"
              label="Add more"
              @click=${() => gotoRoute("/new-pet")}
            >
              <sl-icon slot="icon" name="plus"></sl-icon>
            </sl-avatar>
          </h2>
          <div class="carousel-container">
            <sl-avatar
              id="add-pet-bttn"
              class="avatar-button"
              label="Add more"
              @click=${() => gotoRoute("/new-pet")}
            >
              <sl-icon slot="icon" name="plus"></sl-icon>
            </sl-avatar>
            <sl-carousel
              id="carousel"
              navigation
              mouse-dragging
              slides-per-page="${window.innerWidth > 1740
                ? 3
                : window.innerWidth > 1100
                ? 2
                : 1}"
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
        <section class="dashboard-section" id="apps-section">
          <img id="third-background-img" src="../images/applications.png" />
          <h2 id="dashboard-pets-title">Current Applications</h2>
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
                            status="${application.status}"
                            date="${application.createdAt}"
                            pet="${JSON.stringify(application.pet)}"
                            applicant="${JSON.stringify(application.adopter)}"
                            shelter="${JSON.stringify(application.shelter)}"
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
