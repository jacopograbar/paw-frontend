import App from "../App";
import Router, { gotoRoute } from "../Router";
import splash from "../views/partials/splash";
import { html, render } from "lit-html";
import Toast from "../Toast";

class ApplicationsAPI {
  // works both for shelters and seekers (based on accessLevel in parameters)
  async getApplications(accessLevel, userID) {
    // validate
    if (!accessLevel || !userID) return;

    // fetch the json data
    const response = await fetch(
      `${App.apiBase}/application/${accessLevel}/${userID}`,
      {
        headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      }
    );

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem fetching user list");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }

  async getApplicationById(id) {
    // fetch the json data
    const response = await fetch(`${App.apiBase}/application/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem fetching pet data");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }
}

export default new ApplicationsAPI();
