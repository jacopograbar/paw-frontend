import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute, anchorRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import UserAPI from "../../services/UserAPI";

class GuideView {
  init() {
    document.title = "Guide";
    this.render();
    Utils.pageIntroAnim();
  }

  async handleGuideBtn() {
    //1. change newUser to false
    try {
      const response = await UserAPI.updateUserStatus(Auth.currentUser._id);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    //2. redirect to dashboard
    gotoRoute(
      `/dashboard/${Auth.currentUser.accessLevel == 1 ? "seeker" : "shelter"}`
    );
  }

  render() {
    const template = html`
      <paw-header title="Guide"></paw-header>
      <div class="guide-page">
        <img id="first-background-img" src="../images/pawprint-white.png" />
        <h1>
          ${Auth.currentUser.accessLevel == 1
            ? "Welcome to Paw - Your Journey to Finding a Furry Friend!"
            : "Welcome to Paw - Empowering Shelters to Make a Difference!"}
        </h1>
        <p id="intro">
          ${Auth.currentUser.accessLevel == 1
            ? "Are you ready to welcome a new companion into your life? Paw is here to help you connect with adorable pets in need of a loving home. Follow these steps to make the most of your journey:"
            : "Thank you for being a part of Paw and making a positive impact on animal welfare. Follow these steps to manage your shelter and help pets find their forever homes:"}
        </p>

        <div class="guide-div">
          <h2>
            ${Auth.currentUser.accessLevel == 1
              ? "1. Browse Available Pets"
              : "1. Process Adoption Applications"}
          </h2>
          <p>
            ${Auth.currentUser.accessLevel == 1
              ? "Explore our list of furry friends waiting for their forever homes. Click on a pet to view details and express your interest."
              : "Review and process adoption applications from potential pet owners. Approve or reject applications based on the best interests of the pets."}
          </p>
        </div>

        <div class="guide-div">
          <h2>
            ${Auth.currentUser.accessLevel == 1
              ? "2. Submit Adoption Application"
              : "2. Add a New Pet"}
          </h2>
          <p>
            ${Auth.currentUser.accessLevel == 1
              ? "Found the perfect match? Submit an adoption application to the shelter. Provide necessary details to let them know you are the right fit."
              : "Add details of pets in your shelter to make them visible to potential adopters. Help these pets find loving homes by providing accurate information."}
          </p>
        </div>

        <div class="guide-div">
          <h2>
            ${Auth.currentUser.accessLevel == 1
              ? "3. View Your Applications"
              : "3. View Existing Pets"}
          </h2>
          <p>
            ${Auth.currentUser.accessLevel == 1
              ? "Track the status of your applications. Check for updates on approvals and get ready to welcome your new pet into your home!"
              : "Monitor the pets in your shelter. Ensure their profiles are up-to-date and attractive to potential adopters searching for their new companions."}
          </p>
        </div>

        <div class="guide-div">
          <h2>
            ${Auth.currentUser.accessLevel == 1
              ? "4. Edit Your Profile"
              : "4. Edit Shelter Profile"}
          </h2>
          <p>
            ${Auth.currentUser.accessLevel == 1
              ? "Keep your information up-to-date. Edit your profile to ensure shelters have the right details to consider your applications."
              : "Keep your shelter's information current. Edit your profile to provide accurate details and build trust with potential pet owners."}
          </p>
        </div>

        <div class="guide-div-last">
          <sl-button variant="primary" @click=${this.handleGuideBtn}
            >Let's start!</sl-button
          >
        </div>
      </div>
    `;
    render(template, App.rootEl);
  }
}

export default new GuideView();
