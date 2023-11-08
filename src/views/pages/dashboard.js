import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../Auth";
import Utils from "../../Utils";

class DashboardView {
  init() {
    document.title = "Dashboard";
    // dummy access level set to 1 for shelter view rendering
    this.accessLevel = 1;
    this.render();
    Utils.pageIntroAnim();
  }

  handleNext() {
    console.log("next");
  }

  render() {
    const template = html`
      <paw-header title="Dashboard"></paw-header>
      <div
        class=${this.accessLevel === 1
          ? "shelter dashboard-view"
          : "seeker dashboard-view"}
      >
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
          <sl-avatar class="avatar-button" label="Add more">
            <sl-icon slot="icon" name="plus"></sl-icon>
          </sl-avatar>
          <sl-carousel
            id="carousel"
            navigation
            mouse-dragging
            slides-per-page="2"
            slides-per-move="2"
          >
            <sl-icon slot="next-icon" name="gear"></sl-icon>
            <sl-icon slot="previous-icon" name="gear"></sl-icon>
            <sl-carousel-item>
              <sl-card class="card-overview">
                <img
                  slot="image"
                  src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                />

                <strong>Mittens</strong><br />
                This kitten is as cute as he is playful. Bring him home
                today!<br />
                <small>6 weeks old</small>

                <div slot="footer">
                  <sl-button variant="primary" pill>More Info</sl-button>
                  <sl-rating></sl-rating>
                </div>
              </sl-card>
            </sl-carousel-item>
            <sl-carousel-item>
              <sl-card class="card-overview">
                <img
                  slot="image"
                  src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                />

                <strong>Mittens</strong><br />
                This kitten is as cute as he is playful. Bring him home
                today!<br />
                <small>6 weeks old</small>

                <div slot="footer">
                  <sl-button variant="primary" pill>More Info</sl-button>
                  <sl-rating></sl-rating>
                </div>
              </sl-card>
            </sl-carousel-item>
            <sl-carousel-item>
              <sl-card class="card-overview">
                <img
                  slot="image"
                  src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                />

                <strong>Mittens</strong><br />
                This kitten is as cute as he is playful. Bring him home
                today!<br />
                <small>6 weeks old</small>

                <div slot="footer">
                  <sl-button variant="primary" pill>More Info</sl-button>
                  <sl-rating></sl-rating>
                </div>
              </sl-card>
            </sl-carousel-item>
            <sl-carousel-item>
              <sl-card class="card-overview">
                <img
                  slot="image"
                  src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                  alt="A kitten sits patiently between a terracotta pot and decorative grasses."
                />

                <strong>Mittens</strong><br />
                This kitten is as cute as he is playful. Bring him home
                today!<br />
                <small>6 weeks old</small>

                <div slot="footer">
                  <sl-button variant="primary" pill>More Info</sl-button>
                  <sl-rating></sl-rating>
                </div>
              </sl-card>
            </sl-carousel-item>
          </sl-carousel>
        </section>
        <section class="dashboard-section">
          <img id="third-background-img" src="../images/applications.png" />
        </section>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new DashboardView();
