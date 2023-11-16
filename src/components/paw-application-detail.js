import { LitElement, html, css } from "@polymer/lit-element";
import { anchorRoute, gotoRoute } from "../Router";
import Auth from "../services/Auth";
import App from "../App";

customElements.define(
  "paw-application-detail",
  class PawApplicationDetail extends LitElement {
    constructor() {
      super();
    }

    static get properties() {
      return {
        application: {
          type: Object,
        },
      };
    }

    firstUpdated() {
      super.firstUpdated();
    }

    render() {
      return html`
        <style></style>
        <sl-details summary="First">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </sl-details>
      `;
    }
  }
);
