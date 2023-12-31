import App from "../App";

class UserAPI {
  async updateUser(userId, userData) {
    // validate
    if (!userId || !userData) return;

    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/user/${userId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
      body: userData,
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem updating user");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }

  async updateUserStatus(userId) {
    // validate
    if (!userId) return;

    // make fetch request to backend
    const response = await fetch(`${App.apiBase}/user/status/${userId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem updating user");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }

  async getUser(userId) {
    // validate
    if (!userId) return;

    // fetch the json data
    const response = await fetch(`${App.apiBase}/user/${userId}`, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem getting user");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }

  async getUserListByAccessLevel(accessLevel) {
    // validate
    if (!accessLevel) return;

    // fetch the json data
    const response = await fetch(`${App.apiBase}/user/list/${accessLevel}`, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

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

  async getProfileById(id) {
    // fetch the json data
    const response = await fetch(`${App.apiBase}/user/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.accessToken}` },
    });

    // if response not ok
    if (!response.ok) {
      // console log error
      const err = await response.json();
      if (err) console.log(err);
      // throw error (exit this function)
      throw new Error("Problem fetching profile data");
    }

    // convert response payload into json - store as data
    const data = await response.json();

    // return data
    return data;
  }
}

export default new UserAPI();
