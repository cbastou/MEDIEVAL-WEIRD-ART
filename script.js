(function () {
  "use strict";

  // Contenu des 3 faces de chaque carte (la face 1 est déjà dans index.html).
  var CARDS = {
 "croco": {
  "name": "Crocodile",
  "states": [
   {
    "img": "images/croco-1.jpg",
    "alt": "Crocodile (document ancien)",
    "caption": "Bestiaire de Rochester (British Library, manuscrit Royal MS 12 F XIII, folio 24r),1230",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/croco-2.jpg",
    "alt": "Crocodile, représentation actuelle",
    "caption": "Bestiaire de Rochester (British Library, manuscrit Royal MS 12 F XIII, folio 24r),1230",
    "crop": null,
    "bg": "#f5f4f4"
   },
   {
    "img": "images/croco-3.jpg",
    "alt": "Crocodile, illustration de Keigo",
    "caption": "Keigo",
    "crop": null,
    "bg": "#f5f4f4"
   }
  ]
 },
 "chameau": {
  "name": "Chameau",
  "states": [
   {
    "img": "images/chameau-1.jpg",
    "alt": "Chameau (document ancien)",
    "caption": "Encyclopédie zoologique “Historiae animalium” du naturaliste suisse Conrad Gessner, 1551",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/chameau-2.jpg",
    "alt": "Chameau, représentation actuelle",
    "caption": "Grand mammifère à deux bosses adapté au désert, du latin camelus, issu du grec kamêlos",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/chameau-3.jpg",
    "alt": "Chameau, illustration de Margot Chaussadas",
    "caption": "Margot Chaussadas",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "rhino": {
  "name": "Rhinocéros",
  "states": [
   {
    "img": "images/rhino-1.jpg",
    "alt": "Rhinocéros (document ancien)",
    "caption": "Folio d'un manuscrit médiéval du Physiologus (version Dicta Chrysostomi) 1150-1180",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/rhino-2.jpg",
    "alt": "Rhinocéros, représentation actuelle",
    "caption": "Gros mammifère à une ou deux cornes sur le nez, du latin rhinoceros, issu du grec rhinokerôs (« nez-corne »).",
    "crop": {
     "h": "100%",
     "l": "-11.61%",
     "t": "0.44%",
     "w": "179.27%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/rhino-3.jpg",
    "alt": "Rhinocéros, illustration de Joëlle Bucher",
    "caption": "Joëlle Bucher",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "giraffe": {
  "name": "Girafe",
  "states": [
   {
    "img": "images/giraffe-1.jpg",
    "alt": "Girafe (document ancien)",
    "caption": "The Book of John Maundeuile de Jean de Mandeville, 1410-1420",
    "crop": {
     "h": "100%",
     "l": "-4.05%",
     "t": "1.64%",
     "w": "145.5%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/giraffe-2.jpg",
    "alt": "Girafe, représentation actuelle",
    "caption": "Mammifère africain au cou très long, de l’italien giraffa, de l’arabe zarafa (le latin médiéval disait camelopardalis).",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/giraffe-3.jpg",
    "alt": "Girafe, illustration de Paulo Estéfanas",
    "caption": "Paulo Estéfanas",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "escargot": {
  "name": "Escargot",
  "states": [
   {
    "img": "images/escargot-1.jpg",
    "alt": "Escargot (document ancien)",
    "caption": "Manuscrit médiéval “Der naturen bloeme” (La Fleur de la nature), Jacob van Maerlant, 1340-1350.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/escargot-2.jpg",
    "alt": "Escargot, représentation actuelle",
    "caption": "Mollusque gastéropode terrestre à coquille spiralée, de l’occitan escaragol, probablement issu du latin “scarabeus”.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/escargot-3.jpg",
    "alt": "Escargot, illustration de Viktoriia Blazhuk",
    "caption": "Viktoriia Blazhuk",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "chat": {
  "name": "Chat",
  "states": [
   {
    "img": "images/chat-1.jpg",
    "alt": "Chat (document ancien)",
    "caption": "Recueil d'aquarelles du XVIIe siècle en Allemagne du Sud.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/chat-2.jpg",
    "alt": "Chat, représentation actuelle",
    "caption": "Petit félin domestique, du latin tardif cattus.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/chat-3.jpg",
    "alt": "Chat, illustration de Aliaga Mirguseinov",
    "caption": "Aliaga Mirguseinov",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "chouette": {
  "name": "Chouette",
  "states": [
   {
    "img": "images/chouette-1.jpg",
    "alt": "Chouette (document ancien)",
    "caption": "Bestiaire de Salisbury (vers 1220–1230)",
    "crop": {
     "h": "88.15%",
     "l": "26.56%",
     "t": "6.81%",
     "w": "41.92%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/chouette-2.jpg",
    "alt": "Chouette, représentation actuelle",
    "caption": "Rapace nocturne sans aigrettes, de l’ancien français choue (origine germanique, le latin disait noctua).",
    "crop": {
     "h": "152.45%",
     "l": "0%",
     "t": "-1.85%",
     "w": "100%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/chouette-3.jpg",
    "alt": "Chouette, illustration de Nour Nasser",
    "caption": "Nour Nasser",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "tigre": {
  "name": "Tigre",
  "states": [
   {
    "img": "images/tigre-1.jpg",
    "alt": "Tigre (document ancien)",
    "caption": "Enluminure issue du Bestiaire d'Aberdeen (folio 8 recto, vers 1200)",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/tigre-2.jpg",
    "alt": "Tigre, représentation actuelle",
    "caption": "Grand félin d’Asie à robe rayée, du latin tigris, issu du grec tigris (origine iranienne).",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/tigre-3.jpg",
    "alt": "Tigre, illustration de Katya P",
    "caption": "Katya P",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "leopard": {
  "name": "Léopard",
  "states": [
   {
    "img": "images/leopard-1.jpg",
    "alt": "Léopard (document ancien)",
    "caption": "Manuscrit Bestiaire d’Aberdeen ( Aberdeen Bestiary), Angleterre, vers 1200",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/leopard-2.jpg",
    "alt": "Léopard, représentation actuelle",
    "caption": "Grand félin tacheté d’Afrique et d’Asie, du latin leopardus, issu du grec leopardos (« lion-panthère »).",
    "crop": {
     "h": "100%",
     "l": "-2.28%",
     "t": "0%",
     "w": "138.75%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/leopard-3.jpg",
    "alt": "Léopard, illustration de Tomo Sturgess",
    "caption": "Tomo Sturgess",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "gorille": {
  "name": "Gorille",
  "states": [
   {
    "img": "images/gorille-1.jpg",
    "alt": "Gorille (document ancien)",
    "caption": "Bestiaire divin de Guillaume le Clerc de Normandie, un manuscrit du XIIIe siècle conservé à la BNF, 1444.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/gorille-2.jpg",
    "alt": "Gorille, représentation actuelle",
    "caption": "Plus grand des primates, vivant en Afrique centrale, du latin savant « gorilla », repris du grec « gorillai ».",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/gorille-3.jpg",
    "alt": "Gorille, illustration de Niels Barrier",
    "caption": "Niels Barrier",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "hippo": {
  "name": "Hippopotame",
  "states": [
   {
    "img": "images/hippo-1.jpg",
    "alt": "Hippopotame (document ancien)",
    "caption": "Enluminure issue du Liber de natura rerum de Thomas de Cantimpré, France, vers 1290",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/hippo-2.jpg",
    "alt": "Hippopotame, représentation actuelle",
    "caption": "Gros mammifère africain semi-aquatique, du latin hippopotamus, issu du grec hippopotamos (« cheval de rivière »).",
    "crop": {
     "h": "100%",
     "l": "-42.8%",
     "t": "0.25%",
     "w": "145.79%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/hippo-3.jpg",
    "alt": "Hippopotame, illustration de Guillaume Plantevin",
    "caption": "Guillaume Plantevin",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "tortue": {
  "name": "Tortue",
  "states": [
   {
    "img": "images/tortue-1.jpg",
    "alt": "Tortue (document ancien)",
    "caption": "Bréviaire d'Amédée VIII de Savoie (ou Bréviaire de Marie de Savoie) 1430.",
    "crop": {
     "h": "100%",
     "l": "-37.08%",
     "t": "-0.59%",
     "w": "155.11%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/tortue-2.jpg",
    "alt": "Tortue, représentation actuelle",
    "caption": "Reptile à carapace, du latin médiéval tartaruca (« bête du Tartare »).",
    "crop": {
     "h": "100%",
     "l": "-14.47%",
     "t": "0%",
     "w": "145.79%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/tortue-3.jpg",
    "alt": "Tortue, illustration de Tonia Svetleishaia",
    "caption": "Tonia Svetleishaia",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "hyene": {
  "name": "Hyène",
  "states": [
   {
    "img": "images/hyene-1.jpg",
    "alt": "Hyène (document ancien)",
    "caption": "Livre d'Heures, conservé à la Bibliothèque Municipale de Lyon, vers 1505–1510.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/hyene-2.jpg",
    "alt": "Hyène, représentation actuelle",
    "caption": "Mammifère carnivore charognard d’Afrique et d’Asie, du latin « hyaena », issu du grec « hyaina ».",
    "crop": {
     "h": "100%",
     "l": "-1.93%",
     "t": "0.31%",
     "w": "149.4%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/hyene-3.jpg",
    "alt": "Hyène, illustration de Olivier SILVEN",
    "caption": "Olivier SILVEN",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "grenouille": {
  "name": "Grenouille",
  "states": [
   {
    "img": "images/grenouille-1.jpg",
    "alt": "Grenouille (document ancien)",
    "caption": "Livre d'Heures, conservé à la Bibliothèque Municipale de Lyon, vers 1505–1510.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/grenouille-2.jpg",
    "alt": "Grenouille, représentation actuelle",
    "caption": "Amphibien sauteur à peau lisse, du latin populaire ranucula, diminutif de rana.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/grenouille-3.jpg",
    "alt": "Grenouille, illustration de Olivier SILVEN",
    "caption": "Olivier SILVEN",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "paon": {
  "name": "Paon",
  "states": [
   {
    "img": "images/paon-1.jpg",
    "alt": "Paon (document ancien)",
    "caption": "Bestiaire anglais datant d'environ, (conservé à la bibliothèque bodléienne, MS Bodley ), 1225–1250",
    "crop": {
     "h": "115.31%",
     "l": "-4.34%",
     "t": "-6.73%",
     "w": "106.46%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/paon-2.jpg",
    "alt": "Paon, représentation actuelle",
    "caption": "Grand oiseau à queue ocellée déployée en roue, du latin pavo, pavonis.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/paon-3.jpg",
    "alt": "Paon, illustration de Stefano Pietramala",
    "caption": "Stefano Pietramala",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "chien": {
  "name": "Chien",
  "states": [
   {
    "img": "images/chien-1.jpg",
    "alt": "Chien (document ancien)",
    "caption": "Une peinture ancienne, parfois mentionnée dans le contexte de la Dispute de St Catherine avec les philosophes (vers 1505–1510)",
    "crop": {
     "h": "120.67%",
     "l": "-37.55%",
     "t": "-12.65%",
     "w": "208.67%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/chien-2.jpg",
    "alt": "Chien, représentation actuelle",
    "caption": "Mammifère carnivore domestiqué, du latin “canis”.",
    "crop": {
     "h": "100%",
     "l": "-0.9%",
     "t": "0%",
     "w": "127.18%"
    },
    "bg": "#ffffff"
   },
   {
    "img": "images/chien-3.jpg",
    "alt": "Chien, illustration de Natalia Mishchenko",
    "caption": "Natalia Mishchenko",
    "crop": null,
    "bg": "#ffffff"
   }
  ]
 },
 "lion": {
  "name": "Lion",
  "states": [
   {
    "img": "images/lion-1.jpg",
    "alt": "Lion (document ancien)",
    "caption": "Enluminé de “Decretum Gratiani” (Décret de Gratien) 1340-1350",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/lion-2.jpg",
    "alt": "Lion, représentation actuelle",
    "caption": "Grand félin d’Afrique, dont le mâle porte une crinière, du latin leo, leonis, issu du grec leôn.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/lion-3.jpg",
    "alt": "Lion, illustration de Leo Teixeira",
    "caption": "Leo Teixeira",
    "crop": {
     "h": "100%",
     "l": "-99.02%",
     "t": "0%",
     "w": "257.45%"
    },
    "bg": "#ffffff"
   }
  ]
 },
 "elephant": {
  "name": "Éléphant",
  "states": [
   {
    "img": "images/elephant-1.jpg",
    "alt": "Éléphant (document ancien)",
    "caption": "Enluminure issu du manuscrit “Der naturen bloemede”, Jacob van Maerlant, vers 1340-1350",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/elephant-2.jpg",
    "alt": "Éléphant, représentation actuelle",
    "caption": "Plus grand mammifère terrestre, à trompe et défenses, du latin elephantus, issu du grec elephas.",
    "crop": null,
    "bg": "#ffffff"
   },
   {
    "img": "images/elephant-3.jpg",
    "alt": "Éléphant, illustration de Irwin Borjas",
    "caption": "Irwin Borjas",
    "crop": {
     "h": "128.61%",
     "l": "0%",
     "t": "-10.15%",
     "w": "100%"
    },
    "bg": "#ffffff"
   }
  ]
 }
};

  var TOTAL = 3;

  function setFace(face, d) {
    face.style.setProperty("--plate", d.bg);
    var thumb = face.querySelector(".thumb");
    thumb.textContent = "";
    var img = document.createElement("img");
    img.src = d.img;
    img.alt = d.alt;
    img.width = 214;
    img.height = 208;
    img.decoding = "async";
    if (d.crop) {
      var wrap = document.createElement("span");
      wrap.className = "crop";
      img.style.cssText = "height:" + d.crop.h + ";left:" + d.crop.l + ";top:" + d.crop.t + ";width:" + d.crop.w;
      wrap.appendChild(img);
      thumb.appendChild(wrap);
    } else {
      img.className = "fill";
      thumb.appendChild(img);
    }
    face.querySelector(".caption").textContent = d.caption;
  }

  function setup(card) {
    var item = CARDS[card.getAttribute("data-slug")];
    if (!item) return;
    var inner = card.querySelector(".card-inner");
    var faces = [inner.querySelector(".face-a"), inner.querySelector(".face-b")];
    var turns = 0;   // nombre de demi-tours effectués
    var state = 0;   // face affichée : 0, 1 ou 2
    var busy = false;

    card.addEventListener("click", function () {
      if (busy) return;
      busy = true;

      var next = (state + 1) % TOTAL;
      var hidden = faces[turns % 2 === 0 ? 1 : 0];
      var shown = faces[turns % 2 === 0 ? 0 : 1];

      setFace(hidden, item.states[next]);
      hidden.removeAttribute("aria-hidden");
      shown.setAttribute("aria-hidden", "true");

      turns += 1;
      state = next;
      inner.style.transform = "rotateY(" + turns * 180 + "deg)";
      card.setAttribute("aria-label", "Retourner la carte " + item.name + " (face " + (state + 1) + " sur " + TOTAL + ")");

      var done = function () { busy = false; };
      inner.addEventListener("transitionend", function onEnd(e) {
        if (e.target !== inner) return;
        inner.removeEventListener("transitionend", onEnd);
        done();
      });
      setTimeout(done, 900); // filet de sécurité (ex. animations réduites)
    });
  }

  document.querySelectorAll(".card").forEach(setup);

  // Précharge les faces 2 et 3 quand le navigateur est disponible.
  function preload() {
    Object.keys(CARDS).forEach(function (slug) {
      [1, 2].forEach(function (k) { new Image().src = CARDS[slug].states[k].img; });
    });
  }
  window.addEventListener("load", function () {
    if ("requestIdleCallback" in window) requestIdleCallback(preload);
    else setTimeout(preload, 1500);
  });
})();
