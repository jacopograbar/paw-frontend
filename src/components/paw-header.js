import { LitElement, html, css } from "@polymer/lit-element";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../services/Auth";
import App from "../App";

customElements.define(
  "paw-header",
  class AppHeader extends LitElement {
    constructor() {
      super();
      this.pathName = window.location.pathname.split("/")[1];
    }

    static get properties() {
      return {
        title: {
          type: String,
        },
        user: {
          type: Object,
        },
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    render() {
      return html`
        <style>
          .app-header {
            height: 100px;
            width: 97%;
            position: absolute;
            z-index: 10;
            text-align: right;
            padding-right: 3%;
            padding-top: 1%;
            color: white;
          }

          #side-link {
            position: absolute;
            z-index: 10;
            height: 300px;
            width: 370px;
            background-color: white;
            border-radius: 50%;
            border: 10px solid black;
            left: -130px;
            top: -140px;
          }

          .app-top-nav {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }

          .app-top-nav img {
            width: 35%;
            position: absolute;
            bottom: 10px;
            right: 80px;
          }

          #side-link:hover {
            transform: scale(1.03);
            transition: transform 0.35s ease-out;
          }

          .header-link {
            color: #f8b102;
            text-decoration: none;
          }

          p {
            font-size: 20px;
          }

          sl-avatar {
            margin-left: 20px;
          }

          @media (max-width: 481px) {
            #side-link {
              width: 200px;
              height: 150px;
              left: -90px;
              top: -50px;
            }

            p{
              color: transparent;
            }

            .app-top-nav img {
              bottom: 15px;
              right: 40px;
            }
          }
        </style>
        <header class="app-header">
          <a id="side-link" href="/" @click="${anchorRoute}">
            <nav class="app-top-nav">
              <img src="../images/paw_logo.png" />
            </nav>
          </a>
          ${this.user
            ? html`<p>
                Hi, ${this.user.name}
                <sl-avatar
                  image="${App.apiBase}/images/${this.user.profilePic}"
                ></sl-avatar>
              </p> `
            : html``}
          ${this.user &&
          this.user.accessLevel == 1 &&
          this.pathName != "my-applications"
            ? html` <a class="header-link" href="/my-applications"
                  >My Applications</a
                ><br />`
            : html``}
          ${this.user && this.pathName != "edit-profile"
            ? html`<a class="header-link" href="/edit-profile">Edit Profile</a
                ><br />`
            : html``}
          ${this.user &&
          this.user.accessLevel == 1 &&
          this.pathName != "dashboard"
            ? html`<a class="header-link" href="/dashboard/seeker">Dashboard</a
                ><br />`
            : html``}
          ${this.user &&
          this.user.accessLevel == 2 &&
          this.pathName != "dashboard"
            ? html`<a class="header-link" href="/dashboard/shelter">Dashboard</a
                ><br />`
            : html``}
          ${this.user
            ? html`<a class="header-link" href="" @click=${Auth.signOut}
                >Log out</a
              >`
            : html``}
        </header>
      `;
    }
  }
);
