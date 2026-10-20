window.TAB_SCENES=Object.assign(window.TAB_SCENES||{},{
  "test-campground": {
    "title": "Campground — Master Engine Test",
    "image": "images/talkabee-nighttime-campground-adventure.jpg",
    "lessons": [
      {
        "text": "Welcome to the campground!",
        "translations": {
          "es": "¡Bienvenidos al campamento!",
          "fr": "Bienvenue au camping !",
          "de": "Willkommen auf dem Campingplatz!",
          "it": "Benvenuti al campeggio!",
          "pt": "Bem-vindos ao acampamento!",
          "no": "Velkommen til campingplassen!"
        }
      },
      {
        "text": "Find the campfire.",
        "translations": {
          "es": "Encuentra la fogata.",
          "fr": "Trouve le feu de camp.",
          "de": "Finde das Lagerfeuer."
        }
      }
    ],
    "hotspots": [
      {
        "id": "fire",
        "label": "Campfire",
        "x": 60,
        "y": 63,
        "w": 15,
        "h": 22,
        "sound": "",
        "translations": {
          "es": "Fogata",
          "fr": "Feu de camp",
          "de": "Lagerfeuer",
          "it": "Falò",
          "pt": "Fogueira",
          "no": "Leirbål"
        }
      },
      {
        "id": "tent",
        "label": "Tent",
        "x": 33,
        "y": 59,
        "w": 18,
        "h": 25,
        "sound": "",
        "translations": {
          "es": "Tienda de campaña",
          "fr": "Tente",
          "de": "Zelt"
        }
      }
    ],
    "overlays": [],
    "challenges": [
      {
        "prompt": "Find the campfire",
        "target": "fire"
      },
      {
        "prompt": "Find the tent",
        "target": "tent"
      }
    ]
  },
  "test-forest": {
    "title": "Forest Walk — Second Engine Test",
    "image": "",
    "lessons": [
      {
        "text": "Welcome to the forest!",
        "translations": {
          "es": "¡Bienvenidos al bosque!",
          "fr": "Bienvenue dans la forêt !"
        }
      }
    ],
    "hotspots": [
      {
        "id": "tree",
        "label": "Tree",
        "x": 20,
        "y": 25,
        "w": 18,
        "h": 45,
        "sound": "",
        "translations": {
          "es": "Árbol",
          "fr": "Arbre"
        }
      },
      {
        "id": "bird",
        "label": "Bird",
        "x": 66,
        "y": 20,
        "w": 12,
        "h": 15,
        "sound": "",
        "translations": {
          "es": "Pájaro",
          "fr": "Oiseau"
        }
      }
    ],
    "overlays": [],
    "challenges": [
      {
        "prompt": "Find the tree",
        "target": "tree"
      },
      {
        "prompt": "Find the bird",
        "target": "bird"
      }
    ]
  },
  "boardwalk": {
    "title": "Boardwalk Adventure",
    "image": "images/boardwalk-adventure.jpg",
    "hotspots": [
      {
        "id": "ferris",
        "label": "Ferris wheel",
        "x": 47.39,
        "y": 9.94,
        "w": 12.46,
        "h": 22.52,
        "sound": "sounds/carnival.mp3",
        "translations": {
          "en": "Ferris wheel",
          "es": "noria",
          "fr": "grande roue",
          "de": "Riesenrad",
          "it": "ruota panoramica",
          "pt": "roda-gigante",
          "no": "pariserhjul"
        }
      },
      {
        "id": "carousel",
        "label": "Carousel",
        "x": 56,
        "y": 29.44,
        "w": 11.9,
        "h": 17.37,
        "sound": "sounds/circus.mp3",
        "translations": {
          "en": "carousel",
          "es": "carrusel",
          "fr": "carrousel",
          "de": "Karussell",
          "it": "giostra",
          "pt": "carrossel",
          "no": "karusell"
        }
      },
      {
        "id": "icecream",
        "label": "Ice cream stand",
        "x": 32,
        "y": 25,
        "w": 13,
        "h": 22,
        "sound": "sounds/ice-cream.mp3",
        "translations": {
          "en": "ice cream",
          "es": "helado",
          "fr": "glace",
          "de": "Eis",
          "it": "gelato",
          "pt": "sorvete",
          "no": "iskrem"
        }
      },
      {
        "id": "seagull",
        "label": "Seagull",
        "x": 74.8898507807042,
        "y": 11.09,
        "w": 9,
        "h": 13,
        "sound": "sounds/seagull.mp3",
        "translations": {
          "en": "seagull",
          "es": "gaviota",
          "fr": "mouette",
          "de": "Möwe",
          "it": "gabbiano",
          "pt": "gaivota",
          "no": "måke"
        }
      },
      {
        "id": "kite",
        "label": "Kite",
        "x": 85.52,
        "y": 2.46,
        "w": 9,
        "h": 16,
        "sound": "",
        "translations": {
          "en": "kite",
          "es": "cometa",
          "fr": "cerf-volant",
          "de": "Drachen",
          "it": "aquilone",
          "pt": "pipa",
          "no": "drage"
        }
      },
      {
        "id": "boardwalk",
        "label": "Boardwalk",
        "x": 51.11247231707059,
        "y": 70.472985279054,
        "w": 25.21,
        "h": 19.72,
        "sound": "sounds/carnival.mp3",
        "translations": {
          "en": "boardwalk",
          "es": "paseo marítimo",
          "fr": "promenade",
          "de": "Promenade",
          "it": "passeggiata",
          "pt": "calçadão",
          "no": "strandpromenade"
        }
      },
      {
        "id": "beach",
        "label": "Beach",
        "x": 84.35,
        "y": 65.76883344014934,
        "w": 15.65,
        "h": 11.33,
        "sound": "sounds/beach.mp3",
        "translations": {
          "en": "beach",
          "es": "playa",
          "fr": "plage",
          "de": "Strand",
          "it": "spiaggia",
          "pt": "praia",
          "no": "strand"
        }
      },
      {
        "id": "dog",
        "label": "dog",
        "x": 32.25,
        "y": 66.9,
        "w": 8.19,
        "h": 29.39,
        "sound": "sounds/dog.mp3",
        "translations": {
          "en": "dog",
          "es": "perro",
          "fr": "chien",
          "de": "Hund",
          "it": "cane",
          "pt": "cachorro",
          "no": "hund"
        }
      }
    ],
    "overlays": [],
    "lessons": [
      {
        "text": "We are at the boardwalk. Look at the rides and the ocean.",
        "translations": {
          "es": "Estamos en el paseo marítimo. Mira las atracciones y el océano.",
          "fr": "Nous sommes sur la promenade. Regarde les attractions et l’océan.",
          "de": "Wir sind an der Strandpromenade. Schau dir die Fahrgeschäfte und den Ozean an.",
          "it": "Siamo sul lungomare. Guarda le giostre e l’oceano.",
          "pt": "Estamos no calçadão. Olhe os brinquedos e o oceano.",
          "no": "Vi er på strandpromenaden. Se på karusellene og havet."
        }
      },
      {
        "text": "Which ride would you like? I would like the Ferris wheel.",
        "translations": {
          "es": "¿En qué atracción te gustaría subir? Me gustaría subir a la noria.",
          "fr": "Quel manège voudrais-tu faire ? Je voudrais faire de la grande roue.",
          "de": "Welches Fahrgeschäft möchtest du fahren? Ich möchte mit dem Riesenrad fahren.",
          "it": "Su quale giostra vorresti andare? Vorrei andare sulla ruota panoramica.",
          "pt": "Em qual brinquedo você gostaria de ir? Eu gostaria de ir na roda-gigante.",
          "no": "Hvilken attraksjon vil du prøve? Jeg vil gjerne ta pariserhjulet."
        }
      },
      {
        "text": "Would you like ice cream or popcorn? I would like ice cream, please.",
        "translations": {
          "es": "¿Quieres helado o palomitas? Quiero helado, por favor.",
          "fr": "Veux-tu une glace ou du pop-corn ? Je voudrais une glace, s’il vous plaît.",
          "de": "Möchtest du Eis oder Popcorn? Ich möchte Eis, bitte.",
          "it": "Vuoi un gelato o dei popcorn? Vorrei un gelato, per favore.",
          "pt": "Você quer sorvete ou pipoca? Eu gostaria de sorvete, por favor.",
          "no": "Vil du ha iskrem eller popkorn? Jeg vil gjerne ha iskrem, takk."
        }
      },
      {
        "text": "Let’s walk to the beach. Bring the umbrella and surfboard.",
        "translations": {
          "es": "Vamos a caminar hasta la playa. Trae la sombrilla y la tabla de surf.",
          "fr": "Allons jusqu’à la plage. Apporte le parasol et la planche de surf.",
          "de": "Gehen wir zum Strand. Bring den Sonnenschirm und das Surfbrett mit.",
          "it": "Andiamo alla spiaggia. Porta l’ombrellone e la tavola da surf.",
          "pt": "Vamos caminhar até a praia. Traga o guarda-sol e a prancha de surfe.",
          "no": "La oss gå til stranden. Ta med parasollen og surfebrettet."
        }
      },
      {
        "text": "Where is the lifeguard? The lifeguard tower is by the ocean.",
        "translations": {
          "es": "¿Dónde está el salvavidas? La torre de salvavidas está junto al océano.",
          "fr": "Où est le sauveteur ? La tour du sauveteur est près de l’océan.",
          "de": "Wo ist der Rettungsschwimmer? Der Rettungsschwimmerturm steht am Ozean.",
          "it": "Dov’è il bagnino? La torre del bagnino è vicino all’oceano.",
          "pt": "Onde está o salva-vidas? A torre do salva-vidas fica perto do oceano.",
          "no": "Hvor er badevakten? Badevaktstårnet står ved havet."
        }
      },
      {
        "text": "What do you see? I see a bicycle, a kite, and a seagull.",
        "translations": {
          "es": "¿Qué ves? Veo una bicicleta, una cometa y una gaviota.",
          "fr": "Qu’est-ce que tu vois ? Je vois un vélo, un cerf-volant et une mouette.",
          "de": "Was siehst du? Ich sehe ein Fahrrad, einen Drachen und eine Möwe.",
          "it": "Che cosa vedi? Vedo una bicicletta, un aquilone e un gabbiano.",
          "pt": "O que você vê? Eu vejo uma bicicleta, uma pipa e uma gaivota.",
          "no": "Hva ser du? Jeg ser en sykkel, en drage og en måke."
        }
      }
    ],
    "challenges": [
      {
        "prompt": "Find the Ferris Wheel",
        "target": "ferris"
      },
      {
        "prompt": "Find the Carousel",
        "target": "carousel"
      },
      {
        "prompt": "Find the Lifeguard Tower",
        "target": "lifeguard"
      },
      {
        "prompt": "Find the Kite",
        "target": "kite"
      },
      {
        "prompt": "Find the Ice Cream",
        "target": "icecream"
      },
      {
        "prompt": "Find the Dog",
        "target": "dog"
      }
    ]
  },
  "observation-deck": {
    "title": "Observation Deck",
    "image": "images/talkabee-observation-deck-adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "city",
        "label": "city",
        "x": 0,
        "y": 30,
        "w": 46,
        "h": 48,
        "sound": "",
        "translations": {}
      },
      {
        "id": "ferry",
        "label": "ferry",
        "x": 44.26,
        "y": 50.47,
        "w": 8,
        "h": 7,
        "sound": "sounds/boat-horn.mp3",
        "translations": {}
      },
      {
        "id": "mountain",
        "label": "mountain",
        "x": 31,
        "y": 29,
        "w": 14,
        "h": 12,
        "sound": "",
        "translations": {}
      },
      {
        "id": "railing",
        "label": "railing",
        "x": 39.98,
        "y": 69.99,
        "w": 17.62,
        "h": 6.11,
        "sound": "",
        "translations": {}
      },
      {
        "id": "sky",
        "label": "sky",
        "x": 0,
        "y": 0,
        "w": 25.23,
        "h": 23.63,
        "sound": "",
        "translations": {}
      },
      {
        "id": "buildings",
        "label": "buildings",
        "x": 0,
        "y": 42,
        "w": 35,
        "h": 43,
        "sound": "",
        "translations": {}
      },
      {
        "id": "viewer-telescope",
        "label": "viewer telescope",
        "x": 58.98,
        "y": 33,
        "w": 6.26,
        "h": 66.3,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "dinosaur-museum": {
    "title": "Dinosaur Museum",
    "image": "images/talkabee-dinosaur-museum-adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "trex",
        "label": "trex",
        "x": 28.37,
        "y": -1.56,
        "w": 23.91,
        "h": 33.67,
        "sound": "sounds/dinosaur.mp3",
        "translations": {}
      },
      {
        "id": "triceratops",
        "label": "triceratops",
        "x": 83.31,
        "y": 27.85,
        "w": 18.61,
        "h": 28.56,
        "sound": "sounds/dinosaur-growl.mp3",
        "translations": {}
      },
      {
        "id": "stegosaurus",
        "label": "stegosaurus",
        "x": 59.76,
        "y": 45.85,
        "w": 15.59,
        "h": 16.52,
        "sound": "sounds/dinosaur-growl.mp3",
        "translations": {}
      },
      {
        "id": "sauropod",
        "label": "sauropod",
        "x": 38.84,
        "y": 31,
        "w": 27,
        "h": 31,
        "sound": "sounds/dinosaur-growl.mp3",
        "translations": {}
      },
      {
        "id": "pterosaur",
        "label": "pterosaur",
        "x": 73,
        "y": 3,
        "w": 24,
        "h": 28,
        "sound": "sounds/dino1.mp3",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 57,
        "y": 10,
        "w": 14,
        "h": 19,
        "sound": "",
        "translations": {}
      },
      {
        "id": "eggs",
        "label": "eggs",
        "x": 45.86,
        "y": 65.5,
        "w": 1,
        "h": 2.89,
        "sound": "sounds/hatching-egg.mp3",
        "translations": {}
      },
      {
        "id": "footprints",
        "label": "footprints",
        "x": 48.46,
        "y": 85.24,
        "w": 22,
        "h": 16,
        "sound": "sounds/dinosaur-foot-steps.mp3",
        "translations": {}
      },
      {
        "id": "girl",
        "label": "girl",
        "x": 14.07,
        "y": 59.93,
        "w": 13,
        "h": 34,
        "sound": "sounds/child-laughing.mp3",
        "translations": {}
      },
      {
        "id": "boy",
        "label": "boy",
        "x": 32.4,
        "y": 60.19,
        "w": 11,
        "h": 29,
        "sound": "sounds/boy-laugh.mp3",
        "translations": {}
      },
      {
        "id": "fossil",
        "label": "fossil",
        "x": 82,
        "y": 61,
        "w": 17,
        "h": 18,
        "sound": "sounds/rattling-bones.mp3",
        "translations": {}
      },
      {
        "id": "skeleton",
        "label": "skeleton",
        "x": 41,
        "y": 38,
        "w": 15,
        "h": 25,
        "sound": "sounds/rattling-bones.mp3",
        "translations": {}
      },
      {
        "id": "museum",
        "label": "museum",
        "x": 52.14,
        "y": 6.84,
        "w": 22.03,
        "h": 15.87,
        "sound": "sounds/dinosaur-museum.mp3",
        "translations": {}
      },
      {
        "id": "plants",
        "label": "plants",
        "x": 1.88,
        "y": 69.84,
        "w": 10.59,
        "h": 32.5,
        "sound": "",
        "translations": {}
      },
      {
        "id": "glassdome",
        "label": "glassdome",
        "x": 57.32,
        "y": -2.78,
        "w": 16.19,
        "h": 9.02,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "nighttime-campground": {
    "title": "Nighttime Campground",
    "image": "images/talkabee-nighttime-campground-adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "sign",
        "label": "sign",
        "x": 21.85,
        "y": 32.96,
        "w": 11,
        "h": 22,
        "sound": "sounds/guitar-campfire.mp3",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 31,
        "y": 19,
        "w": 7,
        "h": 10,
        "sound": "sounds/bee.mp3",
        "translations": {}
      },
      {
        "id": "rv",
        "label": "rv",
        "x": 47.1,
        "y": 43.3,
        "w": 12.73,
        "h": 8.92,
        "sound": "",
        "translations": {}
      },
      {
        "id": "solar",
        "label": "solar",
        "x": 39,
        "y": 25,
        "w": 11,
        "h": 9,
        "sound": "",
        "translations": {}
      },
      {
        "id": "door",
        "label": "door",
        "x": 42.92,
        "y": 41.81,
        "w": 3.34,
        "h": 10.52,
        "sound": "sounds/guitar3.mp3",
        "translations": {}
      },
      {
        "id": "bicycle",
        "label": "bicycle",
        "x": 33.19,
        "y": 49.45,
        "w": 6.72,
        "h": 6.52,
        "sound": "",
        "translations": {}
      },
      {
        "id": "guitar",
        "label": "guitar",
        "x": 50.54,
        "y": 58.37,
        "w": 6.53,
        "h": 9.48,
        "sound": "sounds/guitar.mp3",
        "translations": {}
      },
      {
        "id": "grandpa",
        "label": "grandpa",
        "x": 61.5,
        "y": 53.15,
        "w": 4.61,
        "h": 12.81,
        "sound": "sounds/guitar.mp3",
        "translations": {}
      },
      {
        "id": "grandma",
        "label": "grandma",
        "x": 56.12,
        "y": 54.74,
        "w": 5.02,
        "h": 9.04,
        "sound": "",
        "translations": {}
      },
      {
        "id": "family",
        "label": "family",
        "x": 65.1,
        "y": 57.8,
        "w": 25.78,
        "h": 10.57,
        "sound": "sounds/conversations.mp3",
        "translations": {}
      },
      {
        "id": "fire",
        "label": "fire",
        "x": 57.18,
        "y": 67.18,
        "w": 7.34,
        "h": 11.39,
        "sound": "sounds/fire.mp3",
        "translations": {}
      },
      {
        "id": "marshmallow",
        "label": "marshmallow",
        "x": 67.45,
        "y": 67.48,
        "w": 9.76,
        "h": 8.52,
        "sound": "sounds/child-laughing.mp3",
        "translations": {}
      },
      {
        "id": "tent",
        "label": "tent",
        "x": 90.77,
        "y": 52.43,
        "w": 8.6,
        "h": 13.74,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lantern",
        "label": "lantern",
        "x": 91.56,
        "y": 65.72,
        "w": 4.55,
        "h": 8.15,
        "sound": "",
        "translations": {}
      },
      {
        "id": "raccoon",
        "label": "raccoon",
        "x": 84.99,
        "y": 76.04,
        "w": 11,
        "h": 15,
        "sound": "sounds/racoon.mp3",
        "translations": {}
      },
      {
        "id": "lake",
        "label": "lake",
        "x": 75.77,
        "y": 46.33,
        "w": 8.83,
        "h": 7.42,
        "sound": "",
        "translations": {}
      },
      {
        "id": "canoe",
        "label": "canoe",
        "x": 65.86,
        "y": 54.12,
        "w": 10,
        "h": 3.76,
        "sound": "",
        "translations": {}
      },
      {
        "id": "creek",
        "label": "creek",
        "x": 5.71,
        "y": 81.63,
        "w": 39,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "moon",
        "label": "moon",
        "x": 83.36,
        "y": 6.85,
        "w": 6.46,
        "h": 13.89,
        "sound": "sounds/wolf-howl-moon.mp3",
        "translations": {
          "en": ""
        },
        "rotation": 0,
        "z": 0
      },
      {
        "id": "stars",
        "label": "stars",
        "x": 51,
        "y": 0,
        "w": 31,
        "h": 20,
        "sound": "sounds/crickets-birds.mp3",
        "translations": {}
      },
      {
        "id": "mountains",
        "label": "mountains",
        "x": 55,
        "y": 16,
        "w": 29,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "logs",
        "label": "logs",
        "x": 59,
        "y": 78,
        "w": 14,
        "h": 12,
        "sound": "",
        "translations": {}
      },
      {
        "id": "pot",
        "label": "pot",
        "x": 64,
        "y": 75,
        "w": 9,
        "h": 10,
        "sound": "",
        "translations": {}
      },
      {
        "id": "trail",
        "label": "trail",
        "x": 8.84,
        "y": 48.76,
        "w": 3.66,
        "h": 24.39,
        "sound": "",
        "translations": {}
      },
      {
        "id": "dog",
        "label": "dog",
        "x": 33.99,
        "y": 72.36,
        "w": 10.17,
        "h": 7.54,
        "sound": "",
        "translations": {}
      },
      {
        "id": "dock",
        "label": "dock",
        "x": 64.19,
        "y": 49.56,
        "w": 6.89,
        "h": 3.74,
        "sound": "",
        "translations": {}
      },
      {
        "id": "forest",
        "label": "forest",
        "x": 85.44,
        "y": 28.2,
        "w": 11.94,
        "h": 16.61,
        "sound": "sounds/crickets-birds.mp3",
        "translations": {}
      }
    ],
    "overlays": [
      {
        "id": "overlay-1792126653432-5rzjq",
        "label": "bee-lounging-transparent.png",
        "src": "images/png/bee-lounging-transparent.png",
        "x": 25.208332538604736,
        "y": 63.888893127441406,
        "w": 7.5,
        "rotation": -5,
        "z": 4
      },
      {
        "id": "overlay-1792127307030-bengf",
        "label": "angry-bee.png",
        "src": "images/png/angry-bee.png",
        "x": 21.666665077209473,
        "y": 31.018517812093098,
        "w": 6,
        "rotation": -5,
        "z": 3
      },
      {
        "id": "overlay-1792127385611-5wxp8",
        "label": "squirrel2.png",
        "src": "images/png/squirrel2.png",
        "x": 29.895831346511844,
        "y": 53.1481467352973,
        "w": 3,
        "rotation": 0,
        "z": 3
      },
      {
        "id": "overlay-1792127452663-0msjs",
        "label": "buzzkill.png",
        "src": "images/png/buzzkill.png",
        "x": 45.9375,
        "y": 32.685186598036026,
        "w": 5.5,
        "rotation": 5,
        "z": 2
      },
      {
        "id": "overlay-1792127611346-0e6ju",
        "label": "bee-sleeping.png",
        "src": "images/png/bee-sleeping.png",
        "x": 90.36457538604736,
        "y": 56.203702290852874,
        "w": 4.5,
        "rotation": 5,
        "z": 1
      }
    ],
    "challenges": []
  },
  "grandma-grandpas-place": {
    "title": "Grandma & Grandpas Place",
    "image": "images/grandma-grandpas-place.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "grandma",
        "label": "Grandma",
        "x": 31.228697872943464,
        "y": 39.762223386991224,
        "w": 7.2,
        "h": 43,
        "sound": "sounds/Grandma-Cathy.mp3",
        "translations": {}
      },
      {
        "id": "grandpa",
        "label": "Grandpa",
        "x": 37.8857928212112,
        "y": 37.65141903479703,
        "w": 7.3,
        "h": 44,
        "sound": "sounds/grandpa-main-intro.mp3",
        "translations": {}
      },
      {
        "id": "girl",
        "label": "Girl",
        "x": 83.33883845111262,
        "y": 49.959470237659986,
        "w": 5.6,
        "h": 13.5,
        "sound": "",
        "translations": {}
      },
      {
        "id": "boy",
        "label": "Boy",
        "x": 77.961298986007,
        "y": 51.83875350326808,
        "w": 5.7,
        "h": 13.5,
        "sound": "",
        "translations": {}
      },
      {
        "id": "dog",
        "label": "Dog",
        "x": 23.37463559288714,
        "y": 63.440202333893936,
        "w": 8,
        "h": 22,
        "sound": "sounds/dog-panting.wav",
        "translations": {}
      },
      {
        "id": "rv",
        "label": "RV",
        "x": 20.90042095248547,
        "y": 24.26326754982921,
        "w": 25.5,
        "h": 17,
        "sound": "sounds/Blues.mp3",
        "translations": {}
      },
      {
        "id": "solar-panels",
        "label": "Solar panels",
        "x": 35,
        "y": 25,
        "w": 10,
        "h": 5,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lake",
        "label": "Lake",
        "x": 73.53594204050701,
        "y": 39.52568060641178,
        "w": 20,
        "h": 9,
        "sound": "",
        "translations": {}
      },
      {
        "id": "mountains",
        "label": "Mountains",
        "x": 57.50637477516868,
        "y": 24.315326079676343,
        "w": 37.5856553840916,
        "h": 11.764880094678105,
        "sound": "",
        "translations": {}
      },
      {
        "id": "trees",
        "label": "Trees",
        "x": 48.67578968016166,
        "y": 32.7918948156241,
        "w": 9.773472864485964,
        "h": 12.207267195892367,
        "sound": "",
        "translations": {}
      },
      {
        "id": "flowers",
        "label": "Flowers",
        "x": 4.071731720668668,
        "y": 70.91895583716202,
        "w": 19,
        "h": 25,
        "sound": "",
        "translations": {}
      },
      {
        "id": "birdhouse",
        "label": "Birdhouse",
        "x": 96,
        "y": 23.550442144537726,
        "w": 4,
        "h": 11,
        "sound": "",
        "translations": {}
      },
      {
        "id": "fire-pit",
        "label": "fire pit",
        "x": 72.13087175142243,
        "y": 55.45101436700915,
        "w": 6,
        "h": 8,
        "sound": "sounds/fire.mp3",
        "translations": {}
      },
      {
        "id": "guitar",
        "label": "guitar",
        "x": 64.42115840783785,
        "y": 51.36415183890466,
        "w": 7.67,
        "h": 11.43,
        "sound": "sounds/guitar3.mp3",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "underwater-adventure": {
    "title": "Underwater Adventure",
    "image": "images/Talk-A-Bee-Underwater-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "dolphin",
        "label": "dolphin",
        "x": 14,
        "y": 8,
        "w": 23,
        "h": 17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "shipwreck",
        "label": "shipwreck",
        "x": 20.73,
        "y": 30.7,
        "w": 13.43,
        "h": 29.81,
        "sound": "",
        "translations": {}
      },
      {
        "id": "turtle",
        "label": "turtle",
        "x": 31,
        "y": 25,
        "w": 21,
        "h": 28,
        "sound": "",
        "translations": {}
      },
      {
        "id": "grandma",
        "label": "grandma",
        "x": 56.52,
        "y": 21.61,
        "w": 7.19,
        "h": 6.02,
        "sound": "",
        "translations": {}
      },
      {
        "id": "shark",
        "label": "shark",
        "x": 68,
        "y": 2,
        "w": 25,
        "h": 22,
        "sound": "",
        "translations": {}
      },
      {
        "id": "clownfish",
        "label": "clownfish",
        "x": 0,
        "y": 54,
        "w": 16,
        "h": 17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "tropicalfish",
        "label": "tropicalfish",
        "x": 13,
        "y": 45,
        "w": 23,
        "h": 22,
        "sound": "",
        "translations": {}
      },
      {
        "id": "pufferfish",
        "label": "pufferfish",
        "x": 57,
        "y": 53,
        "w": 10,
        "h": 14,
        "sound": "",
        "translations": {}
      },
      {
        "id": "eel",
        "label": "eel",
        "x": 84,
        "y": 51,
        "w": 16,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "starfish",
        "label": "starfish",
        "x": 5,
        "y": 77,
        "w": 18,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "crab",
        "label": "crab",
        "x": 27,
        "y": 73,
        "w": 15,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lobster",
        "label": "lobster",
        "x": 52,
        "y": 72,
        "w": 16,
        "h": 20,
        "sound": "",
        "translations": {}
      },
      {
        "id": "octopus",
        "label": "octopus",
        "x": 79,
        "y": 72,
        "w": 21,
        "h": 25,
        "sound": "",
        "translations": {}
      },
      {
        "id": "coral",
        "label": "coral",
        "x": 68,
        "y": 38,
        "w": 16.16,
        "h": 34.17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "seaweed",
        "label": "seaweed",
        "x": 0,
        "y": 25,
        "w": 12,
        "h": 42,
        "sound": "",
        "translations": {}
      },
      {
        "id": "sand",
        "label": "sand",
        "x": 37,
        "y": 79,
        "w": 20,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "fins",
        "label": "fins",
        "x": 43.1,
        "y": 36.17,
        "w": 8.79,
        "h": 16.94,
        "sound": "",
        "translations": {}
      },
      {
        "id": "scuba-diver",
        "label": "scuba diver",
        "x": 54.4,
        "y": 22.08,
        "w": 7.2,
        "h": 17.44,
        "sound": "sounds/scuba-diver.mp3",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "mountain-ski-resort": {
    "title": "Mountain Ski Resort",
    "image": "images/Talk-A-Bee-Mountain-Ski-Resort-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "mountain",
        "label": "mountain",
        "x": 19,
        "y": 2,
        "w": 38,
        "h": 28,
        "sound": "",
        "translations": {}
      },
      {
        "id": "chairlift",
        "label": "chairlift",
        "x": 59,
        "y": 0,
        "w": 27,
        "h": 22,
        "sound": "",
        "translations": {}
      },
      {
        "id": "skiers",
        "label": "skiers",
        "x": 48,
        "y": 24,
        "w": 20,
        "h": 25,
        "sound": "",
        "translations": {}
      },
      {
        "id": "trails",
        "label": "trails",
        "x": 34,
        "y": 34,
        "w": 9,
        "h": 8,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lift",
        "label": "lift",
        "x": 34,
        "y": 40,
        "w": 9,
        "h": 7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "rentals",
        "label": "rentals",
        "x": 34,
        "y": 46,
        "w": 9,
        "h": 7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "school",
        "label": "school",
        "x": 34,
        "y": 52,
        "w": 10,
        "h": 7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "cafe",
        "label": "cafe",
        "x": 34,
        "y": 58,
        "w": 9,
        "h": 7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "skis",
        "label": "skis",
        "x": 43,
        "y": 46,
        "w": 10,
        "h": 21,
        "sound": "",
        "translations": {}
      },
      {
        "id": "snowboard",
        "label": "snowboard",
        "x": 38,
        "y": 59,
        "w": 11,
        "h": 9,
        "sound": "",
        "translations": {}
      },
      {
        "id": "grandma",
        "label": "grandma",
        "x": 54.64,
        "y": 43.25,
        "w": 6.61,
        "h": 32.17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "grandpa",
        "label": "grandpa",
        "x": 64.52,
        "y": 41,
        "w": 5.73,
        "h": 35.7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lodge",
        "label": "lodge",
        "x": 70,
        "y": 21,
        "w": 30,
        "h": 38,
        "sound": "sounds/crowd-shopping.mp3",
        "translations": {}
      },
      {
        "id": "resortsign",
        "label": "resortsign",
        "x": 86,
        "y": 31,
        "w": 13,
        "h": 10,
        "sound": "",
        "translations": {}
      },
      {
        "id": "firepit",
        "label": "firepit",
        "x": 86,
        "y": 58,
        "w": 10.15,
        "h": 12.69,
        "sound": "",
        "translations": {}
      },
      {
        "id": "chairs",
        "label": "chairs",
        "x": 74,
        "y": 59,
        "w": 15,
        "h": 19,
        "sound": "",
        "translations": {}
      },
      {
        "id": "trees",
        "label": "trees",
        "x": 0,
        "y": 8,
        "w": 28,
        "h": 51,
        "sound": "",
        "translations": {}
      },
      {
        "id": "snow",
        "label": "snow",
        "x": 20.86,
        "y": 71.87,
        "w": 21.8,
        "h": 19.06,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "airplane-flying": {
    "title": "Airplane Flying",
    "image": "images/Talk-A-Bee-Airplane-Flying-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "captain",
        "label": "captain",
        "x": 13.92,
        "y": 22.16,
        "w": 12.49,
        "h": 26.56,
        "sound": "sounds/Captain-tour-guide.mp3",
        "translations": {}
      },
      {
        "id": "pilot",
        "label": "pilot",
        "x": 65.23,
        "y": 33.18,
        "w": 8.02,
        "h": 19.2,
        "sound": "sounds/airplane-news-heart.mp3",
        "translations": {}
      },
      {
        "id": "boy",
        "label": "boy",
        "x": 8.57,
        "y": 55.8,
        "w": 15.53,
        "h": 33.15,
        "sound": "sounds/airplane-eric-fishing.mp3",
        "translations": {}
      },
      {
        "id": "girl",
        "label": "girl",
        "x": 69.09,
        "y": 59.56,
        "w": 12.97,
        "h": 20.55,
        "sound": "sounds/airplane-bella-back-seat.mp3",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 85.92,
        "y": 17.1,
        "w": 7.57,
        "h": 9.07,
        "sound": "sounds/bee.mp3",
        "translations": {}
      },
      {
        "id": "mountain",
        "label": "mountain",
        "x": 53.18,
        "y": 12.31,
        "w": 12.12,
        "h": 14.67,
        "sound": "",
        "translations": {}
      },
      {
        "id": "city",
        "label": "city",
        "x": 89.1,
        "y": 41.18,
        "w": 9.56,
        "h": 10.74,
        "sound": "",
        "translations": {}
      },
      {
        "id": "tower",
        "label": "tower",
        "x": 83.18,
        "y": 38.45,
        "w": 3.88,
        "h": 14.35,
        "sound": "",
        "translations": {}
      },
      {
        "id": "water",
        "label": "water",
        "x": 73.89,
        "y": 35.65,
        "w": 5.41,
        "h": 12.72,
        "sound": "",
        "translations": {}
      },
      {
        "id": "ferry",
        "label": "ferry",
        "x": 92.93,
        "y": 53.41,
        "w": 5.77,
        "h": 7.5,
        "sound": "sounds/boat-horn.mp3",
        "translations": {}
      },
      {
        "id": "wing",
        "label": "wing",
        "x": -0.1,
        "y": 31,
        "w": 11.15,
        "h": 16.41,
        "sound": "",
        "translations": {}
      },
      {
        "id": "overhead",
        "label": "overhead",
        "x": 27,
        "y": 0,
        "w": 49,
        "h": 15,
        "sound": "",
        "translations": {}
      },
      {
        "id": "throttle",
        "label": "throttle",
        "x": 42,
        "y": 64,
        "w": 15,
        "h": 28,
        "sound": "",
        "translations": {}
      },
      {
        "id": "headset",
        "label": "headset",
        "x": 83.41,
        "y": 54.43,
        "w": 4.44,
        "h": 29.34,
        "sound": "",
        "translations": {}
      },
      {
        "id": "controls",
        "label": "controls",
        "x": 36,
        "y": 62,
        "w": 27,
        "h": 33,
        "sound": "",
        "translations": {}
      },
      {
        "id": "clouds",
        "label": "clouds",
        "x": 2.45,
        "y": 8.37,
        "w": 12.27,
        "h": 14.09,
        "sound": "",
        "translations": {}
      },
      {
        "id": "forest",
        "label": "forest",
        "x": 44.93,
        "y": 29.72,
        "w": 7.03,
        "h": 9.97,
        "sound": "",
        "translations": {}
      },
      {
        "id": "airplane",
        "label": "airplane",
        "x": 39.28,
        "y": 13.74,
        "w": 5.22,
        "h": 29.94,
        "sound": "sounds/airplane-ambience.mp3",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "zoo": {
    "title": "Zoo",
    "image": "images/Talk-A-Bee-Zoo-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "elephant",
        "label": "elephant",
        "x": 7.13,
        "y": 6.95,
        "w": 18.86,
        "h": 41.5,
        "sound": "sounds/elephant.mp3",
        "translations": {}
      },
      {
        "id": "giraffe",
        "label": "giraffe",
        "x": 33,
        "y": 13.83,
        "w": 11.65,
        "h": 28.61,
        "sound": "sounds/giraffe.mp3",
        "translations": {}
      },
      {
        "id": "mountain",
        "label": "mountain",
        "x": 48.56,
        "y": 12.63,
        "w": 11.28,
        "h": 12.59,
        "sound": "",
        "translations": {}
      },
      {
        "id": "monkey",
        "label": "monkey",
        "x": 73.93,
        "y": 3.31,
        "w": 7.25,
        "h": 10.06,
        "sound": "sounds/monkey.mp3",
        "translations": {}
      },
      {
        "id": "parrot",
        "label": "parrot",
        "x": 93.99,
        "y": 5.15,
        "w": 3.75,
        "h": 18.38,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lion",
        "label": "lion",
        "x": 80.45,
        "y": 27.16,
        "w": 16.68,
        "h": 13.98,
        "sound": "sounds/lion.mp3",
        "translations": {}
      },
      {
        "id": "zoosign",
        "label": "zoosign",
        "x": 53.8,
        "y": 35.2,
        "w": 18.44,
        "h": 7.93,
        "sound": "",
        "translations": {}
      },
      {
        "id": "zebra",
        "label": "zebra",
        "x": 51.97,
        "y": 46.97,
        "w": 7.86,
        "h": 12.8,
        "sound": "sounds/zebra.mp3",
        "translations": {}
      },
      {
        "id": "tram",
        "label": "tram",
        "x": 62.25,
        "y": 46.95,
        "w": 10.81,
        "h": 12.57,
        "sound": "",
        "translations": {}
      },
      {
        "id": "penguins",
        "label": "penguins",
        "x": 60.24,
        "y": 66.07,
        "w": 12.6,
        "h": 12.06,
        "sound": "",
        "translations": {}
      },
      {
        "id": "seal",
        "label": "seal",
        "x": 86.8,
        "y": 53.5,
        "w": 9.02,
        "h": 16.69,
        "sound": "sounds/seal.mp3",
        "translations": {}
      },
      {
        "id": "waterfall",
        "label": "waterfall",
        "x": 94.13,
        "y": 41.67,
        "w": 7.7,
        "h": 20.41,
        "sound": "sounds/waterfall-big.mp3",
        "translations": {}
      },
      {
        "id": "pool",
        "label": "pool",
        "x": 75.13,
        "y": 72.86,
        "w": 11.36,
        "h": 9.73,
        "sound": "sounds/water-stream.mp3",
        "translations": {}
      },
      {
        "id": "boy",
        "label": "boy",
        "x": 25.6,
        "y": 59.61,
        "w": 11.91,
        "h": 35.04,
        "sound": "",
        "translations": {}
      },
      {
        "id": "girl",
        "label": "girl",
        "x": 40.67,
        "y": 72.06,
        "w": 17.92,
        "h": 15.83,
        "sound": "sounds/girl.mp3",
        "translations": {}
      },
      {
        "id": "visitors",
        "label": "visitors",
        "x": 21.99,
        "y": 46.12,
        "w": 24.81,
        "h": 14.7,
        "sound": "",
        "translations": {}
      },
      {
        "id": "path",
        "label": "path",
        "x": 32.95,
        "y": 81.04,
        "w": 5.35,
        "h": 7.56,
        "sound": "",
        "translations": {}
      },
      {
        "id": "space-needle",
        "label": "space needle",
        "x": 72.53,
        "y": 22.73,
        "w": 2.09,
        "h": 9.85,
        "sound": "",
        "translations": {}
      },
      {
        "id": "buildings",
        "label": "buildings",
        "x": 65.04,
        "y": 24.87,
        "w": 6.68,
        "h": 7.54,
        "sound": "",
        "translations": {}
      },
      {
        "id": "tree",
        "label": "tree",
        "x": 86.13,
        "y": 0.27,
        "w": 4.8,
        "h": 22.63,
        "sound": "",
        "translations": {}
      },
      {
        "id": "cave",
        "label": "cave",
        "x": 77.79,
        "y": 52.53,
        "w": 6,
        "h": 8,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "great-wall-of-china": {
    "title": "Great Wall of China",
    "image": "images/Talk-A-Bee-Great-Wall-of-China-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "wall",
        "label": "wall",
        "x": 56.07,
        "y": 32.44,
        "w": 6.27,
        "h": 16.77,
        "sound": "",
        "translations": {}
      },
      {
        "id": "watchtower",
        "label": "watchtower",
        "x": 83,
        "y": 8,
        "w": 16,
        "h": 31,
        "sound": "",
        "translations": {}
      },
      {
        "id": "watchtowers",
        "label": "watchtowers",
        "x": 52.41,
        "y": 18.89,
        "w": 30.65,
        "h": 16.24,
        "sound": "",
        "translations": {}
      },
      {
        "id": "mountains",
        "label": "mountains",
        "x": 34.5,
        "y": 22.44,
        "w": 13.52,
        "h": 13.26,
        "sound": "",
        "translations": {}
      },
      {
        "id": "balloons",
        "label": "balloons",
        "x": 57,
        "y": 1,
        "w": 17,
        "h": 17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "eagle",
        "label": "eagle",
        "x": 78,
        "y": 1,
        "w": 11,
        "h": 12,
        "sound": "sounds/eagle.mp3",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 2,
        "y": 2,
        "w": 12,
        "h": 17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "squirrel",
        "label": "squirrel",
        "x": 92,
        "y": 49,
        "w": 8,
        "h": 17,
        "sound": "sounds/squirrel.mp3",
        "translations": {}
      },
      {
        "id": "river",
        "label": "river",
        "x": 22.11,
        "y": 52.14,
        "w": 3.91,
        "h": 16.37,
        "sound": "",
        "translations": {}
      },
      {
        "id": "village",
        "label": "village",
        "x": 7,
        "y": 44.74,
        "w": 17.73,
        "h": 7.65,
        "sound": "",
        "translations": {}
      },
      {
        "id": "bridge",
        "label": "bridge",
        "x": 21.93,
        "y": 59.06,
        "w": 15.11,
        "h": 5.19,
        "sound": "",
        "translations": {}
      },
      {
        "id": "trees",
        "label": "trees",
        "x": 1,
        "y": 1,
        "w": 30,
        "h": 26,
        "sound": "sounds/leaves.mp3",
        "translations": {}
      },
      {
        "id": "walkway",
        "label": "walkway",
        "x": 43.96,
        "y": 72.69,
        "w": 9.32,
        "h": 29.67,
        "sound": "",
        "translations": {}
      },
      {
        "id": "tourists",
        "label": "tourists",
        "x": 55.67,
        "y": 53.48,
        "w": 34.02,
        "h": 13.09,
        "sound": "sounds/talking-people.mp3",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "hollywood-movie-making": {
    "title": "Hollywood Movie Making",
    "image": "images/Talk-A-Bee-Hollywood-Movie-Making-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "studio",
        "label": "studio",
        "x": 12.09,
        "y": 19.81,
        "w": 10.86,
        "h": 17.57,
        "sound": "",
        "translations": {}
      },
      {
        "id": "hollywood",
        "label": "hollywood",
        "x": 36.11,
        "y": 22,
        "w": 15.02,
        "h": 8.3,
        "sound": "",
        "translations": {}
      },
      {
        "id": "watertower",
        "label": "watertower",
        "x": 87,
        "y": 2,
        "w": 9,
        "h": 19,
        "sound": "",
        "translations": {}
      },
      {
        "id": "helicopter",
        "label": "helicopter",
        "x": 61,
        "y": 1,
        "w": 14,
        "h": 14,
        "sound": "sounds/helicopter.mp3",
        "translations": {}
      },
      {
        "id": "drone",
        "label": "drone",
        "x": 54,
        "y": 6,
        "w": 9,
        "h": 10,
        "sound": "",
        "translations": {}
      },
      {
        "id": "greenscreen",
        "label": "greenscreen",
        "x": 88,
        "y": 20.46,
        "w": 12,
        "h": 28,
        "sound": "",
        "translations": {}
      },
      {
        "id": "boommic",
        "label": "boommic",
        "x": 73.86,
        "y": 29.89,
        "w": 12.43,
        "h": 6.8,
        "sound": "",
        "translations": {}
      },
      {
        "id": "explosion",
        "label": "explosion",
        "x": 75,
        "y": 36,
        "w": 14,
        "h": 20,
        "sound": "sounds/explosion.mp3",
        "translations": {}
      },
      {
        "id": "stuntcar",
        "label": "stuntcar",
        "x": 72,
        "y": 48,
        "w": 17,
        "h": 15,
        "sound": "",
        "translations": {}
      },
      {
        "id": "camera",
        "label": "camera",
        "x": 50,
        "y": 39,
        "w": 18,
        "h": 29,
        "sound": "",
        "translations": {}
      },
      {
        "id": "monitor",
        "label": "monitor",
        "x": 65,
        "y": 59,
        "w": 19,
        "h": 23,
        "sound": "",
        "translations": {}
      },
      {
        "id": "clapperboard",
        "label": "clapperboard",
        "x": 76,
        "y": 62,
        "w": 8,
        "h": 12,
        "sound": "",
        "translations": {}
      },
      {
        "id": "directorchair",
        "label": "directorchair",
        "x": 1,
        "y": 55,
        "w": 19,
        "h": 30,
        "sound": "",
        "translations": {}
      },
      {
        "id": "costumes",
        "label": "costumes",
        "x": 91,
        "y": 43.28,
        "w": 9,
        "h": 25,
        "sound": "",
        "translations": {}
      },
      {
        "id": "makeup",
        "label": "makeup",
        "x": 87,
        "y": 68,
        "w": 13,
        "h": 27,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lights",
        "label": "lights",
        "x": 1.04,
        "y": 12.39,
        "w": 9.94,
        "h": 27.91,
        "sound": "",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 49,
        "y": 34,
        "w": 12,
        "h": 17,
        "sound": "",
        "translations": {}
      },
      {
        "id": "crew",
        "label": "crew",
        "x": 42.06,
        "y": 45.03,
        "w": 35.93,
        "h": 11.56,
        "sound": "sounds/crowd-shopping.mp3",
        "translations": {}
      },
      {
        "id": "palmtrees",
        "label": "palmtrees",
        "x": 0,
        "y": 0,
        "w": 34.09,
        "h": 11.19,
        "sound": "",
        "translations": {}
      },
      {
        "id": "radio-tower",
        "label": "radio tower",
        "x": 49.02,
        "y": 11.04,
        "w": 1.94,
        "h": 9.11,
        "sound": "",
        "translations": {}
      },
      {
        "id": "tourists",
        "label": "tourists",
        "x": 20.25,
        "y": 47.28,
        "w": 23.18,
        "h": 22.16,
        "sound": "sounds/talking-people.mp3",
        "translations": {}
      },
      {
        "id": "building",
        "label": "building",
        "x": 65.45,
        "y": 23.2,
        "w": 10.43,
        "h": 7.81,
        "sound": "",
        "translations": {}
      },
      {
        "id": "palm-tree",
        "label": "palm tree",
        "x": 28.6,
        "y": 20.43,
        "w": 6,
        "h": 8,
        "sound": "",
        "translations": {}
      },
      {
        "id": "movie-props",
        "label": "movie props",
        "x": 71.7,
        "y": 83.82,
        "w": 15.84,
        "h": 11.89,
        "sound": "",
        "translations": {}
      },
      {
        "id": "studio-lighting",
        "label": "studio lighting",
        "x": 80.3,
        "y": 13.43,
        "w": 6,
        "h": 8,
        "sound": "",
        "translations": {}
      },
      {
        "id": "walk-way",
        "label": "walk way",
        "x": 24.12,
        "y": 80.8,
        "w": 28.24,
        "h": 19.76,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "hang-gliding": {
    "title": "Hang Gliding",
    "image": "images/Talk-A-Bee-Hang-Gliding-Adventure.jpg",
    "lessons": [],
    "hotspots": [
      {
        "id": "glider",
        "label": "glider",
        "x": 14,
        "y": 0,
        "w": 83.59,
        "h": 14.17,
        "sound": "sounds/wind-blowing.mp3",
        "translations": {}
      },
      {
        "id": "boy",
        "label": "boy",
        "x": 42.13,
        "y": 14.13,
        "w": 13.17,
        "h": 18.96,
        "sound": "sounds/laughing-male.mp3",
        "translations": {}
      },
      {
        "id": "bee",
        "label": "bee",
        "x": 57.61,
        "y": 23.39,
        "w": 9.09,
        "h": 10.57,
        "sound": "",
        "translations": {}
      },
      {
        "id": "girl",
        "label": "girl",
        "x": 68.46,
        "y": 21.82,
        "w": 11.54,
        "h": 15.33,
        "sound": "sounds/laughing-adult-woman.mp3",
        "translations": {}
      },
      {
        "id": "controlbar",
        "label": "controlbar",
        "x": 32.03,
        "y": 36.08,
        "w": 54.11,
        "h": 5.8,
        "sound": "",
        "translations": {}
      },
      {
        "id": "helmet",
        "label": "helmet",
        "x": 47,
        "y": 11,
        "w": 10,
        "h": 14,
        "sound": "",
        "translations": {}
      },
      {
        "id": "eagle",
        "label": "eagle",
        "x": 17.12,
        "y": 13.55,
        "w": 10.91,
        "h": 12.37,
        "sound": "sounds/eagle.mp3",
        "translations": {}
      },
      {
        "id": "mountains",
        "label": "mountains",
        "x": -3.7,
        "y": 22.43,
        "w": 23.52,
        "h": 14.39,
        "sound": "",
        "translations": {}
      },
      {
        "id": "lake",
        "label": "lake",
        "x": 64.09,
        "y": 45.33,
        "w": 9.38,
        "h": 6.32,
        "sound": "",
        "translations": {}
      },
      {
        "id": "waterfall",
        "label": "waterfall",
        "x": 9.97,
        "y": 47.09,
        "w": 10.07,
        "h": 18.31,
        "sound": "sounds/waterfall.mp3",
        "translations": {}
      },
      {
        "id": "town",
        "label": "town",
        "x": 72.54,
        "y": 48.49,
        "w": 15.46,
        "h": 15.69,
        "sound": "",
        "translations": {}
      },
      {
        "id": "boat",
        "label": "boat",
        "x": 53.45,
        "y": 51.39,
        "w": 5.28,
        "h": 9.57,
        "sound": "",
        "translations": {}
      },
      {
        "id": "train",
        "label": "train",
        "x": 63.29,
        "y": 70.03,
        "w": 19.44,
        "h": 10.22,
        "sound": "",
        "translations": {}
      },
      {
        "id": "bridge",
        "label": "bridge",
        "x": 58,
        "y": 74,
        "w": 24,
        "h": 18,
        "sound": "",
        "translations": {}
      },
      {
        "id": "river",
        "label": "river",
        "x": 54,
        "y": 78,
        "w": 24,
        "h": 21,
        "sound": "sounds/river.mp3",
        "translations": {}
      },
      {
        "id": "rv",
        "label": "rv",
        "x": 90.63,
        "y": 66.74,
        "w": 8.85,
        "h": 9.78,
        "sound": "",
        "translations": {}
      },
      {
        "id": "road",
        "label": "road",
        "x": 84.78,
        "y": 63.49,
        "w": 5.43,
        "h": 9.06,
        "sound": "",
        "translations": {}
      },
      {
        "id": "cabin",
        "label": "cabin",
        "x": 23.78,
        "y": 69.5,
        "w": 13.25,
        "h": 14.3,
        "sound": "",
        "translations": {}
      },
      {
        "id": "deer",
        "label": "deer",
        "x": 2.45,
        "y": 64.7,
        "w": 10.77,
        "h": 18.78,
        "sound": "",
        "translations": {}
      },
      {
        "id": "forest",
        "label": "forest",
        "x": 28.88,
        "y": 52.41,
        "w": 14.63,
        "h": 12.39,
        "sound": "",
        "translations": {}
      }
    ],
    "overlays": [],
    "challenges": []
  },
  "seattle-fishing-charter": {
    "title": "Seattle Fishing Charter",
    "image": "images/Talk-A-Bee-Seattle-Fishing-Adventure.jpg",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "train-engineer": {
    "title": "Train Engineer",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "cave-exploration": {
    "title": "Cave Exploration",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "bicycle-race": {
    "title": "Bicycle Race",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "softball": {
    "title": "Softball",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "football": {
    "title": "Football",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "college-rowing": {
    "title": "College Rowing",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "boat-locks": {
    "title": "Boat Locks",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "skydiving": {
    "title": "Skydiving",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "dog-show": {
    "title": "Dog Show",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "river-rafting": {
    "title": "River Rafting",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "golf": {
    "title": "Golf",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "hot-air-balloon": {
    "title": "Hot Air Balloon",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "large-picnic": {
    "title": "Large Picnic",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "oval-office": {
    "title": "Oval Office",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "nasa-spacewalk": {
    "title": "NASA Spacewalk",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "moon": {
    "title": "Moon",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "mission-control": {
    "title": "Mission Control",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "spaceship-window-saturn": {
    "title": "Spaceship Window Saturn",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "spaceship-window-earth": {
    "title": "Spaceship Window Earth",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "military-drill-sergeant": {
    "title": "Military Drill Sergeant",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "aircraft-carrier": {
    "title": "Aircraft Carrier",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "dance-floor": {
    "title": "Dance Floor",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "bird-sanctuary": {
    "title": "Bird Sanctuary",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "library": {
    "title": "Library",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "train-station": {
    "title": "Train Station",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "animals-farm": {
    "title": "Animals Farm",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "aunt-julies-island-retreat": {
    "title": "Aunt Julies Island Retreat",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "sea-adventures": {
    "title": "Sea Adventures",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "protect-earth": {
    "title": "Protect Earth",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "campground": {
    "title": "campground",
    "image": "",
    "lessons": [
      {
        "text": "Welcome to campground",
        "translations": {}
      }
    ],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  }
});
