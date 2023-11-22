import App from "../../App";
import { html, render } from "lit-html";
import { gotoRoute } from "../../Router";
import Auth from "../../services/Auth";
import Utils from "../../Utils";
import PetAPI from "../../services/PetAPI";
import Toast from "../../Toast";

class NewPetView {
  init() {
    document.title = "Add New Pet";
    this.shelter = Auth.currentUser;
    this.render();
    Utils.pageIntroAnim();
    this.checkFileListLength();
  }

  // Provide user with feedback when they try to upload more than 5 images.
  checkFileListLength() {
    const fileInput = document.getElementById("images");

    fileInput.addEventListener("change", (event) => {
      const files = event.target.files;

      if (files.length > 5) {
        alert("A maximum of 5 images are allowed");
        fileInput.value = "";
        return;
      }

      if (files.length < 2) {
        alert("A minimum of 2 images is required");
        fileInput.value = "";
        return;
      }
    });
  }

  // Handle creation of a new pet object
  async submitHandler(event) {
    event.preventDefault();
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.setAttribute("loading", "");

    // Wait for controls to be defined before attaching form listeners
    await Promise.all([
      customElements.whenDefined("sl-button"),
      customElements.whenDefined("sl-input"),
      customElements.whenDefined("sl-option"),
      customElements.whenDefined("sl-select"),
      customElements.whenDefined("sl-textarea"),
    ]).then(async () => {
      const form = document.querySelector(".signup-form");
      const formData = new FormData(form);
      try {
        const newPet = await PetAPI.createPet(formData);
        console.log("CREATED: ", newPet);
        Toast.show("Pet successfully added!");
        gotoRoute("/dashboard/shelter");
      } catch (err) {
        Toast.show(err, "error");
      } finally {
        submitBtn.removeAttribute("loading");
      }
    });
  }

  render() {
    const template = html`
      <paw-header
        user="${JSON.stringify(Auth.currentUser)}"
        title="Add new pet"
      ></paw-header>
      <div class="signup-page" id="add-pet">
        <div class="paw-main">
          <img
            src="${
              this.shelter.profilePic
                ? `${App.apiBase}/images/${this.shelter.profilePic}`
                : `${App.apiBase}/images/default.jpg`
            }"
            alt="${this.shelter.name}"
          />
        </div>
        <div class="signup-overlay">
          <h1>Add New Pet</h1>
          <form class="signup-form" @submit=${this.submitHandler}>
            <input name="shelter" value="${this.shelter._id}" type="hidden" />
            <div class="signup-column">
              <div class="input-group">
                <sl-input
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter pet name..."
                  required
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-select
                  name="petType"
                  label="Is this a cat or a dog?"
                  placeholder="Select one of the options"
                  clearable
                  required
                >
                  <sl-option value="cat">Cat</sl-option>
                  <sl-option value="dog">Dog</sl-option>
                </sl-select>
              </div>
              <div class="input-group">
                <sl-input
                  name="breed"
                  placeholder="Enter pet's breed (if any)"
                  label="Breed"
                  required
                ></sl-input>
              </div>
              <div class="input-group">
                <sl-select
                  name="age"
                  label="Age"
                  placeholder="How old is your pet?"
                  clearable
                  required
                >
                  <sl-option value="0">Under 1 year old</sl-option>
                  <sl-option value="1">1 year old</sl-option>
                  <sl-option value="2">2 years old</sl-option>
                  <sl-option value="3">3 years old</sl-option>
                  <sl-option value="4">4 years old</sl-option>
                  <sl-option value="5">5 years old</sl-option>
                  <sl-option value="6">6 years old</sl-option>
                  <sl-option value="7">7 years old</sl-option>
                  <sl-option value="8">8 years old</sl-option>
                  <sl-option value="9">9 years old</sl-option>
                  <sl-option value="10">10 years old</sl-option>
                  <sl-option value="11">11 years old</sl-option>
                  <sl-option value="12">12 years old</sl-option>
                  <sl-option value="13">13 years old</sl-option>
                  <sl-option value="14">14 years old</sl-option>
                  <sl-option value="15">15 years old</sl-option>
                  <sl-option value="16">16 years old</sl-option>
                  <sl-option value="17">17 years old</sl-option>
                  <sl-option value="18">18 years old</sl-option>
                  <sl-option value="19">19 years old</sl-option>
                  <sl-option value="20">20 years old</sl-option>
                </sl-select>
              </div>
              <div class="input-group">
                <sl-select
                  name="diseases"
                  label="Does this pet suffer from any genetic/heart disease?"
                  placeholder="Select any option that applies, or leave empty"
                  clearable
                  multiple
                >
                  <small>Cats</small>
                  <sl-option value="HCM"
                    >Hypertrophic Cardiomyopathy (HCM)</sl-option
                  >
                  <sl-option value="PKD"
                    >Polycystic Kidney Disease (PKD)</sl-option
                  >
                  <sl-option value="PRA"
                    >Progressive Retinal Atrophy (PRA)</sl-option
                  >
                  <sl-option value="FIV"
                    >Feline Immunodeficiency Virus (FIV)</sl-option
                  >
                  <sl-option value="FeLV"
                    >Feline Leukemia Virus (FeLV)</sl-option
                  >
                  <sl-divider></sl-divider>
                  <small>Dogs</small>
                  <sl-option value="DCM"
                    >Dilated Cardiomyopathy (DCM)</sl-option
                  >
                  <sl-option value="HD">Hip Dysplasia</sl-option>
                  <sl-option value="MVD"
                    >Mitral Valve Disease (MVD)</sl-option
                  >
                  <sl-option value="CEA"
                    >Collie Eye Anomaly (CEA)</sl-option
                  >
                  <sl-option value="DM"
                    >Canine Degenerative Myelopathy (DM)</sl-option
                  >
                </sl-select>
              </div>
            </div>
            <div class="signup-column">
              <div class="input-group">
                <sl-select
                  name="vaccinated"
                  label="Vaccination status"
                  placeholder="Select vaccination status"
                  clearable
                  required
                >
                  <sl-option value="true">Fully vaccinated</sl-option>
                  <sl-option value="false"
                    >Missing some compulsory vaccinations</sl-option
                  >
                </sl-select>
              </div>
              <div class="input-group">
                <sl-select
                  name="gender"
                  label="Gender"
                  placeholder="Select gender"
                  clearable
                  required
                >
                  <sl-option value="M">Male</sl-option>
                  <sl-option value="F">Female</sl-option>
                </sl-select>
              </div>
              <div class="input-group">
                <sl-select
                  name="friendliness"
                  label="How friendly is this pet?"
                  placeholder="Select one of the options"
                  clearable
                  required
                >
                  <sl-option value="0">Severe behavioural issues</sl-option>
                  <sl-option value="1">Mild behavioural issues</sl-option>
                  <sl-option value="2">Not very friendly</sl-option>
                  <sl-option value="3">Good behaviour</sl-option>
                  <sl-option value="4">Friendly</sl-option>
                  <sl-option value="5">Very friendly</sl-option>
                </sl-select>
              </div>
              <div class="input-group">
                <sl-textarea
                  name="notes"
                  rows="2"
                  resize="none"
                  placeholder="Write any additional notes about the pet here"
                  label="Additional notes"
                ></sl-textarea>
              </div>
              <div class="input-group">
                <label><strong>Images *</strong></label><br />
                <label>Select a minimum of 2 and maximum of 5 images</label><br />
                <input
                  type="file"
                  id="images"
                  name="images"
                  multiple
                  required
                />
              <div class="signup-submit-area">
                <sl-button type="submit" variant="primary" class="submit-btn"
                  >Add pet</sl-button
                >
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="page-animation black"></div>
    `;
    render(template, App.rootEl);
  }
}

export default new NewPetView();
