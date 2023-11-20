import { LitElement, html, css } from "@polymer/lit-element";
import { render } from "lit-html";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../services/Auth";
import App from "../App";
import Toast from "../Toast";
import dayjs from "dayjs";
import ApplicationsAPI from "../services/ApplicationsAPI";

customElements.define(
  "paw-applicationcard",
  class ApplicationCard extends LitElement {
    constructor() {
      super();
    }

    static get properties() {
      return {
        id: {
          type: String,
        },
        date: {
          type: Date,
        },
        status: {
          type: String,
        },
        pet: {
          type: Object,
        },
        applicant: {
          type: Object,
        },
        shelter: {
          type: Object,
        },
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    redirectToApplicationPage() {
      gotoRoute(`/review/${this.id}`);
    }

    render() {
      return html`
        <style>
          .application-card {
            width: 22vw;
            height: 65vh;
            min-height: 500px;
            background-color:#f8b102;
            border-radius: 40px;
            position: relative;
          }

          .card-body {
            height: 95%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            gap: 2%;
            padding-bottom: 5%;
          }

          .card-body p{
            margin: 0;
          }

          .card-body h2{
            margin: 0 0 3% 0;
          }


          .card-image{
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            border: solid 1.5vw #f8b102;
          }

          .card-image img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .pet{
            width: 11vw;
            height: 11vw;
            right: -10%;
            top: 18%;
          }

          .applicant{
            width: 18vw;
            height: 18vw;
            top: -10%;
            left: -10%;
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
        </style>
        <div class="application-card">
          <div class="card-image applicant">
            <img src="${this.applicant.profilePic}" alt="${
        this.applicant.name
      }" />
          </div>
          <div class="card-image pet">
            <img src="${this.pet.images[0]}" alt="${this.pet.name}" />
          </div>
          <div class="card-body">
            <h2>${this.status == 2 ? "Pending" : ""} ${
        this.status == 1 ? "Rejected" : ""
      } ${this.status == 3 ? "Approved" : ""}Application</h2>
            <p>${this.applicant.name} x ${this.pet.name}</p>
            <p>Lodged on ${dayjs(this.date).format("DD/MM/YYYY")}</p>
            <sl-button @click=${this.redirectToApplicationPage.bind(
              this
            )}>Review</sl-button>
          </div>
          </div>
        </div>
      `;
    }
  }
);
