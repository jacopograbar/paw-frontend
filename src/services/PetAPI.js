import App from "../App";
import Router, { gotoRoute } from "../Router";
import splash from "../views/partials/splash";
import { html, render } from "lit-html";
import Toast from "../Toast";

class PetAPI {
  async getPets() {
    // fetch the json data
    const response = await fetch(`${App.apiBase}/pet`, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem fetching pets");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }

  async getPetById(id) {
    // fetch the json data
    const response = await fetch(`${App.apiBase}/pet/${id}`, {
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

  async createPet(petData) {
    // validate
    if (!petData) return;

    console.log("PET DATA: ", petData);

    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/pet`, {
      method: "POST",
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      body: petData,
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem creating pet");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }
}

export default new PetAPI();
