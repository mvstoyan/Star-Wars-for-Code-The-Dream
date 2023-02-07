"use strict";

// ---- SWAPI api ----
const filmsContainer = document.querySelector("#films");
const charactersContainer = document.querySelector("#characters");
const characterInfoContainer = document.querySelector("#character-info");

  // Fetch the list of films
  fetch("https://swapi.dev/api/films/")
    .then((res) => res.json())
    .then((data) => {
      // Display the list of films
      data.results.forEach((film) => {
        const button = document.createElement("button");
        button.innerText = film.title;
        button.addEventListener("click", () => {
          displayCharacters(film.characters);
        });
        filmsContainer.appendChild(button);
      });
    });

  // Display the list of characters for a selected film
  const displayCharacters = (characters) => {
    charactersContainer.innerHTML = "";
    characters.forEach((character) => {
      fetch(character)
        .then((res) => res.json())
        .then((data) => {
          const button = document.createElement("button");
          button.innerText = data.name;
          button.addEventListener("click", () => {
            displayCharacterInfo(data);
          });
          charactersContainer.appendChild(button);
        });
    });
  };

  // Display information about a selected character
  const displayCharacterInfo = (character) => {
    characterInfoContainer.innerHTML = "";
    const name = document.createElement("h2");
    name.innerText = character.name;
    characterInfoContainer.appendChild(name);

    const height = document.createElement("p");
    height.innerText = `Height: ${character.height}`;
    characterInfoContainer.appendChild(height);

    const mass = document.createElement("p");
    mass.innerText = `Mass: ${character.mass}`;
    characterInfoContainer.appendChild(mass);

    const gender = document.createElement("p");
    gender.innerText = `Gender: ${character.gender}`;
    characterInfoContainer.appendChild(gender);

    const hair_color = document.createElement("p");
    hair_color.innerText = `Hair color: ${character.hair_color}`;
    characterInfoContainer.appendChild(hair_color);

    const eye_color = document.createElement("p");
    eye_color.innerText = `Eye color: ${character.eye_color}`;
    characterInfoContainer.appendChild(eye_color);

    const birth_year = document.createElement("p");
    birth_year.innerText = `Birth year: ${character.birth_year}`;
    characterInfoContainer.appendChild(birth_year);
  };
// ---- particles.js ----

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });