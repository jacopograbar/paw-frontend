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
          "https://m.media-amazon.com/images/I/51shStdlnOL._AC_UF894,1000_QL80_.jpg",
          "https://i.insider.com/5e6a17ad235c187b2a5b26d3?width=750&format=jpeg&auto=webp",
          "https://p.turbosquid.com/ts-thumb/mP/Z6QRhz/cx/sphynx_pink_pose1_main_12/png/1617876850/600x600/fit_q87/60d3cb0f666bf22d2bf5bcf390056ffcfc3efa45/sphynx_pink_pose1_main_12.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL12y1T-beM2zyuxvrE3WEBkXO1kCPFaywg&usqp=CAU",
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

  createDummyShelterObjects() {
    const shelters = [
      {
        _id: "1000",
        name: "First Shelter",
        email: "first@email.com",
        state: "NSW",
        address: "Some St 29, Whoo How",
        bio: "Some bio for this amazing animal shelter",
        animals: ["Cats", "Dogs"],
        profilePic:
          "https://cdn.vox-cdn.com/thumbor/v9ksZRhgha_kZsrjZkR0iCD8DB8=/0x0:4189x2608/1200x800/filters:focal(1766x853:2436x1523)/cdn.vox-cdn.com/uploads/chorus_image/image/72548864/GettyImages_1401741294.0.jpg",
      },
      {
        _id: "1001",
        name: "Second Shelter",
        email: "second@email.com",
        state: "NSW",
        address: "Some Other St 11, Whoo How",
        bio: "Some bio for this amazing animal shelter",
        animals: ["Cats", "Dogs"],
        profilePic:
          "https://blog.adobe.com/en/publish/2021/10/19/media_16dc563cf8f4cafb81a1011a270c4c7919f09f0b2.png?width=750&format=png&optimize=medium",
      },
      {
        _id: "1002",
        name: "Third Shelter",
        email: "third@email.com",
        state: "NSW",
        address: "Check This St 9, Pow Pow",
        bio: "Some bio for this amazing animal shelter",
        animals: ["Cats", "Dogs"],
        profilePic:
          "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1651153661.2751184/a-day-in-the-life-of-an-animal-shelter-volunteer.png",
      },
      {
        _id: "1003",
        name: "Fourth Shelter",
        email: "fourth@email.com",
        state: "VIC",
        address: "Bundee St 22, Pooville",
        bio: "Some bio for this amazing animal shelter",
        animals: ["Cats", "Dogs"],
        profilePic:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPolgpou1Vm9LDN1QvMTebttl4qre9KNUMzlhTQQI9hS4qbLY5yYcCGLPsvUBa14AbNY&usqp=CAU",
      },
    ];

    return shelters;
  }
}

export default new Utils();
