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
    const pageContent = document.querySelector(".page-content");
    if (!pageContent) return;
    gsap.fromTo(
      pageContent,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 }
    );
  }

  createDummyPetObjects() {
    const pets = [
      {
        _id: "01",
        name: "Rugas",
        petType: "cat",
        breed: "Sphynx",
        age: "2",
        gender: "M",
        vaccinated: true,
        friendliness: "4",
        shelter: {
          id: "100",
          name: "This Shelter",
        },
        diseases: [],
        images: [
          "https://i.ebayimg.com/images/g/LJUAAOSwFcVfHrSa/s-l1200.webp",
        ],
        notes: "Great pet",
      },
      {
        _id: "02",
        name: "Pelosa",
        petType: "cat",
        breed: "Bengal",
        age: "1",
        gender: "F",
        vaccinated: true,
        friendliness: "3",
        shelter: {
          id: "100",
          name: "This Shelter",
        },
        diseases: [],
        images: [
          "https://cats.com/wp-content/uploads/2020/10/Bengal-cat-like-a-leopard-sneaks.jpg",
        ],
        notes: "So stunning",
      },
      {
        _id: "03",
        name: "Antares",
        petType: "dog",
        breed: "Border Collie",
        age: "5",
        gender: "M",
        vaccinated: true,
        friendliness: "5",
        shelter: {
          id: "100",
          name: "This Shelter",
        },
        diseases: [],
        images: [
          "https://www.rover.com/blog/wp-content/uploads/border-collie-min-1024x681.jpg",
        ],
        notes: "Handsome boi",
      },
    ];

    return pets;
  }

  createDummyApplicationObjects() {
    const pets = [
      {
        _id: "01",
        name: "Rugas",
        petType: "cat",
        breed: "Sphynx",
        age: "2",
        gender: "M",
        vaccinated: true,
        friendliness: "4",
        shelter: {
          id: "100",
          name: "This Shelter",
        },
        diseases: [],
        images: [
          "https://i.ebayimg.com/images/g/LJUAAOSwFcVfHrSa/s-l1200.webp",
        ],
        notes: "Great pet",
      },]
    }
}

export default new Utils();
