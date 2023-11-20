import { LitElement, html, css } from "@polymer/lit-element";
import { render } from "lit-html";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../services/Auth";
import App from "../App";
import Toast from "../Toast";

customElements.define(
  "paw-sheltercard",
  class ShelterCard extends LitElement {
    constructor() {
      super();
    }

    static get properties() {
      return {
        id: {
          type: String,
        },
        image: {
          type: String,
        },
        name:{
          type: String,
        },
        state:{
          type: String,
        },
        address:{
          type: String,
        },
        bio:{
          type: String,
        }
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    redirectToPetPage() {
      alert("test");
    }

    render() {
      return html`
        <style>
          .shelter-card {
            width: 22vw;
            height: 65vh;
            min-height: 550px;
            background-color:#f8b102;
            border-radius: 40px;
            position: relative;
          }

          .card-body {
            height: 90%;
            width: 96%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            text-align: center;
            gap: 5%;
            padding: 5% 2%;
          }

          .card-body p {
            margin: 0;
          }

          .card-body h2 {
            margin: 0 0 3% 0;
          }

          .card-image {
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            border: solid 1.5vw #f8b102;
            width: 15vw;
            height: 15vw;
            right: -10%;
            top: -6%;
          }

          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          sl-button::part(base) {
            background-color: black;
            color: white;
            border: 0;
            box-shadow: 0 2px 10px #0002;
            margin-top: 30%;
          }

          sl-button::part(base):hover {
            color: #f8b102;
          }

          #location-pin{
            width: 20px;
            margin-right: 5px;
          }
        </style>
        <div class="shelter-card">
          <div class="card-image">
            <img src="${this.image}" alt="${this.name}" />
          </div>
          <div class="card-body">
            <h2>${this.name}</h2>
            <p><img src="../images/location-pin.png" id="location-pin" alt="Location Pin" />${this.address}, ${this.state}</p>
            <p>${this.bio}</p>
            <sl-button @click=${this.redirectToPetPage.bind(this)}
              >View</sl-button
            >
          </div>
        </div>
      `;
    }
  }
);
