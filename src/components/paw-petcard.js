import { LitElement, html, css } from "@polymer/lit-element";
import { render } from "lit-html";
import { anchorRoute, gotoRoute } from "./../Router";
import Auth from "../services/Auth";
import App from "./../App";
import Toast from "../Toast";

customElements.define(
  "paw-petcard",
  class PetCard extends LitElement {
    constructor() {
      super();
      this.catImgURL = "../images/cat.png";
      this.dogImgURL = "../images/dog.png";
      this.femaleURL = "../images/female.png";
      this.maleURL = "../images/male.png";
    }

    static get properties() {
      return {
        id: {
          type: String,
        },
        name: {
          type: String,
        },
        petType: {
          type: String,
        },
        breed: {
          type: String,
        },
        age: {
          type: String,
        },
        gender: {
          type: String,
        },
        image: {
          type: String,
        },
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    redirectToPetPage() {
      gotoRoute(`/pet/${this.id}`);
    }

    render() {
      return html`
        <style>
          .pet-card {
            width: 23vw;
            max-width: 400px;
            height: 70vh;
            min-height: 520px;
            max-height: 750px;
            background-color: #d0cfec;
            overflow: hidden;
            border-radius: 40px;
            box-shadow: 20px 20px 1px #f8b102;
          }

          .card-image-wrapper {
            height: 55%;
            width: 100%;
          }

          .card-image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .pet-card-body {
            height: 45%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5%;
          }

          .pet-card-body p,
          .badges-row {
            margin: 0 0 3% 0;
          }
          .pet-card-body h2 {
            margin: 0;
          }

          .badges-row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 10%;
          }

          sl-avatar {
            --size: 3.5vw;
            border: solid 0.3vw black;
            border-radius: 50%;
          }

          #first::part(base) {
            background-color: #f8b102;
          }

          #second::part(base) {
            background-color: black;
          }

          #avatar-pic {
            width: 2.5vw;
          }

          sl-button::part(base) {
            background-color: black;
            color: white;
            border: 0;
            box-shadow: 0 2px 10px #0002;
          }

          sl-button::part(base):hover {
            color: #f8b102;
          }

          @media (max-width: 1100px) {
            .pet-card {
            width: 30vw;
            max-width: 350px;
            max-height: 500px;
            min-height: 70%;
          }


          @media (max-width: 690px) {
            .pet-card {
            width: 50vw;
            max-height: 450px;
            min-height: 60%;
          }
          sl-avatar {
            --size: 30px;
            border: solid 0.3vw black;
            border-radius: 50%;
          }


          #avatar-pic {
            width: 20px;
          }
          }
        </style>
        <div class="pet-card">
          <div class="card-image-wrapper">
            <img src="${App.apiBase}/images/${this.image}" alt="${this.name}" />
          </div>
          <div class="pet-card-body">
            <h2>${this.name}</h2>
            <p>
              ${this.age} ${this.age == 1 ? "year" : "years"} old ${this.breed}
            </p>
            <div class="badges-row">
              <sl-avatar id="first" label="${this.petType}">
                <img
                  slot="icon"
                  id="avatar-pic"
                  src="${this.petType == "cat"
                    ? this.catImgURL
                    : this.dogImgURL}"
                />
              </sl-avatar>
              <sl-avatar id="second" label="${this.gender}">
                <img
                  slot="icon"
                  id="avatar-pic"
                  src="${this.gender == "M" ? this.maleURL : this.femaleURL}"
                />
              </sl-avatar>
            </div>
            <sl-button @click=${this.redirectToPetPage.bind(this)}
              >Meet ${this.name}</sl-button
            >
          </div>
        </div>
      `;
    }
  }
);
