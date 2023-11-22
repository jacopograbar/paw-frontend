import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import ApplicationsAPI from "../../services/ApplicationsAPI";
import dayjs from "dayjs";
import Toast from "../../Toast";

class MyApplicationsView {
  async init() {
    document.title = "My Applications";
    this.applications = null;
    this.render();
    Utils.pageIntroAnim();
    await this.getApplications();
  }

  async getApplications() {
    try {
      this.applications = await ApplicationsAPI.getApplications(
        Auth.currentUser.accessLevel,
        Auth.currentUser._id
      );
      this.render();
    } catch (err) {
      Toast.show(err, "error");
    }
  }

  handleOpen() {
    const container = document.querySelector(".details-group");

    // Close all other details when one is shown
    container.addEventListener("sl-show", (event) => {
      if (event.target.localName === "sl-details") {
        [...container.querySelectorAll("sl-details")].map(
          (details) => (details.open = event.target === details)
        );
      }
    });
  }

  async handleDelete(appID) {
    alert(appID);
    try {
      const response = await ApplicationsAPI.deleteApplicationById(appID);
      console.log(response);
      Toast.show("Application succesfully deleted");
      this.init();
    } catch (err) {
      console.log(err);
      Toast.show(err, "error");
    }
  }

  render() {
    const template = html`
      <paw-header
        title="My Applications"
        user="${JSON.stringify(Auth.currentUser)}"
      ></paw-header>
      <div class="applications-screen">
        <h1>My Applications</h1>
        <div class="details-group">
          ${!this.applications
            ? html`
                <sl-spinner
                  style="position: absolute; font-size: 7vw;"
                ></sl-spinner>
              `
            : this.applications.length === 0
            ? html`<h2 class="no-content-message-app">
                You haven't yet submitted any application.
              </h2>`
            : this.applications.map(
                (app) =>
                  html` <sl-details @sl-show=${this.handleOpen}>
                    <div class="summary" slot="summary">
                      <p><strong>${app.pet.name}</strong></p>
                      <p>${dayjs(app.createdAt).format("DD/MM/YYYY")}</p>
                      <p id="adopter-name">${app.adopter.name}</p>
                      <p id="shelter-name">${app.shelter.name}</p>
                      <p
                        style="color:${app.status == 1
                          ? "red"
                          : app.status == 2
                          ? "#f8b102"
                          : "green"}"
                      >
                        <strong>
                          ${app.status == 1 ? "Rejected" : ""}${app.status == 2
                            ? "Pending"
                            : ""}${app.status == 3 ? "Approved" : ""}
                        </strong>
                      </p>
                    </div>
                    <div class="details-show">
                      <div class="left-content">
                        <sl-avatar
                          class="avatar-app"
                          label="${app.pet.name}"
                          image="${`${App.apiBase}/images/${app.pet.images[0]}`}"
                        >
                        </sl-avatar>
                        <div>
                          <strong>Applicant's message:</strong>
                          <p>${app.message}</p>
                        </div>
                      </div>
                      <div class="right-content">
                        ${app.status == 3
                          ? html`<sl-icon
                                name="trophy"
                                style="color: green; font-size: 30px;"
                              ></sl-icon>
                              <p style="color: green;">Congratulations!</p>
                              <p>
                                Contact us on
                                <a href="mailto:${app.shelter.email}"
                                  >${app.shelter.email}</a
                                >
                                to schedule your visit.
                              </p>`
                          : html` <sl-avatar
                                class="avatar-button"
                                label="${app.pet.name}"
                                @click=${() =>
                                  this.handleDelete(app._id).bind(this)}
                              >
                                <sl-icon name="x" slot="icon"></sl-icon>
                              </sl-avatar>
                              <strong>Withdraw</strong>`}
                      </div>
                    </div>
                  </sl-details>`
              )}
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new MyApplicationsView();
