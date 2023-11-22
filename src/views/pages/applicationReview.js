import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import Toast from "../../Toast";
import ApplicationsAPI from "../../services/ApplicationsAPI";

class ApplicationReviewView {
  async init() {
    document.title = "Review Application";
    this.appID = window.location.pathname.split("/")[2];
    console.log("Review application ID ", this.appID);
    this.application = await ApplicationsAPI.getApplicationById(this.appID);
    console.log(this.application);
    this.render();
    Utils.pageIntroAnim();
  }

  async approve() {
    const button = document.querySelector("#approve-btn");
    button.setAttribute("loading", "");

    try {
      // approve application
      ApplicationsAPI.processApplication(this.appID, 3);
      Toast.show("Application approved!");
    } catch (err) {
      Toast.show(err, "error");
    } finally {
      button.removeAttribute("loading");
      gotoRoute("/dashboard/shelter");
    }
  }

  async reject() {
    const button = document.querySelector("#reject-btn");
    button.setAttribute("loading", "");

    try {
      // approve application
      ApplicationsAPI.processApplication(this.appID, 1);
      Toast.show("Application rejected!");
    } catch (err) {
      Toast.show(err, "error");
    } finally {
      button.removeAttribute("loading");
      gotoRoute("/dashboard/shelter");
    }
  }

  render() {
    const template = html`
      <paw-header user="${JSON.stringify(
        Auth.currentUser
      )}" title="Review Application"></paw-header>
      <div class="adoption-page">
        <div class="paw-main">
          <img src="${this.application.pet.images[0]}" alt="${
      this.application.pet.name
    }"/>
        </div>
        <div class="adoption-overlay" id="review">
        ${
          this.application.status == 2
            ? html`<h1>Review Application</h1>`
            : html` <h1>Application Details</h1>`
        }
          <table>
            <tr>
              <th>Applicant details</th>
            </tr>
            </table>
            <table class="details">
            <tr>
              <td>${this.application.adopter.name}</td>
              <td>${this.application.adopter.email} </td>
              <td class="mobile-hide">${this.application.adopter.address}</td>
              <td class="mobile-hide">${this.application.adopter.state}</td>
            </tr>
            </table>
            <table>
            <tr>
              <th>Pet details</th>
            </tr>
            <table class="details">
            <tr>
              <td>${this.application.pet.name}</td>
              <td>${this.application.pet.breed} ${
      this.application.pet.petType
    }</td>
              <td class="mobile-hide">${
                this.application.pet.gender == "M" ? "Male" : "Female"
              }</td>
              <td>${this.application.pet.age} ${
      this.application.pet.age == 1 ? "year" : "years"
    } old</td>
            </tr>
          </table>
          <table>
          <tr>
              <th>Applicant's message:</th>
            </tr>
  </table>
            <table class="details">
            <tr>
              <td>${this.application.message}</td>
            </tr>
          </table>
              <div class="application-submit-area">
                ${
                  this.application.status == 2
                    ? html` <sl-button
                          variant="primary"
                          id="approve-btn"
                          @click=${this.approve.bind(this)}
                          >Approve</sl-button
                        >
                        <sl-button
                          variant="primary"
                          id="reject-btn"
                          @click=${this.reject.bind(this)}
                          >Reject</sl-button
                        >`
                    : this.application.status == 1
                    ? html`<h3>This application was rejected.</h3>`
                    : html`<h3>This application was approved.</h3>`
                }

              </div>
            </div>
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new ApplicationReviewView();
