import { LitElement, html, css } from "@polymer/lit-element";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../Auth";
import App from "../App";

customElements.define(
  "paw-header",
  class AppHeader extends LitElement {
    constructor() {
      super();
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
      this.navActiveLinks();
    }

    navActiveLinks() {
      const currentPath = window.location.pathname;
      const navLinks = this.shadowRoot.querySelectorAll(
        ".app-top-nav a, .app-side-menu-items a"
      );
      navLinks.forEach((navLink) => {
        if (navLink.href.slice(-1) == "#") return;
        if (navLink.pathname === currentPath) {
          navLink.classList.add("active");
        }
      });
    }

    hamburgerClick() {
      const appMenu = this.shadowRoot.querySelector(".app-side-menu");
      appMenu.show();
    }

    menuClick(e) {
      e.preventDefault();
      const pathname = e.target.closest("a").pathname;
      const appSideMenu = this.shadowRoot.querySelector(".app-side-menu");
      // hide appMenu
      appSideMenu.hide();
      appSideMenu.addEventListener("sl-after-hide", () => {
        // goto route after menu is hidden
        gotoRoute(pathname);
      });
    }

    render() {
      return html`
        <style>
          .app-header {
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

          .app-header:hover {
            transform: scale(1.03);
            transition: transform 0.35s ease-out;
          }
        </style>
        <header class="app-header">
          <nav class="app-top-nav">
            <a href="/" @click="${anchorRoute}">
              <img src="../images/paw_logo.png" />
            </a>
          </nav>
        </header>
      `;
    }
  }
);
