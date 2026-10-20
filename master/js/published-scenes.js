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
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "mountain-ski-resort": {
    "title": "Mountain Ski Resort",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "airplane-flying": {
    "title": "Airplane Flying",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "zoo": {
    "title": "Zoo",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "great-wall-of-china": {
    "title": "Great Wall of China",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "hollywood-movie-making": {
    "title": "Hollywood Movie Making",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "hang-gliding": {
    "title": "Hang Gliding",
    "image": "",
    "lessons": [],
    "hotspots": [],
    "overlays": [],
    "challenges": []
  },
  "seattle-fishing-charter": {
    "title": "Seattle Fishing Charter",
    "image": "",
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
