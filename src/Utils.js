import gsap from "gsap";

class Utils {
  isMobile() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth <= 768) {
      return true;
    } else {
      return false;
    }
  }

  pageIntroAnim() {
    const pageContent = document.querySelector(".page-animation");
    if (!pageContent) return;
    gsap.fromTo(
      pageContent,
      { opacity: 1 },
      { opacity: 0, ease: "ease-in-out", zIndex: -1, duration: 2 }
    );
  }

  // Generates string of diseases to display on the pet page
  getDiseaseString(diseases) {
    let string = "";

    if (diseases.length == 0) string = "No genetic or heart diseases";
    else {
      string += "This pet suffers from ";
      for (let i = 0; i < diseases.length; i++) {
        string += diseases[i];

        if (i < diseases.length - 2) string += ", ";
        if (i < diseases.length - 1 && i >= diseases.length - 2)
          string += " and ";
      }
    }

    return string;
  }

  // Generates string describing pet friendliness
  getFriendlinessString(rating) {
    let string = "";

    switch (parseInt(rating)) {
      case 0:
        string = "Severe behavioural issues. Experienced pet owners only.";
        break;
      case 1:
        string = "Mild behavioural issues. Experienced pet owners only.";
        break;
      case 2:
        string =
          "Not very friendly. Some previous experience with pets needed.";
        break;
      case 3:
        string =
          "Good behaviour, but some temperamental issues. Some previous experience with pets advised.";
        break;
      case 4:
        string = "Friendly pet. Suitable for families and new pet owners.";
        break;
      case 5:
        string =
          "Very friendly pet. Suitable for kids, families and unexperienced pet owners.";
    }

    return string;
  }


  // Capitalise first letter of a string
  capitaliseFirstLetter(str) {
    const capitalise = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalise;
  }
}

export default new Utils();
