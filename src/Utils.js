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
    const applications = [
      {
        _id: "01",
        status: "2",
        date: "30/10/2023",
        pet: {
          _id: "300",
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
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1001",
          name: "Ryan Borges",
          email: "ryabb@email.com",
          state: "NSW",
          bio: "This is Ryan's bio",
          animals: ["Cats", "Birds"],
          image:
            "https://i.pinimg.com/originals/60/66/8a/60668aa7d780b6c19684ccbfa0bf320c.jpg",
        },
      },
      {
        _id: "02",
        status: "2",
        date: "21/10/2023",
        pet: {
          _id: "200",
          name: "Rugas",
          petType: "cat",
          breed: "Sphynx",
          age: "2",
          gender: "M",
          vaccinated: true,
          friendliness: "4",
          diseases: [],
          images: [
            "https://i.ebayimg.com/images/g/LJUAAOSwFcVfHrSa/s-l1200.webp",
          ],
          notes: "Great pet",
        },
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1000",
          name: "John Doe",
          email: "johnd@email.com",
          state: "NSW",
          bio: "This is John's bio",
          animals: ["Cats", "Dogs"],
          image:
            "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwcGVvcGxlfGVufDB8fDB8fHww",
        },
      },
      {
        _id: "03",
        status: "2",
        date: "12/09/2023",
        pet: {
          _id: "300",
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
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1000",
          name: "Coco Wood",
          email: "poo@email.com",
          state: "NSW",
          bio: "This is Coco's bio",
          animals: ["Cats", "Dogs", "Birds"],
          image:
            "https://3.img-dpreview.com/files/p/E~TS250x250~articles/7507411185/Screen_Shot_2014-03-19_at_11.31.27_AM.png",
        },
      },
      {
        _id: "01",
        status: "2",
        date: "30/10/2023",
        pet: {
          _id: "300",
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
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1001",
          name: "Ryan Borges",
          email: "ryabb@email.com",
          state: "NSW",
          bio: "This is Ryan's bio",
          animals: ["Cats", "Birds"],
          image:
            "https://i.pinimg.com/originals/60/66/8a/60668aa7d780b6c19684ccbfa0bf320c.jpg",
        },
      },
      {
        _id: "02",
        status: "2",
        date: "21/10/2023",
        pet: {
          _id: "200",
          name: "Rugas",
          petType: "cat",
          breed: "Sphynx",
          age: "2",
          gender: "M",
          vaccinated: true,
          friendliness: "4",
          diseases: [],
          images: [
            "https://i.ebayimg.com/images/g/LJUAAOSwFcVfHrSa/s-l1200.webp",
          ],
          notes: "Great pet",
        },
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1000",
          name: "John Doe",
          email: "johnd@email.com",
          state: "NSW",
          bio: "This is John's bio",
          animals: ["Cats", "Dogs"],
          image:
            "https://images.unsplash.com/photo-1525186402429-b4ff38bedec6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ybWFsJTIwcGVvcGxlfGVufDB8fDB8fHww",
        },
      },
      {
        _id: "03",
        status: "2",
        date: "12/09/2023",
        pet: {
          _id: "300",
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
        shelter: {
          _id: "100",
          name: "This Shelter",
        },
        adopter: {
          _id: "1000",
          name: "Coco Wood",
          email: "poo@email.com",
          state: "NSW",
          bio: "This is Coco's bio",
          animals: ["Cats", "Dogs", "Birds"],
          image:
            "https://3.img-dpreview.com/files/p/E~TS250x250~articles/7507411185/Screen_Shot_2014-03-19_at_11.31.27_AM.png",
        },
      },
    ];

    return applications;
  }
}

export default new Utils();
